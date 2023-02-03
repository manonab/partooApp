import React from "react";

export const useList = () => {
  const [available, setIsAvailable] = React.useState<boolean>(false);

  const addingValues = () => {
    setIsAvailable(true);
  };

  return {
    addingValues,
    setIsAvailable,
    available,
  };
};
