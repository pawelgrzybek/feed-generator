import { Component, JSX, createSignal, mergeProps } from "solid-js";
import styles from "./Section.module.css";

interface Props {
  children: JSX.Element;
  title: string;
  closed: boolean;
}

const Section: Component<Props> = (props) => {
  const [isClosed, setIsClosed] = createSignal(props.closed);

  return (
    <section class={styles.Section}>
      <h2 class={styles.SectionTitle}>{props.title}</h2>
      <button
        class={styles.SectionToggleButton}
        onClick={() => setIsClosed((previousValue) => !previousValue)}
      >
        {isClosed() ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles.SectionToggleIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles.SectionToggleIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </button>
      <div
        class={styles.SectionContent}
        classList={{
          [styles.SectionContentClosed]: isClosed(),
        }}
      >
        {props.children}
      </div>
    </section>
  );
};

export default Section;
