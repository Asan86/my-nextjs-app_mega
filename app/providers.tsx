"use client";

import { Provider } from "react-redux";
import { store } from "../src/store/store";
import { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
