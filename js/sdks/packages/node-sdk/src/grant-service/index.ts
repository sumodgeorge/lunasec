import { GrantType, isToken, Tokenizer } from '@lunasec/tokenizer-sdk';
import { Request } from 'express';

import { LunaSecAuthentication } from '../authentication';
import { SessionIdProvider } from '../authentication/types';

export class LunaSecGrantService {
  private readonly auth: LunaSecAuthentication;
  private readonly sessionIdProvider: SessionIdProvider | undefined;

  constructor(auth: LunaSecAuthentication, sessionIdProvider?: SessionIdProvider) {
    this.auth = auth;
    this.sessionIdProvider = sessionIdProvider;
  }

  public async grant(sessionId: string, tokenId: string) {
    if (!isToken(tokenId)) {
      throw new Error('Attempted to create a LunaSec Token Grant from a string that didnt look like a token');
    }
    // TODO (cthompson) as long as the node-sdk is the source of truth for authentication
    // this is ok. Once we are using an auth provider for this information, this will need to change.
    // in the future this will happen inside a lambda instead of making a request to the go server
    const authenticationToken = await this.auth.createAuthenticationJWT({});

    const tokenizer = new Tokenizer({
      authenticationToken: authenticationToken.toString(),
    });
    const resp = await tokenizer.setGrant(sessionId, tokenId, 'read_token');
    if (!resp.success) {
      throw new Error(`unable to set detokenization grant for: ${tokenId}`);
    }
  }

  // Uses the sessionIdProvider optionally configured by the user in situations where we have the req object but dont know how to read the sessionId
  public async grantWithAutomaticSessionId(req: Request, tokenId: string) {
    if (!this.sessionIdProvider) {
      throw new Error(
        'Attempted to grant a token automatically without the sessionIdProvider configured, check your LunaSec Config'
      );
    }
    const sessionId = await this.sessionIdProvider(req);
    // TODO: Will also need to support the case of the user not being logged in somehow, maybe that will be a URL param and can be handled by the customer in their callback
    if (typeof sessionId !== 'string') {
      throw new Error('Session ID from the SessionIdProvider passed in LunaSecOptions did not resolve to a string');
    }
    return this.grant(sessionId, tokenId);
  }

  public async verifyGrant(sessionId: string, tokenId: string, grantType: GrantType) {
    if (!isToken(tokenId)) {
      throw new Error('Attempted to verify a LunaSec Token Grant from a string that didnt look like a token');
    }
    const authenticationToken = await this.auth.createAuthenticationJWT({});

    const tokenizer = new Tokenizer({
      authenticationToken: authenticationToken.toString(),
    });
    const resp = await tokenizer.verifyGrant(sessionId, tokenId, grantType);
    if (!resp.success) {
      throw new Error(`unable to verify tokenization grant for: ${tokenId}`);
    }
  }
}
