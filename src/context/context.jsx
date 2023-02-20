import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const getListFromLS = () => {
    let list = localStorage.getItem("ToDoList");
    if (list) {
      return JSON.parse(localStorage.getItem("ToDoList"));
    }
    return [];
  };

  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getListFromLS());
  const [isEdit, setIsEdit] = useState(false);

  //Edit List Item

  //   adding to localStorage;
  useEffect(()=>{
    localStorage.setItem("ToDoList",JSON.stringify(items));
  })

  return (
    <AppContext.Provider
      value={{ inputData, setInputData, items, setItems,isEdit,setIsEdit }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useYourContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useYourContext };
