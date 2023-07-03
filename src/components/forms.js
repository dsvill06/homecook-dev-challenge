import React, { useState, useEffect } from "react";
import {TextField} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  let { handleData, handleClose} = props;

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
    <div class="grid w-96 h-96 container space-x-2 space-y-2 justify-items-center align-middle m-5">
      <div class="grid w-full text-primary-400 text-center pb-4">
        <h2 class="text-3xl border-b border-gray-500">Add Kitchen</h2>
      </div>
      <div class="formField">
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
      </div>
      <div class="formField">
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
      </div>
      <div class="formField">
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
      </div>
      <div class="formField">
        <select
          labelId="status-label"
          value={kitchen.status}
          onChange={handleStatusChange}
          class="form-select rounded"
        >
          <option value="" disabled>
            -Status-
          </option>
          {Object.entries(kitchen_statuses).map(([key, status]) => (
            <option key={key} value={status.label}>
              {status.label}
            </option>
          ))}
        </select>
      </div>

      <div class="formField pt-5">
        <button
          onClick={handleAddKitchen}
          variant="contained"
          class="buttonsPrimary h-11"
        >
          Add Kitchen
        </button>
      </div>
    </div>
  );
};

const DeleteConfirmationForm = (props) => {
  let { handleClose, onDeleteConfirmation } = props;
  return (
    <div class='grid container space-x-2 space-y-2 justify-center align-center'>
      <h1 class="text-xl text-primary-400">
        Are you sure you want to delete?
      </h1>
      <div class="text-lg text-center pb-5">
        Please confirm kitchen deletion
      </div>
      <div class="text-center grid grid-cols-2 gap-5">
        <button
          class="h-10 text-center text-white bg-cancel rounded-md drop-shadow-lg"
          onClick={onDeleteConfirmation}
          variant="contained"
        >
          Yes
        </button>
        <button
          variant="contained"
          class="text-center text-white bg-stone-400 rounded drop-shadow-lg"
          onClick={handleClose}
        >
          No
        </button>
      </div>
    </div>
  );
};
export { AddKitchenForm, DeleteConfirmationForm };
