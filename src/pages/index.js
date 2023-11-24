import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Splash from './home/Splash';



const features = [
  {
    title: "Rapid Development",
    description: "Accelerate your mobile app development with Flutter's hot reload feature for a fast and flexible development cycle."
  },
  {
    title: "Unified Design",
    description: "Create visually appealing apps with Flutter's extensive widget library, tailored for both iOS and Android for a consistent user experience."
  },
  {
    title: "Customizable Widgets",
    description: "Easily customize widgets to suit your needs. Flutter's comprehensive toolkit allows you to tweak every aspect of the app's appearance and functionality."
  },
  {
    title: "Versatile Development",
    description: "Leverage Flutter's versatility to create solutions for any platform, with the ability to integrate with existing code or build completely from scratch."
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <Splash />
    </Layout>
  );
}

export default Home;
