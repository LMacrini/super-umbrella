import React from "react";
import { Box } from "./Box";
import ArticleList from "./ArticleList";
import SmallProjects from "./SmallProjects";
import { useLinkedProfileFilterState } from "@uniwebcms/module-sdk";

export default function BottomSection({ profile }) {
  const [articles, setArticleFilter] = useLinkedProfileFilterState(
    profile,
    "articles"
  );
  const articleList = articles.filtered;

  const [projects, setProjectFilter] = useLinkedProfileFilterState(
    profile,
    "project"
  );
  const projectList = projects.filtered;

  return (
    <Box className="mt-24 md:mt-28">
      <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
        {articleList ? <ArticleList articles={articleList} /> : null}
        <div className="space-y-10 lg:pl-16 xl:pl-24">
          {projectList && <SmallProjects projects={projectList} />}
          {/* <Blocks blocks={[childBlocks[1]]} />
          <Blocks blocks={[childBlocks[2]]} /> */}
        </div>
      </div>
    </Box>
  );
}
