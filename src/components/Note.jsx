import React from "react";
import { useYourContext } from "../context/context";
import ListItem from "./ListItem";
import { MdPostAdd } from "react-icons/md";

const Note = () => {
  const { inputData, setInputData, items, setItems } = useYourContext();

  const addItem = () => {

    if (inputData === "") {
      alert("Please enter item");
    } else {
      const allInputData = {id:new Date().getTime().toString(),name:inputData}
      setItems([...items, allInputData]);
      setInputData("");
    }

  };
  return (
    <div className="bg-purple-900 h-[100vh] flex lr-pad">
      <div className="flex flex-col items-center w-full">
        <div className="my-[5rem]">
          <h1 className="text-[5rem] text-gray-200 font-semibold">
            To Do List
          </h1>
          <p className="text-3xl text-gray-300 text-center">
            Add your list here
          </p>
        </div>
        <div className="w-full md:w-[400px] relative">
          <input
            type="text"
            placeholder="Add Item..."
            autoComplete="off"
            autoFocus
            className="grow outline-none w-full border-none p-4 rounded-md text-3xl pl-5 pr-[4rem]"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          <span onClick={addItem}>
            <MdPostAdd className="text-[2.8rem] text-gray-800 absolute right-4 top-[7px] cursor-pointer hover:text-green-400" />
          </span>
        </div>
        <div className="mt-[4rem] w-full md:w-[400px]">
          <ListItem/>
        </div>
      </div>
    </div>
  );
};

export default Note;
