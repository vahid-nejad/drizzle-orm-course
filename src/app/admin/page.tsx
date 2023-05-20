import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
  },
};

const AdminPage = () => {
  return <div>AdminPage</div>;
};

export default AdminPage;
