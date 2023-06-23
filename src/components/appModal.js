import React from "react";
import { Grid, Dialog } from '@material-ui/core'
import { AddKitchenForm, DeleteConfirmationForm } from './forms'
import { addKitchen, deleteKitchen } from "api/crud";


const AddKitchenModal = props => {
    let { isOpen, closeAppModal } = props
    const handleData = (data) => {
      addKitchen(data)
      closeAppModal();
    }
    return (
        <Dialog fullWidth open={(isOpen) ? true : false} onClose={() => closeAppModal()}>
          <Grid style={{margin: '2%'}}>
            <AddKitchenForm handleData={handleData}/>
          </Grid>
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
        <Dialog fullWidth open={(isOpen) ? true : false} onClose={() => closeDeleteModal()}>
          <Grid>
            <Grid style={{margin: '2%'}}>
              <DeleteConfirmationForm handleClose={()=>closeDeleteModal()} onDeleteConfirmation={handleConfirmation}/>
            </Grid>
          </Grid>
        </Dialog>
    )
}


export { AddKitchenModal, DeleteConfirmationModal };
