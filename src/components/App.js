import React from "react";
import "../styles/App.css";
import Heading from "heading";
import InputQuery from "inputquery";
import SubHeading from "subheading";
import SubmitButton from "submitbutton";

const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
};
export default App;
