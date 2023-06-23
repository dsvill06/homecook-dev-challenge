import React, { useState, useContext, createContext } from "react";
import { getAllKitchens, addKitchen } from "../api/crud";

const KitchenContext = createContext();

const KitchenProvider = (props) => {
  const [kitchens, updateKitchens] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [nameSort, setNameSort] = useState(false);
  const [idSort, setIDSort] = useState(false);


  const handleSearch = (value) => {
    setSearchQuery(value);
  };
  const handleNameSort = () => {
    setNameSort((prevSort) => !prevSort);
  };

  const handleIDSort = () => {
    setIDSort((prevSort) => !prevSort);
  };


  const loadData = async () => {
    let all_kitchens = await getAllKitchens();
    if (searchQuery) {
      all_kitchens = all_kitchens.filter((kitchen) => {
        //filter the kitchens based on the provided id in the search.
        return kitchen.id == searchQuery;
      });
    }
    if (nameSort) {
      all_kitchens = all_kitchens.sort((first, second) => {
        if (first.name < second.name) return -1;
        if (first.name > second.name) return 1;
        return 0;
      });
    }
    if (idSort) {
        all_kitchens = all_kitchens.sort((first, second) => {
          if (first.id < second.id) return -1;
          if (first.id > second.id) return 1;
          return 0;
        });
      }
    updateKitchens(all_kitchens ? all_kitchens : []);
  };

  let data = {
    kitchens,
    loadData,
    updateKitchens,
    handleSearch,
    handleNameSort,
    handleIDSort,
  };

  return <KitchenContext.Provider value={data} {...props} />;
};

const useKitchen = () => {
  const context = useContext(KitchenContext);
  if (context === undefined) {
    throw new Error(`useKitchen must be used within KitchenProvider`);
  }
  return context;
};

export { KitchenProvider, useKitchen };
