import React from "react";

import Amplify from "aws-amplify";

import config from "./src/aws-exports";
import Index from "./index";

Amplify.configure(config);



export default function App() {
  return (
      <Index />
  );
}
