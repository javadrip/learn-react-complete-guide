import classes from "./Input.module.css";

const Input = props => {
  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ""
        // If using useReducer hook
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type="email"
        id="email"
        // value={enteredEmail}
        // If using useReducer hook
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
