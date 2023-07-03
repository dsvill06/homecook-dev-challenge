import React, { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";
import { DeleteConfirmationModal, InformationModal } from "components/appModal";
import { kitchenStatuses, statusColors } from "../utils/enums";
import { updateKitchen } from "api/crud";

const kitchen_statuses = kitchenStatuses();
const colors = statusColors();

const circle = (status) => {
  return (
    <div
      className={`z-0 w-2 h-2 animate-pulse ${colors[status]} rounded-full`}
    ></div>
  );
};

const KitchenRecord = (props) => {
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
    <tr class="border-x-2 border-b-2">
      <td class="">
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
      </td>

      <td class="w-1/12 text-center border-r-2">{kitchen.id}</td>

      <td class="recordItem">
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
      </td>

      <td class="recordItem">
        {inEditMode ? (
          <Select
            labelId="status-label"
            onChange={(e) => {
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
          <div className="flex justify-center items-center">
            {circle(kitchen.status)}
            <span className="ml-2">{kitchen.status}</span>
          </div>
        )}
      </td>

      <td class="recordItem">
        {inEditMode ? (
          <TextField
            onChange={(e) => {
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
      </td>

      <td class="recordItem">
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
        ) : kitchen.cost.includes(".") ? (
          `$${kitchen.cost}`
        ) : (
          `$${kitchen.cost}.00`
        )}
      </td>

      <td class="grid grid-cols-3 gap-9 pr-8">
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
        {inEditMode ? (
          <td class="pb-16 pl-3">
            <button class=" buttonsPrimary h-12 w-20  " onClick={handleUpdate}>
              Update
            </button>
          </td>
        ) : null}
      </td>

      {is_open ? (
        <InformationModal
          isOpen={is_open}
          kitchen={kitchen}
          closeInfoModal={updateCloseView}
        />
      ) : null}
    </tr>
  ) : null;
};

export default KitchenRecord;
