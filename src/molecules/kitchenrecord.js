import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {
  Button,
  makeStyles,
  Grid,
  ListItem,
  TextField,
} from "@material-ui/core";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import InfoIcon from "@material-ui/icons/Info";
import KitchenDetails from "./kitchendetails";
import { DeleteConfirmationModal } from "components/appModal";
import { kitchenStatuses } from "../utils/enums";
import { updateKitchen } from "api/crud";

const useStyles = makeStyles({
  record: {
    width: "100%",
    color: "#444",
    backgroundColor: "#eee",
  },
  item: {
    width: "30%",
  },
});
const kitchen_statuses = kitchenStatuses();

const KitchenRecord = (props) => {
  const classes = useStyles();
  const [is_open, openCheck] = useState(false);
  const [isClicked, setClick] = useState(false);
  const [selected, updateSelect] = useState(false);
  const [inEditMode, updateEditMode] = useState(false);
  const [newKitchen, setKitchen] = useState({
    name: "",
    status: "",
    location: "",
    cost: "",
  });
  let { kitchen, openAppModal } = props;

  const updateOpenView = () => {
    openCheck(true);
  };

  const updateCloseView = (candidate) => {
    openCheck(false);
  };

  const handleUpdate = (e) => {
    updateKitchen({ id: kitchen.id, data: newKitchen });
    updateEditMode(false);
  };

  return kitchen ? (
    <>
      <ListItem className={classes.record}>
        <Grid style={{ width: "5%" }}>
            {/* Uses the allselected prop from the kitchen list to set the check box*/}
          {props.allSelected ? (
            <CheckBoxIcon
              style={{ cursor: "pointer" }}
              onClick={() => updateSelect(false)}
            />
          ) : selected ? (
            <CheckBoxIcon
              style={{ cursor: "pointer" }}
              onClick={() => updateSelect(false)}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              style={{ cursor: "pointer" }}
              onClick={() => updateSelect(true)}
            />
          )}
        </Grid>

        <Grid style={{ width: "10%" }}>{kitchen.id}</Grid>

        <Grid className={classes.item}>
          {/* This provides a test if the edit button has been checked and if so to open a text field to change the value. */}
          {inEditMode ? (
            <TextField
              onChange={(e) => {
                e.persist();
                setKitchen((prevKitchen) => ({
                  ...prevKitchen,
                  name: e.target.value,
                }));
              }}
              label="Kitchen Name"
              variant="outlined"
              fullWidth
            />
          ) : (
            kitchen.name
          )}
        </Grid>

        <Grid className={classes.item}>
          {inEditMode ? (
            <Select
              labelId="status-label"
              onChange={(e) => {
                e.persist();
                setKitchen((prevKitchen) => ({
                  ...prevKitchen,
                  status: e.target.value,
                }));
              }}
              value={kitchen.status}
              fullWidth
            >
              <MenuItem value="" disabled>
                -Status-
              </MenuItem>
              {Object.entries(kitchen_statuses).map(([key, status]) => (
                <MenuItem key={key} value={status.label}>
                  {status.label}
                </MenuItem>
              ))}
            </Select>
          ) : (
            kitchen.status
          )}
        </Grid>

        <Grid className={classes.item}>
          {inEditMode ? (
            <TextField
              onChange={(e) => {
                e.persist();
                setKitchen((prevKitchen) => ({
                  ...prevKitchen,
                  location: e.target.value,
                }));
              }}
              label="Location"
              variant="outlined"
              fullWidth
            />
          ) : (
            kitchen.location
          )}
        </Grid>

        <Grid className={classes.item}>
          {inEditMode ? (
            <TextField
              onChange={(e) => {
                e.persist();
                setKitchen((prevKitchen) => ({
                  ...prevKitchen,
                  cost: e.target.value,
                }));
              }}
              type="number"
              label="Cost"
              variant="outlined"
              fullWidth
            />
          ) : (
            kitchen.cost
          )}
        </Grid>
        {inEditMode ? <Button onClick={handleUpdate}>Update</Button> : null}

        <EditIcon
          onClick={() => updateEditMode(true)}
          style={{ cursor: "pointer", color: "#ccc", margin: 2 }}
        />
        <DeleteIcon
          onClick={() => setClick(true)}
          style={{ cursor: "pointer", color: "#990000", margin: 2 }}
        />
        <DeleteConfirmationModal
          kitchen={kitchen}
          isOpen={isClicked}
          closeDeleteModal={() => setClick(false)}
        />
        {is_open ? (
          <RemoveCircleIcon
            style={{ cursor: "pointer", color: "#777", margin: 2 }}
            onClick={() => updateCloseView()}
          />
        ) : (
          <InfoIcon
            style={{ cursor: "pointer", color: "#5DB6CE" }}
            onClick={() => updateOpenView()}
          />
        )}
      </ListItem>
      {is_open ? (
        <KitchenDetails kitchen={kitchen} openAppModal={openAppModal} />
      ) : null}
    </>
  ) : null;
};

export default KitchenRecord;
