import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const AboutPage = () => {
  return <div className="p-10">This is the dummy blog.</div>;
};

export default AboutPage;
