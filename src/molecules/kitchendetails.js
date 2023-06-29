import React from "react";

const KitchenDetails = (props) => {
  const { kitchen } = props;

  const sortedEntries = Object.entries(kitchen).sort(([keyA], [keyB]) => {
    if (keyA === "name") return -1;
    if (keyB === "name") return 1;
    return 0;
  });

  return (
    <div class="gridLayout">
      <h1 class="text-primary-400 text-center text-4xl pl-5">Information</h1>
      <div class="gridLayout grid-cols-2 gap-4 pl-10">
      <img
        src="https://homecookapp.com/static/media/homecook_logo.1ca10013af71605db8e8.png"
        alt="Kitchen Logo"
        className="col-span-1"
      />
      <div>
        {sortedEntries.map(([key, value]) => (
          <div class="col-span-1 text-lg" key={key}>
            <span class="font-bold">{key}:</span> {value}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default KitchenDetails;