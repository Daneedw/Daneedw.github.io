import React, { useState } from "react";
import style from "./style.module.css";
export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      {!isSubmitted ? (
        <form
          onSubmit={()=> setIsSubmitted(true)}
          action="mailto:daneedw@gmail.com"
          method="post"
          className={style.contact}
        >
          <label htmlFor="name">Name:</label>
          <input type="text" name="name"></input>
          <label htmlFor="name">Email:</label>
          <input type="text" name="email"></input>

          <textarea></textarea>
          <button>Submit</button>
        </form>
      ) : (
        <h1>Thank you!</h1>
      )}
    </>
  );
}
