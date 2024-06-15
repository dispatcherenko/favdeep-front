import styles from "./Inputs.module.scss";

const Input = (props) => {
  return (
    <span
      className={styles.wrap + " " + props.className}
      id={props.name}
      style={props.style}
    >
      <label htmlFor={props.name} className={styles.label}>
        {props.text}
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        className={styles.input}
      />
    </span>
  );
};

export default Input;
