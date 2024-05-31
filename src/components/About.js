import React from "react";

function About(props) {
  return (
    <aside>
      <img src={props.image} alt="blog logo" />
      <p>{props.aboutText}</p>
    </aside>
  );
}

About.defaultProps = {
  image: "https://via.placeholder.com/215",
};

export default About;
