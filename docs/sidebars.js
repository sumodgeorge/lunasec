/*
 * Copyright by LunaSec (owned by Refinery Labs, Inc)
 *
 * Licensed under the Creative Commons Attribution-ShareAlike 4.0 International
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 * https://creativecommons.org/licenses/by-sa/4.0/legalcode
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        {
          type:'autogenerated',
          dirName: 'overview'
        },
      ]
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started'
        },
      ],
    },
    //   items: [
    //   'getting-started/choose-your-setup',
    //   {
    //     type: 'category',
    //     label: 'Dedicated Tokenizer',
    //     items: ['getting-started/dedicated-tokenizer/introduction','getting-started/dedicated-tokenizer/backend','getting-started/dedicated-tokenizer/graphql']
    //   },
    //   {
    //     type:'category',
    //     label: 'Simple Tokenizer',
    //     items: ['getting-started/simple-tokenizer/guide']
    //   },
    // ]},
    {
      type: 'category',
      label: 'Deployment',
      items: [
        {
          type:'autogenerated',
          dirName: 'deployment'
        },
      ]
    },
    {type: 'category',
      label: 'SDK Reference Docs',
      items: [
        {type: 'category',
          label: 'Node SDK',
          items: [
            {
              type:'autogenerated',
              dirName: 'node-sdk'
            },
          ]
        },
        {type: 'category',
          label: 'React SDK',
          items: [
            {
              type:'autogenerated',
              dirName: 'react-sdk'
            },
          ]
        },
        {type: 'category',
          label: 'Simple Tokenizer',
          items: [
            'tokenizer-sdk/classes/SimpleTokenizer',
            // 'tokenizer-sdk/interfaces/SimpleTokenizerClientConfig',
            'node-sdk/classes/SimpleTokenizerBackend',
            'node-sdk/interfaces/SimpleTokenizerBackendConfig'
          ]
        },
        {type: 'category',
          label: 'Tokenizer SDK',
          items: [
            {
              type:'autogenerated',
              dirName: 'tokenizer-sdk'
            },
          ]
        },
        'api-spec'
      ]}
    // {
    //   type: 'link',
    //   label: "Tokenizer Rest API Spec",
    //   href: '/tokenizer-api-spec-static.html',
    //   customProps: {
    //     target:'_blank',
    //   }
    // }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
