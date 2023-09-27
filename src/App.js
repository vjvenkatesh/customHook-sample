import React from "react";
import useWindowSize from "./useWindowSize";

const MyComponent = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      Window Width: {windowSize.width}px
      <br />
      Window Height: {windowSize.height}px
    </div>
  );
};

export default MyComponent;
