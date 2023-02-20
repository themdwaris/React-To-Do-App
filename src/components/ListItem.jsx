import React from "react";
import { FcFullTrash } from "react-icons/fc";
import { FcEditImage } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useYourContext } from "../context/context";

const ListItem = () => {
  const { items, setItems, setInputData } = useYourContext();
  const delItem = (id) => {
    let updatedList = items.filter((currItem) => {
      return currItem.id !== id;
    });
    // setItems(items.splice(id, 1))
    return setItems(updatedList);
  };
  const editItem = (item) => {
    setInputData(item);
    let updatedItem = items.find((curItem) => {
      return curItem.id === item.id;
    });
    setInputData(updatedItem);
  };

  return (
    <>
      {items.map((currItem) => {
        // console.log(currItem)
        return (
          <p
            key={currItem.id}
            className="w-full p-4 rounded-md bg-white text-2xl text-gray-800 relative mb-6 font-semibold pr-[6.5rem] break-words"
          >
            {currItem.name}
            <span>
              <NavLink to="/edit" onClick={() => editItem(currItem)}>
                <FcEditImage className="absolute top-[8px] right-[3.5rem] text-[2.3rem] text-gray-700 cursor-pointer hover:text-green-400" />
              </NavLink>
              <FcFullTrash
                className="absolute top-[8px] right-2 text-[2.3rem] text-gray-700 cursor-pointer hover:text-red-600"
                onClick={() => delItem(currItem.id)}
              />
            </span>
          </p>
        );
      })}
    </>
  );
};

export default ListItem;
