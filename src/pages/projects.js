import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icons";
import project1 from "../../public/images/projects/CookieJarProject.png";
import project2 from "../../public/images/projects/CryptoSearch.png";
import project3 from "../../public/images/projects/ChatApp.png";
import project4 from "../../public/images/projects/FoodFestival.png";
import project5 from "../../public/images/projects/RealEstate.png";
import project6 from "../../public/images/projects/TicketingApp.png";
import project7 from "../../public/images/projects/Aora.png";
import project8 from "../../public/images/projects/LiveDocs.png";
import { motion } from "framer-motion";
import { TransitionEffect } from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2.5rem] rounded-br-3xl  bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-solid border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2rem] rounded-br-3xl  bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title> David McDougal | Projects Page</title>
        <meta
          name="description"
          content="Learn all about the projects I have previously completed."
        />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Dedication Equals Results!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Collaborative Realtime Editor"
                summary="A real time document editor created using Next.js, Liveblocks, Clerk.com, and Sentry.com. Created using Next.js to provide full stack ability, Tailwind was used for styling the components,Sentry was enabled on the app to allow for error handling and tracking, and Liveblocks was used as the editor"
                link="https://collaborative-editor-alpha.vercel.app/"
                type="Next.js FullStack App"
                img={project8}
                github="https://github.com/davsav16/collaborative-editor"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="React Native AI Photo"
                summary="I created this react app as a way to improve my skills in React Native. I have used React, Next.js, and Typscript in previous projects, but this was my first time in putting those skills to use to develop a native application. Technologies Used: Expo, Native Wind, Appwrite,React Native, Expo AV, Expo Document Picker, Expo Image Picker."
                link="https://github.com/davsav16/reactNativeVideoApp/tree/main"
                type="React Native App"
                img={project7}
                github="https://github.com/davsav16/reactNativeVideoApp/tree/main"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Ticketing App"
                summary="Demo ticketing app that any user could use to create tickets and track their progress. Created using Next.js, React, MongoDB, and Tailwind."
                link="https://ticketing-app-opal.vercel.app/"
                type="Website"
                img={project6}
                github="https://github.com/davsav16/ticketing-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Real Estate App"
                summary="Created a Demo Real Estate App using dummy data in Next.js and using Chakra UI for the components and styling."
                link="https://real-estate-app-iota-nine.vercel.app/"
                type="Website"
                img={project5}
                github="https://github.com/davsav16/real-estate-app"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Cookie Jar React App"
                summary="Basic E-commerce app for buying cookies. Using ButterCMS, Snipcart, and Chakra UI. This has the basic layout for a shop with a pull out cart and checkout experience. Please note that you cannot actually buy anything, as the there is no backend set up, but it would be very easy to implement."
                link="https://mcdougal-cookies.netlify.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/davsav16/Ecomerce-butter"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Crypto Tracker"
                summary="Created this small app using Next.js and React.js by following a short youtube tutorial to learn new skills and practice different styles of coding. This app can be used to find and search for a crypto currency."
                link="https://crypto-search-m1va6iduy-davsav16.vercel.app/"
                type="Website"
                img={project2}
                github="https://github.com/davsav16/cryptoSearch"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Chat App"
                summary="I created this chat app by following a tutorial to teach myself how to use Chat Engine and react to create a fully functioning chat app. To use this app you will need login as one of the users that I have already created or you can clone the repository and then go to https://chatengine.io/ and create your own project with your own users and admin. It is really easy to do and quite useful."
                link="https://davidschatapp.netlify.app/"
                type="Website"
                img={project3}
                github="https://github.com/davsav16/chat-app"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="Food Festival"
                summary="Allow foodies throughout the world to register for different food events, buy tickets, and add additional details. This app is a PWA so users can use it if they are experience a poor connection or even download it to their mobile device."
                link="https://davsav16.github.io/improved-food-festival/"
                type="PWA APP"
                img={project4}
                github="https://github.com/davsav16/improved-food-festival"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
