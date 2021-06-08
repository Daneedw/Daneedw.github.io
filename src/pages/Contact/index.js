import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { validateEmail } from "../../utils/helpers";
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  useEffect(() => {
    console.log(errorMessage);
  }, [errorMessage]);

  return (
    <>
      {!isSubmitted ? (
        <form
          onSubmit={() => errorMessage === ""
          && setIsSubmitted(true)}
          action="mailto:daneedw@gmail.com"
          method="post"
          className={style.contact}
        >
          <label htmlFor="name">Name:</label>
          <input  defaultValue={name}  onBlur={handleChange} type="text" name="name"></input>
          <label htmlFor="name">Email:</label>
          <input   defaultValue={email} onBlur={handleChange} type="text" name="email"></input>

          <textarea    defaultValue={message} onBlur={handleChange} name="message"></textarea>
          <button>Submit</button>

          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </form>
      ) : (
        <h1>Talk to you soon!</h1>
      )}
    </>
  );
}
