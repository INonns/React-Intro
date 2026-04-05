import React from "react";

function useLocalStorage(itemName, initialValue) { // Hook personalizado
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) { // Si no hay nada en el localStorage
    localStorage.setItem(itemName, JSON.stringify([]));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

    const [item, setItem] = React.useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};

export { useLocalStorage };