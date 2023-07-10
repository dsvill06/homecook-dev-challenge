import { getKitchenID } from "api/crud";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const KitchenInfo = (props) => {
  const { kitchenid } = useParams();
  const [kitchen, setKitchen] = useState(null);
  useEffect(() => {
    const fetchKitchen = async () => {
      try {
        const kitchenData = await getKitchenID({ id: kitchenid });
        setKitchen(kitchenData);
      } catch (err) {
        console.log(`Error caught: ${err}`);
      }
    };
    fetchKitchen();
  }, [kitchenid]);
  if (!kitchen) {
    return (
      <div
        role="status"
        class="grid items-center justify-center bg-back-400 h-screen"
      >
        <svg
          aria-hidden="true"
          class="w-28 h-28 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-400"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    );
  }
  return (
    <div class=" bg-back-400 min-h-screen w-screen grid grid-cols-1 items-center">
      <div class="fontLink bg-back-500 p-10 h-screen m-10 rounded-2xl shadow-lg ">
        <div class="grid grid-cols-2 items-center">
          <h1 class="text-6xl text-left pl-3">Kitchen Name</h1>
          <a href="/" class="justify-self-end mr-5">
            <button class="buttonsPrimary w-44 h-14 text-2xl">Home</button>
          </a>
        </div>
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
