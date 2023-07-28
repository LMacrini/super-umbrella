import React from "react";
import { Link } from "@uniwebcms/module-sdk";
import { Box } from "./Box";

function NavLink({ href, children }) {
  return (
    <Link
      to={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export default function Footer({
  website,
  block: {
    main: {
      body: { paragraphs },
    },
  },
  profile,
}) {
  const pages = website.getPageHierarchy();
  return (
    <footer className="mt-32 flex-none">
      <Box.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Box.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {pages.map((page) => {
                  return paragraphs.includes(page.label) ? null : (
                    <NavLink href={page.route}>{page.label}</NavLink>
                  );
                })}
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} hey. All rights reserved.
              </p>
            </div>
          </Box.Inner>
        </div>
      </Box.Outer>
    </footer>
  );
}
