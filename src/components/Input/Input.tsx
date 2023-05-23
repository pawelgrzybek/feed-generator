import type { JSX } from "solid-js";
import { Component, createSignal } from "solid-js";
import styles from "./Input.module.css";

interface Props {
  label: string;
  value: string;
  onInputHandler: JSX.EventHandler<HTMLInputElement, InputEvent>;
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
        quia deserunt delectus error, asperiores magnam omnis cupiditate
        necessitatibus velit porro, eaque enim corporis. Consectetur ipsam
        officiis enim odio ratione assumenda!
      </div>
    </div>
  );
};

export default Input;
