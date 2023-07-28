import React, { useEffect, useState } from "react";
import { Container } from "./Container";
import {
  Image,
  useLinkedProfileFilterState,
  Profile,
  Pages,
  Link,
  useLoadProfileBody,
  SafeHtml,
} from "@uniwebcms/module-sdk";
import { Sorter, Filter } from "@uniwebcms/express";
import Card from "./Card";

const Group = ({ group }) => {
  const { title, subtitle } = group.getBasicInfo();

  return (
    <Card as="li">
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 overflow-hidden">
        <Image profile={group} type="banner"></Image>
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100 line-clamp-2">
        <Card.Link
          to={group.makeProfileHref()}
          external={true}
          title={title}
          target={"_blank"}
        >
          {title}
        </Card.Link>
      </h2>
      <Card.Description>{subtitle}</Card.Description>
    </Card>
  );
};

function Groups(props) {
  const { profile, page } = props;

  const pageTitle = page.getPageTitle();
  const pageLeadText = page.getPageLeadText();

  const [filter, setFilter] = useLinkedProfileFilterState(
    profile,
    "groups/profile",
    "member_groups",
    "group"
  );

  const { filtered } = filter;

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {pageTitle}
          </h1>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
            {pageLeadText}
          </p>
        </header>
        <div className="mt-16 sm:mt-20 space-y-14">
          <div className="flex justify-end">
            <div className="flex space-x-1 items-center">
              <Filter filter={filter} setFilter={setFilter}>
                <Filter.Search />
                <Filter.Menu />
              </Filter>
              <Sorter filter={filter} setFilter={setFilter} />
            </div>
          </div>
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((group) => (
              <Group key={group.key} group={group} />
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
}

const renderIndex = ({ list }) => {
  return (
    <div className="space-y-6">
      {list.map((profile) => {
        const { title, subtitle } = profile.getBasicInfo();

        return (
          <Link
            to={profile.contentId}
            key={profile.key}
            className="block border px-6 py-4 rounded-lg bg-gray-50 hover:bg-white w-96 mx-auto"
          >
            <p className="text-xl font-bold">{title}</p>
            <p className="text-lg font-medium">{subtitle}</p>
          </Link>
        );
      })}
    </div>
  );
};

const renderSubpage = (key, profile) => {
  let description;
  if (useLoadProfileBody(profile)) {
    // The description field requires the full profile data. Here we can choose to return null if
    // hasData is false, or we can set the description to the empty string, render what we have in
    // the profile head, and then let the component rerender when the hasData state becomes true.
    description = profile.at("group_description/description");
  }

  const { title, subtitle } = profile.getBasicInfo();

  return (
    <div key={key} className="px-24 py-8">
      <Image
        profile={profile}
        type="banner"
        className="object-cover h-48 w-full"
      />
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xl font-semibold">{subtitle}</p>
      <SafeHtml as="p" value={description} className="text-l" />
      <Link
        profile={profile}
        className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        Learn more!!!!!
      </Link>
    </div>
  );
};

export default function Block(props) {
  //   const {
  //     block: { dataSource },
  //   } = props;

  //   const [profiles, setProfiles] = useState([]);
  const { profile, page } = props;

  const pageTitle = page.getPageTitle();
  const pageLeadText = page.getPageLeadText();

  const [filter, setFilter] = useLinkedProfileFilterState(
    profile,
    "groups/profile",
    "member_groups",
    "group"
  );

  const { filtered } = filter;

  if (!filtered) return null;

  //   useEffect(() => {
  //     if (
  //       dataSource &&
  //       dataSource.contentType === "list" &&
  //       dataSource.contentId
  //     ) {
  //       Profile.getProfilesInList(dataSource.contentId).then((res) => {
  //         setProfiles(res);
  //       });
  //     }
  //   }, []);

  //   if (!profiles.length) return null;

  return (
    <Pages
      list={filtered}
      renderIndex={renderIndex}
      renderSubpage={renderSubpage}
    />
  );
}
