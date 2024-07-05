import type {NextPage} from 'next';
import {Nav} from '../components/index/navbar/navbar';
import {Layout} from '../components/index/navbar/layout';
import {Hero} from '../components/index/hero';
import {Trusted} from '../components/index/trusted';
import {Box} from '../components/styles/box';
import {Features1} from '../components/index/features1';
import {Features2} from '../components/index/features2';
import {Features3} from '../components/index/features3';
//
import {Statistics} from '../components/index/technologies';
//import {Plans} from '../components/index/plans';
import {Faq} from '../components/index/faq';
import {Trial} from '../components/index/trial';
import {Footer} from '../components/index/footer';

const Home: NextPage = () => {
   return (
      <Layout>
         <Nav />
         <Box as="main">
            <Hero />
            <Trusted />
            <Features1 />
            <Features2 />
            <Features3 />
            <Statistics />
            <Faq />
            <Trial />
            <Footer />
         </Box>
      </Layout>
   );
};

export default Home;
