import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
    {
        title: 'c3dio',
        src: require('@site/static/img/C3DIconv4.png').default,
        description: (
            <>
                <strong>c3dio</strong> is a Rust library for reading and writing C3D files.
                It can be compiled to WebAssembly and can be used in the browser and by a variety of languages.
            </>
        ),
        href: '/c3dio',
    },
    {
        title: 'bevy_c3d',
        Svg: require('@site/static/img/bevy_icon.svg').default,
        description: (
            <>
                <strong>bevy_c3d</strong> is a plugin for the Bevy game engine that allows you to load C3D files.
            </>
        ),
        href: '/bevy_c3d',
    },
    {
        title: 'Roadmap',
        Svg: require('@site/static/img/github.svg').default,
        description: (
            <>
                <strong>biomech.dev</strong> is a work in progress. Check out the roadmap to see what's coming next.
            </>
        ),
        href: 'https://github.com/users/cvhammond/projects/1/views/1',
    },
];

function Feature({ src, Svg, title, description, href }) {
    return (
        <a style={{ textDecoration: 'none' }} href={href} className={clsx('col col--4')}>
                <div className="text--center">
                    {src && <img className={styles.featureSvg} role="img" src={src} />}
                    {Svg && <Svg className={styles.featureSvg} alt={title} />}
                </div>
                <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
        </a>
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
