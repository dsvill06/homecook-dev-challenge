import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, InputLabel} from "@material-ui/core";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import { kitchenStatuses } from "../utils/enums";

const AddKitchenForm = (props) => {
  const kitchen_statuses = kitchenStatuses();
  const [isSubmitted, updateSubmit] = useState(false);
  const [kitchen, setKitchen] = useState({
    name: "",
    status: "",
    location: "",
    cost: "",
  });
  let { handleData } = props;

  const handleAddKitchen = () => {
    handleData(kitchen);
    updateSubmit(true);
  };
  const handleStatusChange = (event) => {
    setKitchen((prevKitchen) => ({
      ...prevKitchen,
      status: event.target.value,
    }));
  };


  useEffect(() => {
    if (isSubmitted) {
      return setKitchen({ name: "", location: "", cost: "" });
    }
  }, [isSubmitted]);

  return (
    <Grid container spacing={2}  justifyContent="center" alignItems="center">
      <Grid item style={{ color: "#5db6ce", textAlign:"center"}}>
        <h2>Add Kitchen</h2>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <TextField
          onChange={(e) => {
            e.persist();
            setKitchen((prevKitchen) => ({
              ...prevKitchen,
              cost: e.target.value,
            }));
          }}
          label="Cost"
          variant="outlined"
          type="number"
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Select
          labelId="status-label"
          value={kitchen.status}
          onChange={handleStatusChange}
          displayEmpty
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
      </Grid>

      <Grid item xs={12}>
        <Button
          onClick={handleAddKitchen}
          variant="contained"
          justifyContent="center"
          fullWidth
          style={{ backgroundColor: "#5db6ce", color: "white" }}
        >
          Add Kitchen
        </Button>
      </Grid>
    </Grid>
  );
};

const DeleteConfirmationForm = (props) => {
  let { handleClose, onDeleteConfirmation } = props;
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item style={{ color: "#5db6ce", fontSize: "large" }}>
        Are you sure you want to delete?
      </Grid>
      <Grid item xs={12} style={{ color: "#343434", textAlign: "center" }}>
        Please confirm kitchen deletion
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <Button
          onClick={onDeleteConfirmation}
          variant="contained"
          style={{
            backgroundColor: "#ad0c00",
            textAlign: "center",
            color: "white",
          }}
        >
          Yes
        </Button>
      </Grid>
      <Grid style={{ textAlign: "center" }} item xs={12}>
        <Button
          variant="contained"
          onClick={handleClose}
          style={{
            backgroundColor: "#aaaaaa",
            textAlign: "center",
            color: "white",
          }}
        >
          No
        </Button>
      </Grid>
    </Grid>
  );
};
export { AddKitchenForm, DeleteConfirmationForm };
