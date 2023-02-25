import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <Layout>
        <footer>
        <hr/>
        <div className="social-container">
        <Link href="https://twitter.com/cvhammond"><img src="/twitter.svg" alt="Twitter" width="32" height="32"/></Link>
        <Link href="https://github.com/cvhammond"><img src="/github.svg" alt="GitHub" width="32" height="32"/></Link>
        <Link href="mailto:claire@biomech.dev"><img src="/email.svg" alt="Email" width="32" height="32"/></Link>
        </div>
        <div className="license-container">
        <div>biomech.dev is available under the <Link href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0 license</Link>.
        </div>
        <address>
        Written and maintained by <a href="https://cvhammond.com">Claire V. Hammond</a><br/>

        </address>
        </div>
        </footer>
        </Layout>
    );
}

export default Footer;
