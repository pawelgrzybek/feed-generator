import { Component, For } from "solid-js";
import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Section from "../Section/Section";
import Input from "../Input/Input";
import formatRss from "../../utils/formatRss";
import formatAtom from "../../utils/formatAtom";
import formatJson from "../../utils/formatJson";

type Format = "rss" | "atom" | "json";

const SECTIONS = [
  { title: "Channel (required fields)", closed: false, key: "required" },
  { title: "Channel (recommended fields)", closed: false, key: "recommended" },
  { title: "Channel (optional fields)", closed: false, key: "optional" },
  // { title: "Items", closed: false, key: "items" },
];

const formatMapper: Record<Format, Function> = {
  rss: formatRss,
  atom: formatAtom,
  json: formatJson,
};

const App: Component = () => {
  const [format, setFormat] = createSignal<Format>("rss");

  const [title, setTitle] = createSignal("Example website title");
  const [homepageUrl, setHomepageUrl] = createSignal("https://example.com");
  const [description, setDescription] = createSignal(
    "Example website description."
  );
  const [author, setAuthor] = createSignal("John Doe");

  const InputTitle = () => (
    <Input
      label="Title"
      id="title"
      type="text"
      value={title()}
      onInputHandler={setTitle}
      fieldRss="title"
      fieldAtom="title"
      fieldJson="title"
      fieldDescription="Contains a human readable title for the feed. Often the same as the title of the associated website."
    />
  );

  const InputHomepageUrl = () => (
    <Input
      label="Homepage URL"
      id="homepageUrl"
      type="text"
      value={homepageUrl()}
      onInputHandler={setHomepageUrl}
      fieldRss="link"
      fieldAtom="id"
      fieldJson="home_page_url"
      fieldDescription="The URL to the HTML website corresponding to the channel."
    />
  );

  const InputDescription = () => (
    <Input
      label="Description"
      id="description"
      type="text"
      value={description()}
      onInputHandler={setDescription}
      fieldRss="description"
      fieldAtom="subtitle"
      fieldJson="description"
      fieldDescription="Phrase or sentence describing the channel."
    />
  );

  const InputAuthor = () => (
    <Input
      label="Author"
      id="author"
      type="text"
      value={author()}
      onInputHandler={setAuthor}
      fieldAtom="author"
      fieldDescription="Phrase or sentence describing the channel."
    />
  );

  const WIP = () => (
    <p>
      Work in progress.{" "}
      <a href="https://github.com/pawelgrzybek/feed-generator">
        Your contributions are welcome 😜
      </a>
    </p>
  );

  const inputs: Record<Format, any> = {
    rss: {
      required: [<InputTitle />, <InputHomepageUrl />, <InputDescription />],
      recommended: [<WIP />],
      optional: [<WIP />],
    },
    atom: {
      required: [<InputTitle />, <InputHomepageUrl />],
      recommended: [<InputAuthor />],
      optional: [<InputDescription />],
    },
    json: {
      required: [<InputTitle />],
      recommended: [<InputHomepageUrl />],
      optional: [<InputDescription />],
    },
  };

  return (
    <div class={styles.App}>
      <header class={styles.AppHeader}>
        <a class={styles.AppLogo} href="/">
          feed-generator.app
        </a>
      </header>
      <main class={styles.AppMain}>
        <div class={styles.AppEditor}>
          <For each={SECTIONS}>
            {(section, i) => (
              <Section title={section.title} closed={section.closed}>
                {inputs[format()][section.key]}
              </Section>
            )}
          </For>
        </div>
        <div class={styles.AppResult}>
          <div class={styles.AppTabs}>
            <button
              onClick={() => setFormat("rss")}
              class={styles.AppTab}
              classList={{
                [styles.AppTabActive]: format() === "rss",
              }}
            >
              rss.xml
            </button>
            <button
              onClick={() => setFormat("atom")}
              class={styles.AppTab}
              classList={{
                [styles.AppTabActive]: format() === "atom",
              }}
            >
              atom.xml
            </button>
            <button
              onClick={() => setFormat("json")}
              class={styles.AppTab}
              classList={{
                [styles.AppTabActive]: format() === "json",
              }}
            >
              feed.json
            </button>
          </div>
          <output class={styles.AppOutput}>
            <code class={styles.AppOutputCode}>
              <pre>
                {formatMapper[format()]({
                  title: title(),
                  homepageUrl: homepageUrl(),
                  description: description(),
                  author: author(),
                })}
              </pre>
            </code>
          </output>
        </div>
      </main>
      <footer class={styles.AppFooter}>
        <p>
          {" "}
          Hi there! I'm <a href="https://pawelgrzybek.com">Paweł Grzybek</a> and
          I built it for fun. You can{" "}
          <a href="https://www.buymeacoffee.com/pawelgrzybek">
            buy me a coffee
          </a>{" "}
          if you like it. Source code on{" "}
          <a href="https://github.com/pawelgrzybek/feed-generator">GitHub</a>.
          Have a great day 🫶
        </p>
      </footer>
    </div>
  );
};

export default App;
