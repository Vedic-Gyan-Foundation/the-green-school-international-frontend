import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Header from "../../components/Header/Header";
import { SportsInfraUtil } from "../../utils/sports_infra";

const sportsInfraList = SportsInfraUtil.getProcessedList();

function SportsInfra() {
  return (
    <>
      <Header title="Sports Infra" />
      <section className="sm:m-16 m-8">
        <div>
          <p className="text-[#EABE61]">The Green School International</p>
          <h2 className="sm:text-3xl leading-relaxed font-semibold tracking-wide text-primarycolortwo">
            Experience unparalleled infrastructure and facilities at The Green
            School International, where excellence meets innovation.
          </h2>
        </div>

        {/* Contents Container */}
        <div className="sm:m-16 m-8">
          {sportsInfraList.map((item, index) => (
            <SportsInfraItem key={index} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}

function SportsInfraItem({ item }) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const fadeStart = window.innerHeight * 0.4; // Start fading in and out at 40% of viewport
      const fadeEnd = 0; // Fully disappears when it reaches the top

      if (rect.top >= fadeStart) {
        // Fade in as it enters
        controls.start({ opacity: 1, y: 0 });
      } else if (rect.top <= fadeEnd) {
        // Fade out as it leaves
        controls.start({ opacity: 0, y: -20 });
      } else {
        // Calculate smooth fade
        const progress = (rect.top - fadeEnd) / (fadeStart - fadeEnd);
        controls.start({ opacity: progress, y: (1 - progress) * 20 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div
      id={item.id}
      className="flex flex-col sm:flex-row items-center sm:justify-between justify-center sm:mx-auto sm:max-w-[1300px] gap-5 sm:gap-32 h-dvh"
    >
      {/* First Column (Sticky & Fading Effect) */}
      <motion.div
        ref={ref}
        animate={controls}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-3 sm:gap-9 lg:min-w-64 sticky top-2 left-0"
      >
        {item.titleLogo ? (
          <img src={item.titleLogo} alt={item.title} className="md:h-32 h-16" />
        ) : (
          <p className="text-red-500">No Logo</p>
        )}
        <h3 className="lg:font-semibold font-medium lg:text-lg text-sm text-center">
          {item.title}
        </h3>
      </motion.div>

      {/* Second Column */}
      <div className="w-dvw sm:w-auto mx-[-16px] sm:mx-0">
        {item.descriptionImg ? (
          <img
            src={item.descriptionImg}
            alt={item.title}
            className="w-full object-contain object-top px-4 sm:px-0"
          />
        ) : (
          <p className="text-red-500">No Logo</p>
        )}
        <p className="py-4 text-justify px-4 sm:px-0 text-sm md:text-base lg:text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default SportsInfra;
