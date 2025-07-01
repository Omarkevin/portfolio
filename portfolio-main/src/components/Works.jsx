import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { figma, github, live } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const Projectcard = (props) => (
  <motion.div variants={fadeIn("up", "spring", props.index * 0.5, 0.75)}>
    <Tilt
      options={{ max: 45, scale: 1, speed: 450 }}
      className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={props.image}
          alt={props.name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-2">
          {props.figma_link && (
            <div
              onClick={() => window.open(props.figma_link, "_blank")}
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
            >
              <img
                src={figma}
                alt="live"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
          {props.live_link && (
            <div
              onClick={() => window.open(props.live_link, "_blank")}
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
            >
              <img src={live} alt="live" className="object-contain" />
            </div>
          )}

          {props.source_code_link && (
            <div
              onClick={() => window.open(props.source_code_link, "_blank")}
              className="black-gradient w-10 h-10 cursor-pointer rounded-full flex justify-center items-center"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{props.name}</h3>
        <p className="mt-2 text-secondary font-semibold text-[14px]">
          {props.description}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {props.tags.map((tag) => (
          <p className={`text-[14px] ${tag.color}`} key={tag.name}>
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </motion.div>
);

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          These are some of the front-end projects I’ve built to sharpen my
          skills and deepen my understanding of modern web technologies. Each
          project reflects my hands-on experience with frameworks like React,
         , and tools like Redux, Tailwind CSS, and TypeScript.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <Projectcard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "works");
