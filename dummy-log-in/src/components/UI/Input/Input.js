const Input = props => {
  return (
    <div
      className={`${classes.control} ${
        // emailIsValid === false ? classes.invalid : ""
        // If using useReducer hook
        emailState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">E-Mail</label>
      <input
        type="email"
        id="email"
        // value={enteredEmail}
        // If using useReducer hook
        value={emailState.value}
        onChange={emailChangeHandler}
        onBlur={validateEmailHandler}
      />
    </div>
  );
};

export default Input;
