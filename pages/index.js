import Head from "next/head";
import ArtStudio from "../components/artStudio/ArtStudio";
import Community from "../components/community/Community";
import Count from "../components/count/Count";
import Faqs from "../components/faq/Faqs";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/header/Header";
import Team from "../components/team/Team";
import Timeline from "../components/timeline/Timeline";
import Mint from "../components/mint/Mint";
import { IframeHTMLAttributes } from "react";
import Script from "next/script";

const Home = () => (
  <div>
    <Head>
      <title>
        FASC - Fast Ape Speed Club
      </title>
      <meta name="FASC" content="nfts" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <Header />
      <Count />
      {/* <ArtStudio /> */}
      <Timeline />
      {/* <Gallery /> */}
      <Team />
      <Community />
      <Faqs />
      <Footer />
    </main>
  </div>
);

export default Home;
