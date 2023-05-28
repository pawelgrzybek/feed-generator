interface Data {
  title: string;
  homepageUrl: string;
  description: string;
  author: string;
  lastUpdate: string;
}

const formatAtom = ({
  title,
  homepageUrl,
  description,
  author,
  lastUpdate,
}: Data) => `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <id>${homepageUrl}</id>
    <title>${title}</title>
    <updated>${new Date(lastUpdate).toISOString()}</updated>
    <author>
        <name>${author}</name>
    </author>
    <link href="${homepageUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <subtitle>${description}</subtitle>
    <entry>
        <id>${homepageUrl}/posts-one</id>
        <title>Post one</title>
        <link href="${homepageUrl}/posts-one"/>
        <updated>${new Date(lastUpdate).toISOString()}</updated>
        <summary type="html">${homepageUrl}/posts-one</summary>
        <content type="html">Post one content.</content>
    </entry>
    <entry>
        <id>${homepageUrl}/posts-two</id>
        <title>Post two</title>
        <link href="${homepageUrl}/posts-two"/>
        <updated>2023-05-15T13:00:00.000Z</updated>
        <summary type="html">${homepageUrl}/posts-two</summary>
        <content type="html">Post two content.</content>
    </entry>
</feed>`;

export default formatAtom;
