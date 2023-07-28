import React from "react";
import { useLinkedProfileFilterState, Image } from "@uniwebcms/module-sdk";
import clsx from "clsx";

const rotations = [
  "rotate-2",
  "-rotate-2",
  "rotate-2",
  "rotate-2",
  "-rotate-2",
];

export default function ImageBand(props) {
  const [filterProjects, setFilterProjects] = useLinkedProfileFilterState(
    props.profile,
    "project"
  );
  const [filterGroups, setFilterGroups] = useLinkedProfileFilterState(
    props.profile,
    "groups/profile",
    "member_groups",
    "group"
  );

  const filteredProjects = filterProjects.filtered;
  const filteredGroups = filterGroups.filtered;

  const filtered = [...filteredProjects, ...filteredGroups].filter(
    (item) => item.getBasicInfo().banner
  );
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {filtered.map(
          (image, imageIndex) =>
            filtered.length > 1 &&
            imageIndex < 5 && (
              <div
                className={clsx(
                  "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl",
                  filtered.length == 4 && imageIndex == 3
                    ? "-rotate-2"
                    : rotations[imageIndex % rotations.length]
                )}
              >
                <Image
                  type="banner"
                  alt=""
                  //   sizes="(min-width: 640px) 18rem, 11rem"
                  className="absolute inset-0 h-full w-full object-cover"
                  profile={image}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
