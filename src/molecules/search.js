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
      <TextField
        id="outlined-controlled"
        onChange={(event) => {
          setInput(event.target.value)
        }}
        placeholder={placeholder}
        className={classes.searchfield}
        variant="outlined"
        autoFocus
      />
      <IconButton
        className={classes.searchicon}
        style={{
          backgroundColor: "#5DB6CE",
          color: "#fff",
          borderRadius: "10%",
          height: 55,
          width: 55,
        }}
        onClick={() => handleSearch(input)}
      >
        <SearchIcon />
      </IconButton>
    </Grid>
  );
};

export default Search;
