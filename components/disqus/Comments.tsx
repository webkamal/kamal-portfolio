"use client";

import { DiscussionEmbed } from "disqus-react";

export default function Comments({
  shortname,
  config,
}: {
  shortname: string;
  config: {
    url: string;
    identifier: string;
    title: string;
  };
}) {
  return <DiscussionEmbed shortname={shortname} config={config} />;
}
