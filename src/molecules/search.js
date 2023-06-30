import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useKitchen } from "contexts/kitchencontext";


const Search = (props) => {
  const [input, setInput] = useState("");
  const { handleSearch } = useKitchen();

  // const handleChange = (e) =>{
  //     setInput(e.target.value);
  //     handleChange(e.target.value)
  // }

  let placeholder = "Search by Kitchen ID";

  return (
    <div class="grid w-3/5 grid-cols-2">
      <input
        type="text"
        class="form-input px-4 py-3 rounded w-full max-h-full"
        onChange={(event) => {
          setInput(event.target.value)
        }}
        placeholder={placeholder}
      />
      <button
        class="buttonsPrimary ml-2 h-12 w-12 "
        onClick={() => handleSearch(input)}
      >
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
