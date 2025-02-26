/*
 * Copyright 2022 by LunaSec (owned by Refinery Labs, Inc)
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
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The best supply-chain auditing tool for JavaScript',
    Svg: require('../../static/img/60e63e8c40f27c7c73def81f_Online storage_Monochromatic.svg').default,
    description: (
      <>
        Jam-packed with JavaScript specific auditing features, with a fall-back to basic auditing for other languages.
      </>
    ),
  },
  {
    title: 'Situationally Aware',
    Svg: require('../../static/img/60e63e8c40f27c3024def81b_Information flow_Monochromatic.svg').default,
    description: (
      <>
        LunaTrace processes a complete model of your source code and dependency tree. Where it can, it uses this information
          to eliminate false positives.
          Where it can't, it exposes the information to you so that you can make a decision faster.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('../../static/img/60e63e8c40f27c84c0def803_Analytics process_Monochromatic.svg').default,
    description: (
      <>
        Built out of extendable, Open Source components that you can read, inspect, and even host for yourself.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
