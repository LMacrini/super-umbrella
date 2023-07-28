import React from "react";
import Card from "./Card";
import { formatDate } from "./formatDate";

function Article({ profile }) {
  console.log(profile.getBasicInfo());
  const {
    title,
    head: { date },
    lastEditTime,
  } = profile.getBasicInfo();

  return (
    <Card as="article">
      <Card.Title href={`articles/${profile.contentId}`}>{title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={date ? date : lastEditTime} decorate>
        {date ? formatDate(date) : formatDate(lastEditTime.split(" ")[0])}
      </Card.Eyebrow>
      <Card.Description>Description</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

export default function ArticleList({ articles }) {
  return (
    <div className="flex flex-col gap-16">
      {articles.slice(0, 3).map((article) => (
        <Article key={article.key} profile={article} />
      ))}
    </div>
  );
}
