import React from 'react'
import Header from '../../Components/Header/Header'
import InterestInformation from '../../Components/InterestInformation/InterestInformation'
import Footer from '../../Components/Footer/Footer'
import ButunMehsullar from '../../Components/ButunMehsullar/ButunMehsullar'
import AppSec from '../../Components/AppTanitim/AppSec'
import BestPC from '../../Components/BestPC/BestPC'
import Media from '../../Components/Media/Media'

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedDiv = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      className="animatedDiv"
      style={{width:"100%"}}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  return (
    <div style={{width:"100%", display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
      <AnimatedDiv>
        <Header />
      </AnimatedDiv>

      <AnimatedDiv>
        <BestPC />
      </AnimatedDiv>

      <AnimatedDiv>
        <InterestInformation />
      </AnimatedDiv>

      <AnimatedDiv>
        <AppSec />
      </AnimatedDiv>

      <AnimatedDiv>
        <Media />
      </AnimatedDiv>

      <AnimatedDiv>
        <ButunMehsullar />
      </AnimatedDiv>

      <AnimatedDiv>
        <Footer />
      </AnimatedDiv>
    </div>
  )
}

export default Home
