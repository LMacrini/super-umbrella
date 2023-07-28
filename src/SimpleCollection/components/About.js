import React from "react";
import { Link, Image, SafeHtml } from "@uniwebcms/module-sdk";
import clsx from "clsx";

import { Box } from "./Box";
import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillGooglePlusCircle,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { SiAcademia, SiMendeley, SiOrcid, SiPinterest } from "react-icons/si";
import { FaQuora, FaResearchgate, FaTumblrSquare } from "react-icons/fa";

const iconLookup = {
  "Academia.edu": SiAcademia,
  Twitter: AiOutlineTwitter,
  Facebook: AiFillFacebook,
  "Google+": AiFillGooglePlusCircle,
  LinkedIn: AiFillLinkedin,
  Medium: AiFillMediumSquare,
  Mendeley: SiMendeley,
  "Orcid page": SiOrcid,
  Pinterest: SiPinterest,
  Quora: FaQuora,
  ResearchGate: FaResearchgate,
  Tumblr: FaTumblrSquare,
  Youtube: AiFillYoutube,
};

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

// function SocialLink({ className, href, children, icon: Icon }) {
//   return (
//     <li className={clsx(className, "flex")}>
//       <Link
//         to={href}
//         className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
//       >
//         <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
//         <span className="ml-4">
//           <SafeHtml value={children} />
//         </span>
//       </Link>
//     </li>
//   );
// }

export default function About({
  profile,
  //   block: {
  //     main: {
  //       body: { imgs, headings, paragraphs },
  //     },
  //     params,
  //   },
  page,
}) {
  const pageTitle = page.getPageTitle();
  const pageLeadText = page.getPageLeadText();
  const data = profile.getData();
  console.log(data);

  return (
    <Box className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              type="banner"
              profile={profile}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <SafeHtml
            as="h1"
            value={pageTitle}
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
          />
          <SafeHtml
            as="h2"
            value={pageLeadText}
            className="text-2xl font-bold mt-4 tracking-tight text-zinc-700 dark:text-zinc-100 sm:text-2xl"
          />
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <SafeHtml as="p" value={data.biography.academic_biography} />
          </div>
        </div>
        <div className="lg:pl-20 flex gap-6">
          {data.social_media_links.map((link) => {
            const icon = iconLookup[link.website_type];
            return !icon ? (
              <></>
            ) : (
              <SocialLink
                to={link.url}
                aria-label={link.link_name}
                icon={icon}
              />
            );
          })}
          {/* <ul role="list">
            {params.twitter && (
              <SocialLink
                href={"https://twitter.com/" + params.twitter}
                icon={TwitterIcon}
              >
                {activeLang == "fr"
                  ? "Suivez sur Twitter"
                  : "Follow on Twitter"}
              </SocialLink>
            )}
            {params.instagram && (
              <SocialLink
                href={"https://instagram.com/" + params.instagram}
                icon={InstagramIcon}
                className="mt-4"
              >
                {activeLang == "fr"
                  ? "Suivez sur Instagram"
                  : "Follow on Instagram"}
              </SocialLink>
            )}
            {params.github && (
              <SocialLink
                href={"https://github.com/" + params.github}
                icon={GitHubIcon}
                className="mt-4"
              >
                {activeLang == "fr" ? "Suivez sur GitHub" : "Follow on GitHub"}
              </SocialLink>
            )}
            {params.linkedin && (
              <SocialLink
                href={"https://linkedin.com/in/" + params.linkedin}
                icon={LinkedInIcon}
                className="mt-4"
              >
                {activeLang == "fr"
                  ? "Suivez sur LinkedIn"
                  : "Follow on LinkedIn"}
              </SocialLink>
            )}
            {params.email && (
              <SocialLink
                href={"mailto:" + params.email}
                icon={EmailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                {params.email}
              </SocialLink>
            )}
          </ul> */}
        </div>
      </div>
    </Box>
  );
}
