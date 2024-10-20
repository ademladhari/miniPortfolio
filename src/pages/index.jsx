import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import HeaderSection from './components/header';
import Intro from './components/intro';
import ArtistSection from './components/artisticSection';
import portrait from "../assets/PORTRAIT.png";
import ContactCard from './components/Contact';
import DesignShowcaseCard from './components/Work';
import SocialMediaLinks from './components/SocialMediaLinks';

const CustomShape = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#f9f1f0] overflow-x-hidden flex flex-col p-4">
      {/* Header Section */}
      <motion.div 
        initial={{ scale: 0.4, y: '50%', opacity: 0 }}
        animate={{ scale: 1, y: '0', opacity: 1 }}
        transition={{
          scale: { duration: 1 },
          y: { delay: 1.7, duration: 0.6 },  
          opacity: { delay: 1.7, duration: 1 }  
        }}
        className="w-full mb-4"
      >
        <HeaderSection />
      </motion.div>

      {/* Main Content */}
      <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
        {/* Left Side / Top on Mobile */}
        <div className={`${isMobile ? 'w-full' : 'w-[70%]'} flex flex-col gap-4`}>
          {/* Intro and Portrait */}
          <section className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
            <motion.div
              initial={{ scale: 0.2, x: '50%', y: '20%', opacity: 0 }}
              animate={{ scale: 1, x: '0', y: '0', opacity: 1 }}
              transition={{
                scale: { duration: 1 },
                x: { delay: 1.3, duration: 0.6 },
                y: { delay: 1.3, duration: 0.6 },
                opacity: { delay: 1.3, duration: 1 }
              }}
              className={`${isMobile ? 'w-full' : 'w-[66%]'} z-0 relative`}
            >
              <Intro />
            </motion.div>
            <motion.div
              className={`${isMobile ? 'w-full h-64' : 'w-[32%]'} flex justify-center items-center`}
              initial={{ scale: 1.7, x: '-50%', y: '20%', opacity: 0 }}
              animate={{ scale: 1, x: '0', y: '0', opacity: 1 }}
              transition={{
                scale: { duration: 1, ease: [0.5, 0.6, 0.3, 0.6] },
                x: { delay: 1, duration: 0.6, ease: [0.5, 0.6, 0.3, 0.6] },
                y: { delay: 1, duration: 0.6, ease: [0.5, 0.6, 0.3, 0.6] },
                opacity: { duration: 1, ease: [0.5, 0.6, 0.3, 0.6] }
              }}
            >
              <img
                className="w-full h-full object-cover rounded-2xl"
                src={portrait}
                alt="Portrait"
              />
            </motion.div>
          </section>

          {/* Artist and Contact Sections */}
          <section className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-4`}>
            <motion.div
              initial={{ scale: 0.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                scale: { delay: 1, duration: 1 },
                opacity: { delay: 1, duration: 1 }
              }}
              className={`${isMobile ? 'w-full' : 'w-[49%]'}`}
            >
              <ArtistSection />
            </motion.div>
            <motion.div
              initial={{ scale: 0.2, x: '20%', y: '-50%', opacity: 0 }}
              animate={{ scale: 1, x: '0', y: '0', opacity: 1 }}
              transition={{
                scale: { delay: 1, duration: 1 },
                x: { delay: 1.3, duration: 0.6 },
                y: { delay: 1.3, duration: 0.6 },
                opacity: { delay: 1, duration: 1 }
              }}
              className={`${isMobile ? 'w-full' : 'w-[49%]'} relative -z-0`}
            >
              <ContactCard />
            </motion.div>
          </section>
        </div>

        {/* Right Side / Bottom on Mobile */}
        <section className={`${isMobile ? 'w-full' : 'w-[30%]'} flex flex-col gap-4`}>
          <motion.div
            initial={{ scale: 0.2, x: '-50%', y: '0', opacity: 0 }}
            animate={{ scale: 1, x: '0', y: '0', opacity: 1 }}
            transition={{
              scale: { delay: 1, duration: 1 },
              x: { delay: 1.3, duration: 0.6 },
              y: { delay: 1.3, duration: 0.6 },
              opacity: { delay: 1, duration: 1 }
            }}
            className={`${isMobile ? 'h-96' : 'h-[90%]'}`}
          >
            <DesignShowcaseCard />
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, y: '-70%', opacity: 0 }}
            animate={{ scale: 1, y: '0', opacity: 1 }}
            transition={{
              scale: { delay: 1, duration: 1 },
              y: { delay: 2.1, duration: 0.6 },
              opacity: { delay: 2.1, duration: 1 }
            }}
            className="h-[10%]"
          >
            <SocialMediaLinks />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default CustomShape;