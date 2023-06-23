import React, { useState } from "react";
import { makeStyles, Grid, List, ListItem } from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import DeleteIcon from "@material-ui/icons/Delete";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import KitchenRecord from "../molecules/kitchenrecord";

import { useKitchen } from "../contexts/kitchencontext";

const useStyles = makeStyles({
  body: {
    margin: 0,
  },
  item: {
    width: "30%",
  },
});

const KitchenList = (props) => {
  const classes = useStyles();
  const [allselected, updateAllSelected] = useState(false);
  let { kitchens, handleNameSort, handleIDSort} = useKitchen();

  let { openAppModal } = props;

  return (
    <List>
      <ListItem style={{ backgroundColor: "#ccc", fontWeight: "bold" }}>
        <Grid style={{ width: "5%" }}>
          {allselected ? (
            <CheckBoxIcon
              style={{ cursor: "pointer" }}
              onClick={() => updateAllSelected(false)}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              style={{ cursor: "pointer" }}
              onClick={() => updateAllSelected(true)}
            />
          )}
          &nbsp; <KeyboardArrowDownIcon onClick={handleIDSort} style={{ cursor: "pointer", fontSize: 15 }} />
        </Grid>

        <Grid style={{ width: "10%" }}>ID</Grid>

        <Grid className={classes.item}>
          Kitchen Name &nbsp; <KeyboardArrowDownIcon onClick={handleNameSort} style={{ cursor: "pointer", fontSize: 15 }} />
        </Grid>

        <Grid className={classes.item}>Status</Grid>

        <Grid className={classes.item}>Location</Grid>

        <Grid className={classes.item}>Cost/hr</Grid>

        {allselected ? <Grid>
          <DeleteIcon
            style={{ cursor: "pointer", color: "#990000" }}
          />
        </Grid> : null}
      </ListItem>

      {kitchens
        ? kitchens.map((kitchen, i) => (
            <KitchenRecord
              key={i}
              kitchen={kitchen}
              openAppModal={openAppModal}
              allSelected={allselected}
            />
          ))
        : "No Kitchens"}
    </List>
  );
};

export default KitchenList;
