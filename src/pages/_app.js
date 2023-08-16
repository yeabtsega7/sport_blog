import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import { Layout } from "@/Components";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
