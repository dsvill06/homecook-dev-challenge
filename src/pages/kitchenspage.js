import React, { useState, useEffect } from "react";

import { useKitchen } from '../contexts/kitchencontext'
import SearchBox from '../components/searchbox'
import KitchenList from '../components/kitchenlist'
import { AddKitchenModal } from '../components/appModal'



const KitchensPage = props => {
  const [add_kitchen, toggleApplication] = useState(false)
  let { kitchens } = useKitchen()

  const openAppModal = application => {
      toggleApplication(application)
  }

  const closeAppModal = () => {
      toggleApplication(false)
  }


  useEffect(()=> {
      document.title = 'HomeCook | Kitchen List'
   }, [])

  return (
      <>
        <div class=" p-[1%] bg-back-400">
            <div class="grid" item style={{color: '#888'}}>
                {(kitchens && kitchens.length) ? (kitchens.length) : "0"} Kitchens
            </div>
            <div class='grid'>
                <SearchBox toggleApplication={toggleApplication} />
                <KitchenList openAppModal={openAppModal} />
            </div>
        </div>

        <AddKitchenModal closeAppModal={closeAppModal} add_kitchen={add_kitchen} />
     </>
  )
}


export default KitchensPage;
