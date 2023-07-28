import React from "react";
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
import { Link, SafeHtml } from "@uniwebcms/module-sdk";

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

export default function Introduction({
  //   block: {
  //     main: {
  //       header,
  //       body: { paragraphs },
  //     },
  //     params,
  //   },
  page,
  profile,
  ...props
}) {
  const data = profile.getData();
  const pageTitle = page.getPageTitle();
  const pageLeadText = page.getPageLeadText();

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

  return (
    <Box className="mt-9">
      <div className="max-w-2xl">
        <SafeHtml
          as="h1"
          value={pageTitle}
          className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
        />
        <SafeHtml
          as="p"
          value={pageLeadText}
          className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
        />
        <div className="mt-6 flex gap-6">
          {/* <SocialLink
            to={"https://twitter.com/"}
            aria-label="Follow on Twitter"
            icon={TwitterIcon}
          /> */}
          {/* {twitter && (
            <SocialLink
              to={twitter.url}
              aria-label={twitter.link_name}
              icon={AiOutlineTwitter}
            />
          )} */}
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
          {/* {params.instagram && (
            <SocialLink
              to={"https://instagram.com/" + params.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
          )}
          {params.github && (
            <SocialLink
              to={"https://github.com/" + params.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          )}
          {params.linkedin && (
            <SocialLink
              to={"https://linkedin.com/in/" + params.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          )} */}
        </div>
      </div>
    </Box>
  );
}
