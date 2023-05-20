import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    absolute: "About Page",
  },
  description: "This is the about",
};

const AboutPage = () => {
  return <div className="p-10">This is the dummy blog.</div>;
};

export default AboutPage;
