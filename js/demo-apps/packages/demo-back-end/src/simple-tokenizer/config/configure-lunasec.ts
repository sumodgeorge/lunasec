/*
 * Copyright 2021 by LunaSec (owned by Refinery Labs, Inc)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import { fromIni } from '@aws-sdk/credential-provider-ini';
import { SimpleTokenizerBackend } from '@lunasec/node-sdk';

export const simpleTokenizerBackend = new SimpleTokenizerBackend({
  awsRegion: 'us-west-2',
  s3Bucket: process.env.CIPHERTEXT_S3_BUCKET || 'YOU MUST SPECIFY A BUCKET',
  awsCredentials: fromIni(),
});
