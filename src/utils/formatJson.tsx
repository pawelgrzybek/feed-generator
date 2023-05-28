interface Data {
  title: string;
  homepageUrl: string;
  description: string;
}

const formatJson = ({ title, homepageUrl, description }: Data) => `{
  "version": "https://jsonfeed.org/version/1.1",
  "title": ${title},
  "home_page_url": ${homepageUrl},
  "feed_url": "${homepageUrl}/feed.json",
  "description": ${description},
  "items": [
    {
      "id": "${homepageUrl}/posts-one",
      "url": "${homepageUrl}/posts-one",
      "title": "Post one content.",
      "content_text": "Post one content.",
      "date_published": "2023-05-22T13:00:00.000Z"
    },
    {
      "id": "${homepageUrl}/posts-two",
      "url": "${homepageUrl}/posts-two",
      "title": "Post two content.",
      "content_text": "Post two content.",
      "date_published": "2023-05-15T13:00:00.000Z"
    }
  ]
}`;

export default formatJson;
