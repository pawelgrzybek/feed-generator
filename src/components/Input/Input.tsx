import type { JSX } from "solid-js";
import { Component, createSignal } from "solid-js";
import styles from "./Input.module.css";

interface Props {
  label: string;
  value: string;
  onInputHandler: JSX.EventHandler<HTMLInputElement, InputEvent>;
  fieldRss: string;
  fieldAtom: string;
  fieldJson: string;
  fieldDescription: string;
}

const Input: Component<Props> = (props) => {
  const [isClosed, setIsClosed] = createSignal(true);

  return (
    <div class={styles.InputContainer}>
      <label class={styles.InputLabel} html-for="name">
        {props.label}
      </label>
      <input
        class={styles.Input}
        id="name"
        type="text"
        value={props.value}
        onInput={(e) => props.onInputHandler(e.currentTarget.value)}
      />
      <button
        class={styles.InputToggleButton}
        onClick={() => setIsClosed((previousValue) => !previousValue)}
      >
        {isClosed() ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles.InputToggleIcon}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class={styles.InputToggleIcon}
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
        class={styles.InputManual}
        classList={{
          [styles.InputManualClosed]: isClosed(),
        }}
      >
        <ul class={styles.InputManualList}>
          <li class={styles.InputManualListItem}>
            In RSS compiles to{" "}
            <code class={styles.InputManualCode}>{props.fieldRss}</code> element
          </li>
          <li class={styles.InputManualListItem}>
            In Atom compiles to{" "}
            <code class={styles.InputManualCode}>{props.fieldAtom}</code>{" "}
            element
          </li>
          <li class={styles.InputManualListItem}>
            In JSON Feeds compiles to{" "}
            <code class={styles.InputManualCode}>{props.fieldJson}</code> field
          </li>
        </ul>
        <p>{props.fieldDescription}</p>
      </div>
    </div>
  );
};

export default Input;
