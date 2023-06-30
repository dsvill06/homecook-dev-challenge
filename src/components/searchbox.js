import React, { useState } from "react";
import Search from "../molecules/search";
import AddIcon from "@material-ui/icons/Add";
import { AddKitchenModal } from "./appModal";




const SearchBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div class="container grid grid-cols-2 w-full"
    >
      <div class="grid 2/5" >
        <Search />
      </div>
      <div class="pt-2 text-right">
        <button
          onClick={() => setIsOpen(true)}
          class="buttonsPrimary w-30 h-10 p-2"
        >
          <AddIcon /> &nbsp; Add New Kitchen
        </button>
        <AddKitchenModal isOpen={isOpen} closeAppModal={() => setIsOpen(false)}/>
      </div>
    </div>
  );
};

export default SearchBox;
