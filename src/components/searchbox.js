import React, { useState } from "react";
import Modal from "react-modal";
import { Grid, Button } from "@material-ui/core";
import Search from "../molecules/search";
import AddIcon from "@material-ui/icons/Add";
import { AddKitchenForm } from "./forms";
import { AddKitchenModal } from "./appModal";

const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };



const SearchBox = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item style={{ width: "40%" }}>
        <Search />
      </Grid>
      <Grid item>
        <Button
          onClick={() => setIsOpen(true)}
          size="small"
          style={{ backgroundColor: "#5DB6CE", color: "#fff" }}
        >
          <AddIcon /> &nbsp; Add New Kitchen
        </Button>
        <AddKitchenModal isOpen={isOpen} closeAppModal={() => setIsOpen(false)}/>
      </Grid>
    </Grid>
  );
};

export default SearchBox;
