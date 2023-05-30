import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'c3dio',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <strong>c3dio</strong> is a Rust library for reading and writing C3D files.
        It is compiled to WebAssembly and can be used in the browser and by a variety of languages.
      </>
    ),
  },
  {
    title: 'bevy-c3d',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        <strong>bevy-c3d</strong> is a plugin for the Bevy game engine that allows you to load C3D files.
      </>
    ),
  },
  {
    title: 'Roadmap',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        <strong>biomech.dev</strong> is a work in progress. Check out the roadmap to see what's coming next.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
