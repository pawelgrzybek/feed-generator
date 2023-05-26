import { Component } from "solid-js";
import { createSignal } from "solid-js";
import styles from "./App.module.css";
import Section from "../Section/Section";
import Input from "../Input/Input";

const App: Component = () => {
  const [title, setTitle] = createSignal("");
  const [description, setDescription] = createSignal("");
  const [homepageUrl, setHomepageUrl] = createSignal("");
  const [feedUrl, setFeedUrl] = createSignal("");

  return (
    <div class={styles.App}>
      <header class={styles.AppHeader}>
        <a class={styles.AppLogo} href="/">
          feed-generator.app
        </a>
      </header>
      <main class={styles.AppMain}>
        <div class={styles.AppEditor}>
          <Section title="Channel (required fields)" closed={false}>
            <Input
              label="Title"
              value={title()}
              onInputHandler={setTitle}
              fieldRss="title"
              fieldAtom="title"
              fieldJson="title"
              fieldDescription="Contains a human readable title for the feed. Often the same as the title of the associated website."
            />
            <Input
              label="Description"
              value={description()}
              onInputHandler={setDescription}
              fieldRss="description"
              fieldAtom="subtitle"
              fieldJson="description"
              fieldDescription="Phrase or sentence describing the channel."
            />
            <Input
              label="Homepage URL"
              value={homepageUrl()}
              onInputHandler={setHomepageUrl}
              fieldRss="link"
              fieldAtom="link"
              fieldJson="home_page_url"
              fieldDescription="The URL to the HTML website corresponding to the channel."
            />
          </Section>
          <Section title="Channel (recommended fields)" closed={false}>
            <Input
              label="Feed URL"
              value={feedUrl()}
              onInputHandler={setFeedUrl}
              fieldRss="atom:link"
              fieldAtom="link"
              fieldJson="feed_url"
              fieldDescription="This is field description."
            />
          </Section>
          <Section title="Channel (optional fields)">
            <p>test</p>
          </Section>
          <Section title="Items">
            <p>test</p>
          </Section>
        </div>
        <div class={styles.AppResult}>
          <div class={styles.AppTabs}>
            <button
              class={styles.AppTab}
              classList={{
                [styles.AppTabActive]: true,
              }}
            >
              rss.xml
            </button>
            <button class={styles.AppTab}>atom.xml</button>
            <button class={styles.AppTab}>feed.json</button>
          </div>
          <output>
            <code>
              <pre>
                {JSON.stringify(
                  {
                    title: title(),
                    description: description(),
                    homepageUrl: homepageUrl(),
                    feedUrl: feedUrl(),
                  },
                  null,
                  2
                )}
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
        </p>
      </footer>
    </div>
  );
};

export default App;
