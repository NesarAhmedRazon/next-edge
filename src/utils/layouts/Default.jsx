import React from "react";
import { Footer, Header } from "../templatePart";

export default function Default(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
