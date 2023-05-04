import classes from "./Button.module.css";

const Button = props => {
  return (
    <button
      className={classes.button}
      // type={props.type || "button"} // This is a fallback in case the type prop is not passed
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
