import React from "react";

const KitchenInfo = (props) => {
  const { kitchen } = props.location.state;
  return (
    <div class=" bg-back-400 min-h-screen w-screen grid grid-cols-1 items-center">
      <div class="fontLink bg-back-500 p-10 h-screen m-10 rounded-2xl shadow-lg ">
        <h1 class="text-6xl text-left pl-3">{kitchen.name}</h1>
        <hr class="w-full border-t-black my-1" />
        <div class="grid grid-cols-2 kitcheninfo gap-11">
          <img
            class="ml-10 mt-10 rounded-xl shadow-lg position-absolute w-[620px] h-[400px] object-cover sm:w-screen"
            alt="Kitchen"
            src="https://www.citiindustries.com.au/wp-content/uploads/2018/09/kitchen-flooring.jpg"
          />
          <div class="bg-primary-200 shadow-xl m-10 h-[550px] rounded-3xl text-white">
            <h1 class="text-3xl mt-10 ml-8">Kitchen ID - {kitchen.id}</h1>
            <hr class="mx-5 mt-3" />
            <ul class="m-10 text-2xl flex flex-col gap-y-10">
              <li>
                <h1 class="text-xl">Status</h1>
                <hr class="w-1/2" />
                <div class="m-3">{kitchen.status}</div>
              </li>
              <li>
                <h1 class="text-xl">Location</h1>
                <hr class="w-1/2" />
                <div class="m-3">{kitchen.location}</div>
              </li>
              <li>
                <h1 class="text-xl">Cost</h1>
                <hr class="w-1/2" />
                <div class="m-3">${kitchen.cost}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KitchenInfo;
