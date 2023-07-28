import React, { useEffect, useState } from "react";
import {
  Profile,
  Pages,
  Link,
  useLinkedProfileFilterState,
} from "@uniwebcms/module-sdk";
import Card from "./Card";
import { Box } from "./Box";
import { formatDate } from "./formatDate";

function SimpleLayout({ title, intro, children }) {
  return (
    <Box className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Box>
  );
}

function Article({ article }) {
  const {
    title,
    head: { date },
    lastEditTime,
  } = article.getBasicInfo();
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.contentId}`}>{title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={date ? date : lastEditTime}
          className="md:hidden"
          decorate
        >
          {date ? formatDate(date) : formatDate(lastEditTime.split(" ")[0])}
        </Card.Eyebrow>
        <Card.Description>Description</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={date ? date : lastEditTime}
        className="mt-1 hidden md:block"
      >
        {date ? formatDate(date) : formatDate(lastEditTime.split(" ")[0])}
      </Card.Eyebrow>
    </article>
  );
}

const IndexPage = ({ list, profile, page, ...props }) => {
  const pageTitle = page.getPageTitle();
  const pageLeadText = page.getPageLeadText();

  return (
    <>
      <SimpleLayout title={pageTitle} intro={pageLeadText}>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {list.map((article) => (
              <Article key={article.key} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  );
};

const ArticlePage = (key, profile) => {
  console.log(profile);
  const { title, subtitle } = profile.getBasicInfo();

  return (
    <div key={key} className="px-24 py-32">
      <p className="text-2xl font-bold">{title}</p>
      <p className="text-xl font-semibold">{subtitle}</p>
    </div>
  );
};

export default function Articles(props) {
  const [articles, setArticleFilter] = useLinkedProfileFilterState(
    props.profile,
    "articles"
  );
  const articleList = articles.filtered;

  return (
    <Pages
      list={articleList}
      renderIndex={IndexPage}
      renderSubpage={ArticlePage}
      {...props}
    />
  );
}
