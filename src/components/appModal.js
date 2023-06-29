import React from "react";
import { Grid, Dialog } from '@material-ui/core'
import { AddKitchenForm, DeleteConfirmationForm } from './forms'
import { addKitchen, deleteKitchen } from "api/crud";
import KitchenDetails from "molecules/kitchendetails";


const AddKitchenModal = props => {
    let { isOpen, closeAppModal } = props
    const handleData = (data) => {
      addKitchen(data)
      closeAppModal();
    }
    return (
        <Dialog class="z-5 mb-10" open={(isOpen) ? true : false} onClose={() => closeAppModal()}>
          <div class="gridLayout">
            <AddKitchenForm handleClose={closeAppModal} handleData={handleData}/>
          </div>
        </Dialog>
    )
}


const DeleteConfirmationModal = props => {
    let { isOpen, closeDeleteModal,kitchen } = props
    
    const handleConfirmation = () => {
      deleteKitchen(kitchen)
      closeDeleteModal(); // Close the modal
    };

    return (
        <Dialog class=" mb-10" open={(isOpen) ? true : false} onClose={() => closeDeleteModal()}>
          <div class="gridLayout">
            <div class="gridLayout">
              <DeleteConfirmationForm handleClose={()=>closeDeleteModal()} onDeleteConfirmation={handleConfirmation}/>
            </div>
          </div>
        </Dialog>
    )
}

const InformationModal = props => {
  let { isOpen, closeInfoModal,kitchen } = props
    

    return (
        <Dialog fullWidth open={(isOpen) ? true : false} onClose={() => closeInfoModal()}>
          <div class="grid">
            <div class='grid'>
              <KitchenDetails kitchen={kitchen}/>
            </div>
          </div>
        </Dialog>
    )
}
export { AddKitchenModal, DeleteConfirmationModal, InformationModal};
