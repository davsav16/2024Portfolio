import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import certification1 from "../../public/images/certifications/UofUCert.png";
import certification2 from "../../public/images/certifications/CompTIAA+.png";
import certification3 from "../../public/images/certifications/CompTProject+.png";
import certification4 from "../../public/images/certifications/ITIL4.png";
import certification5 from "../../public/images/certifications/LearnJavaScript.png";
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg"
      />
    </Link>
  );
};

const UdemyLinkedIn = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4"
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, summary, link, date }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2rem] rounded-br-3xl  bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 hover:underline">
          {title}
        </h2>
      </Link>
      <span className="capitalize font-medium text-dark/75">{date}</span>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold hover:underline">
        <Link href={link} target="_blank">
          See My Certification
        </Link>
      </span>
    </li>
  );
};

const certifications = () => {
  return (
    <>
      <Head>
        <title> David McDougal | Certifications Page</title>
        <meta
          name="description"
          content="Learn all about the certifications I have gained throughout my software engineering Journey."
        />
      </Head>
      <main className="w-full mb-20 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Knowledge Is Power!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Full Stack Coding Boot Camp"
              summary="Badge earners have demonstrated working knowledge of Bootstrap, CSS, Express.js, Git, Github, Heroku, HTML (HTML5), JavaScript, JQuery, MongoDB, MySQL, Node.js, React, SEO, Responsive Design, API/JSON, RESTful API, State Management, Command Line, Database Theory, Agile Methodologies, Quality Assurance Testing, Social Coding Best Practices, Computer Science Fundamentals.. They have shown they can work with a team to build a fully functional web applications."
              link="https://www.credly.com/badges/25741557-dba3-4325-b713-663535ee362a"
              img={certification1}
              date="September 2021"
            />
            <FeaturedArticle
              title="CompTIA A+ ce Certification"
              summary="Earners of the CompTIA A+ certification are proven problem solvers who are able to perform critical IT support tasks including device configuration, data backup and recovery, and operating system configuration. CompTIA A+ certified professionals have demonstrated baseline security skills for IT support roles and are able to detect and remove malware, address privacy concerns, and troubleshoot core service challenges."
              link="https://www.credly.com/badges/7fced055-c761-4f32-862c-39dcc22edd25"
              img={certification2}
              date="August 2022"
            />
            <FeaturedArticle
              title="CompTIA Project+ Certification"
              summary="Earners of the CompTIA Project+ certification understand the basic concepts to successfully manage small- to medium-sized projects. These business professionals have demonstrated the knowledge and skills required to manage a project life cycle, ensure proper communication, manage resources and stakeholders and maintain project documentation."
              link="https://www.credly.com/badges/e934c427-7600-46a7-9048-72c7deddaefd"
              img={certification3}
              date="December 2022"
            />
            <FeaturedArticle
              title="ITIL 4 Foundation"
              summary="Focusing on the management of information technology (IT) infrastructure, development, and operations, students will explore the core principles of ITIL practices for service management to prepare them for careers as IT professionals, business managers, and business process owners."
              link="/ITIL4.pdf"
              img={certification4}
              date="March 2023"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Udemy and LinkedIn Certifications
          </h2>
          <ul>
            <UdemyLinkedIn
              title="Codecademy Learn JavaScript Course"
              date="January 2022"
              img={certification5}
              link="/LearnJavaScript.pdf"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default certifications;
