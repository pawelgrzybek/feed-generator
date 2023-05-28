interface Data {
  title: string;
  homepageUrl: string;
  description: string;
}

const formatRss = ({
  title,
  homepageUrl,
  description,
}: Data) => `<?xml version="1.0" encoding="utf-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>${title}</title>
        <link>${homepageUrl}</link>
        <description>${description}</description>
        <atom:link href="${homepageUrl}/rss.xml" rel="self" type="application/rss+xml" />
        <item>
            <title>Post one</title>
            <link>${homepageUrl}/posts-one</link>
            <description>Post one content.</description>
            <guid isPermaLink="true">${homepageUrl}/posts-one</guid>
            <pubDate>Mon, 22 May 2023 13:00:00 -0600</pubDate>
        </item>
        <item>
            <title>Post two</title>
            <link>${homepageUrl}/posts-two</link>
            <description>Post two content.</description>
            <guid isPermaLink="true">${homepageUrl}/posts-two</guid>
            <pubDate>Mon, 15 May 2023 13:00:00 -0600</pubDate>
        </item>
    </channel>
</rss>`;
export default formatRss;
