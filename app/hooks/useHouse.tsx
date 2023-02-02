import React, { useState } from "react";

export const useHouse = () => {
  const [themedHouse, setThemedHouse] = useState<string>();

  return {
    setThemedHouse,
    themedHouse,
  };
};
