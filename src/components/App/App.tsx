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
          feed generator
        </a>
      </header>
      <main class={styles.AppMain}>
        <div class={styles.AppEditor}>
          <Section title="Channel (required fields)" closed={false}>
            <Input label="Title" value={title()} onInputHandler={setTitle} />
            <Input
              label="Description"
              value={description()}
              onInputHandler={setDescription}
            />
            <Input
              label="Homepage URL"
              value={homepageUrl()}
              onInputHandler={setHomepageUrl}
            />
            <Input
              label="Feed URL"
              value={feedUrl()}
              onInputHandler={setFeedUrl}
            />
          </Section>
          <Section title="Channel (recommended fields)" closed={false}>
            <p>test</p>
          </Section>
          <Section title="Channel (optional fields)">
            <p>test</p>
          </Section>
          <Section title="Items">
            <p>test</p>
          </Section>
        </div>
        <div class={styles.AppResult}>
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
                4
              )}
            </pre>
          </code>
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
