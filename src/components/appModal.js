import React from "react";
import { Grid, Dialog } from '@material-ui/core'
import { AddKitchenForm } from './forms'


const AddKitchenModal = props => {
    let { add_kitchen, closeAppModal } = props

    return (
        <Dialog fullWidth open={(add_kitchen) ? true : false} onClose={() => closeAppModal()}>
          <Grid style={{margin: '2%'}}>
            <AddKitchenForm />
          </Grid>
        </Dialog>
    )
}


const DeleteConfirmationModal = props => {
    let { delete_kitchen, closeDeleteModal } = props
    return (
        <Dialog fullWidth open={(delete_kitchen) ? true : false} onClose={() => closeDeleteModal()}>
          <Grid></Grid>
        </Dialog>
    )
}


export { AddKitchenModal, DeleteConfirmationModal };
