import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-0">
          <Details
            type="Bachelor of Science, Software Engineering"
            time="Mar 2022-Present"
            place="Western Governors University"
            info="My degree focused on software engineering in Java, C++, and web development technologies. This program also focuses on data management and structures, software quality assurance, and UX design principles. I received five professional certifications as part of this program: CompTIA's A+ Certification, CompTIA's Project+, AWS Certified Cloud Practitioner, and ITIL Foundation Certification."
          />
          <Details
            type="Coding Certificate, Computer Software Engineering"
            time="Mar 2021 - Aug 2021"
            place="University Of Utah Professional Education Boot Camps"
            info="Learned skills to become a full-stack MERN developer. I gained proficiency in the following areas:

Computer Science Applied to JavaScript: Data Structures and Algorithms.

Browser-Based Technologies: HTML, CSS, JavaScript, jQuery, Responsive Design, Bootstrap, Handlebars, Cookies, Local Storage, and React.js.

Deployment: Heroku, Git, and GitHub Pages.

Databases: MySQL and MongoDB.

PHP: Laravel

Node.js (Server-Side Development): Express, Security and Session Storage, User Authentication, and MERN Stack (MongoDB, Express.js, React.js, Node.js).

Quality Assurance: Writing Tests  ."
          />
          <Details
            type="Bachelor of Science, Experience and Design Management"
            time="2016-2020"
            place="Brigham Young University"
            info="While at BYU my studies focused on UX Design and developing experiences for users and customers. I completed 2 internships where I put these skills to use and also gained experience in gathering data (both quantifiable and non-quantifiable) from users and creating a customer experience Journey based off of that. Created and managed survey's using Qualtrics Software."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
