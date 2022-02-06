import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Data Intelligence for Everyone',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        OneNine Cloud is created to reduces entry barriers for individuals and businesses to start using AI and machine learning.
      </>
    ),
  },
  {
    title: 'Build Data Driven Skills',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn with building something real. Allows non experts to go from data to insights in minutes.
      </>
    ),
  },
  {
    title: 'Improve Business Outcomes',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Data Driven Insights will help you increase revenue and deliver projects faster than ever using OneNine Cloud. 
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
