import React, { useState, useEffect, useReducer } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = props => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  useEffect(() => {
    // Debouncing using setTimeout
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");

      // setFormIsValid(
      //   enteredEmail.includes("@") && enteredPassword.trim().length > 6
      // );
    }, 500);

    // Runs before the next useEffect function execution
    // Cleanup function: Clears the timer before the next useEffect function execution
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    };
    // setFormIsValid is omitted from the dependency array because state updating functions never change by default
    // }, [enteredEmail, enteredPassword]);
    // If using useReducer hook
  }, []);

  const emailChangeHandler = event => {
    // setEnteredEmail(event.target.value);

    // If using useEffect hook
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      // event.target.value.includes("@") && enteredPassword.trim().length > 6
      // If using useReducer hook
      event.target.value.includes("@") && passwordState.isValid
    );
  };

  const passwordChangeHandler = event => {
    // setEnteredPassword(event.target.value);

    // If using useReducer hook
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });

    setFormIsValid(
      // If using useEffect hook
      // event.target.value.trim().length > 6 && enteredEmail.includes("@")
      // If using useReducer hook
      event.target.value.trim().length > 6 && emailState.isValid
    );
  };

  const validateEmailHandler = () => {
    // If using useEffect hook
    // setEmailIsValid(enteredEmail.includes("@"));
    // If using useReducer hook
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);

    // If using useReducer hook
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = event => {
    event.preventDefault();
    // props.onLogin(emailState.value, enteredPassword);

    // If using useReducer hook
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
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
        <div
          className={`${classes.control} ${
            // passwordIsValid === false ? classes.invalid : ""

            // If using useReducer hook
            passwordState.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            // value={enteredPassword}
            // If using useReducer hook
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
