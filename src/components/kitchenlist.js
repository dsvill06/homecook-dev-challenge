import React, { useState } from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KitchenRecord from "../molecules/kitchenrecord";
import { useKitchen } from "../contexts/kitchencontext";


const KitchenList = (props) => {
  const [allselected, updateAllSelected] = useState(false);
  let { kitchens, handleNameSort, handleIDSort} = useKitchen();

  let { openAppModal } = props;

  return (
    <table class="table-auto my-3">
      <thead class="bg-secondary h-10 pl-4 border-2 border-gray-800 ">
        <th class="flex "> 
          {allselected ? (
            <CheckBoxIcon
              onClick={() => updateAllSelected(false)}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              onClick={() => updateAllSelected(true)}
            />
          )}
          &nbsp; <KeyboardArrowDownIcon onClick={handleIDSort} style={{ cursor: "pointer", fontSize: 15 }} />
        </th>

        <th class="w-1/12">ID</th>

        <th class="headItem">
          Kitchen Name &nbsp; <KeyboardArrowDownIcon onClick={handleNameSort} style={{ cursor: "pointer", fontSize: 15 }} />
        </th>

        <th class="headItem">Status</th>

        <th class="headItem">Location</th>

        <th class="headItem">Cost/hr</th>
        <th class="headItem">Edit</th>

        
      </thead>
      <tbody class="bg-tertiary">
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
        </tbody>
    </table>
  );
};

export default KitchenList;
