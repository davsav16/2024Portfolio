import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="SCSS" x="-20vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Java" x="20vw" y="6vw" />
        <Skill name="Java Spring" x="0vw" y="12vw" />
        <Skill name="Shopify Liquid" x="-20vw" y="-15vw" />
        <Skill name="Next.js" x="15vw" y="-12vw" />
        <Skill name="AWS" x="32vw" y="-5vw" />
        <Skill name="Javascript" x="0vw" y="-20vw" />
        <Skill name="JQuery" x="-25vw" y="18vw" />
        <Skill name="SQL" x="18vw" y="-18vw" />
        <Skill name="Node" x="-5vw" y="20vw" />
        <Skill name="MySQL" x="10vw" y="15vw" />
        <Skill name="Git" x="-15vw" y="-10vw" />
        <Skill name="GraphQL" x="-15vw" y="10vw" />
        <Skill name="React.js" x="10vw" y="-3vw" />
        <Skill name="Typescript" x="20vw" y="20vw" />
      </div>
    </>
  );
};

export default Skills;
