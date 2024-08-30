import React, { useState } from "react";
import { loaderContext } from "./context";

const LoaderProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  return (
    <loaderContext.Provider value={{ loader, setLoader }}>
      {children}
    </loaderContext.Provider>
  );
};

export default LoaderProvider;
