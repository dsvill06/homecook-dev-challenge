import React, { useState } from "react";
import { makeStyles, Grid, TextField, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useKitchen } from "contexts/kitchencontext";

const useStyles = makeStyles({
  search: {
    margin: "1%",
  },
  searchfield: {
    width: "60%",
  },
  searchicon: {
    marginLeft: 2,
  },
});

const Search = (props) => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const { handleSearch } = useKitchen();

  // const handleChange = (e) =>{
  //     setInput(e.target.value);
  //     handleChange(e.target.value)
  // }

  let placeholder = "Search by Kitchen ID";

  return (
    <Grid className={classes.search}>
      <input
        type="text"
        class="form-input px-4 py-3 rounded w-3/5 max-h-full"
        onChange={(event) => {
          setInput(event.target.value)
        }}
        placeholder={placeholder}
        autoFocus
      />
      <button
        class="buttonsPrimary ml-2 h-12 w-12 "
        onClick={() => handleSearch(input)}
      >
        <SearchIcon />
      </button>
    </Grid>
  );
};

export default Search;
