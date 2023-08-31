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

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2.5rem] rounded-br-3xl  bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
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
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative">
      <div className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%]  rounded-[2rem] rounded-br-3xl  bg-dark"></div>
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="rounded-lg text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
          content="Learn all about who David McDougal is, where he has worked, were he has studied."
        />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Dedication Equals Results!" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
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
            <div className="col-span-6">
              <Project
                title="Crypto Tracker"
                summary="Created this small app using Next.js and React.js by following a short youtube tutorial to learn new skills and practice different styles of coding. This app can be used to find and search for a crypto currency."
                link="https://crypto-search-m1va6iduy-davsav16.vercel.app/"
                type="Website"
                img={project2}
                github="https://github.com/davsav16/cryptoSearch"
              />
            </div>
            <div className="col-span-6">
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
                summary="Allow foodies though out the world to register for different food events, by tickets, and additional details. This app is a PWA so users can use it if they are experience a poor connection or even download it to their mobile device."
                link="https://davsav16.github.io/improved-food-festival/"
                type="PWA APP"
                img={project4}
                github="https://github.com/davsav16/improved-food-festival"
              />
            </div>
            {/* <div className="col-span-6">
              <Project
                title="Food Festival"
                summary="Allow foodies though out the world to register for different food events, by tickets, and additional details. This app is a PWA so users can use it if they are experience a poor connection or even download it to their mobile device."
                link="https://davsav16.github.io/improved-food-festival/"
                type="PWA APP"
                img={project4}
                github="https://github.com/davsav16/improved-food-festival"
              />
            </div>
            <div className="col-span-6">
              <Project
                title="Cookie Jar React App"
                summary="Basic E-commerce app for buying cookies. Using ButterCMS, Snipcart, and Chakra UI. This has the basic layout for a shop with a pull out cart and checkout experience. Please note that you cannot actually buy anything, as the there is no backend set up, but it would be very easy to implement."
                link="https://mcdougal-cookies.netlify.app/"
                type="Featured Project"
                img={project1}
                github="https://github.com/davsav16/Ecomerce-butter"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
