import React from "react";
import profile from "../../assets/images/profile.jpg";
export default function AboutMe() {
  return (
    <figure>
      <img src={profile} alt="Dane Edwards" />
      <figurecaption>
        <code>Hi, this is me, Dane Edwards. I enjoy video games, running, swimming, and biking.</code>
      </figurecaption>
    </figure>
  );
}
