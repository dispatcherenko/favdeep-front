import styles from "./Buttons.module.scss";

const ButtonWhite = (props) => {
  return (
    <button {...props} className={styles.white + " " + props.className}>
      {props.children}
    </button>
  );
};

const ButtonRed = (props) => {
  return (
    <button {...props} className={styles.red + " " + props.className}>
      {props.children}
    </button>
  );
};

export const ButtonFactory = (props) => {
  switch (props.type) {
    case "white":
      return ButtonWhite(props);
    case "red":
      return ButtonRed(props);
    default:
      return ButtonRed(props);
  }
};
