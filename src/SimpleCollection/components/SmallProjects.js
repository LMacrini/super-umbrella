import React from "react";
// import Button from "./Button";
import { BriefcaseIcon, ArrowDownIcon } from "./Icons";
import { Image, Link } from "@uniwebcms/module-sdk";

function Project({ profile }) {
  console.log(profile, profile.getBasicInfo());
  const {
    title,
    subtitle,
    head: { date },
    banner,
    lastEditTime,
  } = profile.getBasicInfo();

  return (
    <>
      <div className="group-hover:scale-100 group-hover:opacity-100 w-full h-full"></div>
      <Link href={`projects/${profile.contentId}`}>
        <li key={profile.contentId} className="flex gap-4">
          <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <Image
              type="banner"
              profile={profile}
              alt=""
              className="h-7 w-7 rounded-full"
              unoptimized
            />
          </div>
          <dl className="flex flex-auto flex-wrap gap-x-2">
            <dt className="sr-only">Project</dt>
            <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {title}
            </dd>
            <dt className="sr-only">Subtitle</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              {subtitle}
            </dd>
            <dt className="sr-only">Date</dt>
            <dd
              className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${date ? date : lastEditTime}`}
            >
              <time dateTime={date ? date : lastEditTime}>
                {date ? date : lastEditTime}
              </time>{" "}
            </dd>
          </dl>
        </li>
      </Link>
    </>
  );
}

export default function SmallProjects({ projects }) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {projects.map((project) => (
          <Project profile={project} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  );
}
