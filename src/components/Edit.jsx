import React, { useState } from "react";
import { FcEditImage } from "react-icons/fc";
import { useYourContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Edit = () => {
  const { inputData, setInputData, items, setItems,isEdit,setIsEdit } = useYourContext();
  const [text, setText] = useState(inputData.name);
 

  const updateItem = (item) => {
    // console.log(items)
    // console.log(item)
    let updatedList = items.map((currItem) => {
      // console.log(currItem);
      if (currItem.name === item.name) {
        setIsEdit(true)
        return {...currItem, name: text};
      } else {
        return currItem;
      }
    });
    setItems(updatedList);
    setText("");
    setInputData("");
    // console.log(updatedList);
  };
 

  return (
    <div className="bg-purple-900 h-[100vh] flex lr-pad">
      <div className="flex flex-col items-center w-full">
        <div className="my-[5rem]">
          <h1 className="text-[5rem] text-gray-200 font-semibold">
            To Do List
          </h1>
          <p className="text-3xl text-gray-300 text-center">
            Update your list here
          </p>
        </div>
        <div className="w-full md:w-[400px] relative">
          <input
            type="text"
            placeholder="Add Item..."
            autoComplete="off"
            autoFocus
            className="grow outline-none w-full border-none p-4 rounded-md text-3xl pr-[4rem]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <span>
            <FcEditImage
              onClick={() => updateItem(inputData)}
              className="text-[2.7rem] text-gray-800 absolute right-4 top-[7px] cursor-pointer hover:text-green-400"
            />
          </span>
        </div>
        <div className="mt-[4rem] text-center">
          {isEdit&&<p className="text-4xl text-white font-semibold text-center mb-10">Updation successful</p>}
          <NavLink to="/" className="py-3 px-5 rounded-md bg-white text-gray-800 text-2xl font-semibold hover:bg-purple-400 hover:text-white" onClick={()=>{
            setIsEdit(false)
            setInputData("")
          }}>Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Edit;
