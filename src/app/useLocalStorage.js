import React from "react";

function useLocalStorage(itemName, initialValue) { // Hook personalizado
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
          try{
        const localStorageItem = localStorage.getItem(itemName);

      let parsedItem;

      if (!localStorageItem) { // Si no hay nada en el localStorage
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem)
      }

      setLoading(false);
    }  catch (error) {
      setLoading(false);
      setError(true);
    }
    }, 3000) // Tiempo para esperear del timeout
  }, []);


  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item, 
    saveItem,
    loading,
    error
  };
};

export { useLocalStorage };