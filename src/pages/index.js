import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/developer-pic-1.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>David McDougal | Home</title>
        <meta
          name="description"
          content="Welcome to David McDougal's Portfolio."
        />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePic}
                alt="David McDougal"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Your Vision Into Reality With Code And User Experience
                Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and certificates, showcasing my expertise in Next.js,
                Shopify Liquid, Java Spring and AWS.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/David_McDougal_Resume_2.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  href="mailto:david.mcdougal00@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-0 inline-block w-24">
          <Image src={lightBulb} alt="Light bulb" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
