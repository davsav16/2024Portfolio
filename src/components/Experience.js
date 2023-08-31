import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-0">
          <Details
            position="Software Engineer"
            company="Byte"
            companyLink="https://www.byte.com/"
            time="2021-Present"
            address="Lehi, UT"
            work="I worked on Byte's Growth Team focusing on developing and improving their marketing site using Agile methodologies within Jira. I was tasked with creating new components and page redesigns in Next.js and Shopify. I focused primarily on converting Byte's Marketing pages and components from Liquid into React (using Next.js, Typescript, and SCSS) for use in a headless content management system (Contentful)."
          />
          <Details
            position="Senior Developer (Contractor)"
            company="SiteSource"
            companyLink="https://site-source.com/"
            time="2022-Present"
            address="Lehi, UT"
            work="My responsibilities primarily focused on working closely with one of our largest clients, Manly Bands, to improve their Shopify store and improve the conversion rate of customers visiting their site. Through the work I did I was able to help them take the site speed from 68 to 90. And improved customer conversion."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
