import React, { useState } from "react";

import { makeStyles, Grid, ListItem } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InfoIcon from '@material-ui/icons/Info';

import KitchenDetails from './kitchendetails'

const useStyles = makeStyles({
    record: {
        width: '100%',
        color: '#444',
        backgroundColor: "#eee"
    },
    item: {
        width: '30%'
    }
})


const KitchenRecord = props => {
    const classes = useStyles()
    const [is_open, openCheck] = useState(false)
    const [selected, updateSelect] = useState(false)

    let { kitchen, openAppModal } = props

    const updateOpenView = () => {
        openCheck(true)
    }

    const updateCloseView = candidate => {
        openCheck(false)
    }


    return (
          (kitchen) ? (
          <>
              <ListItem className={classes.record} >
                    <Grid style={{width: '5%'}}>
                        {
                            (selected) ? (
                                <CheckBoxIcon style={{cursor: 'pointer'}} onClick={() => updateSelect(false)}  />
                            ) :  (
                                <CheckBoxOutlineBlankIcon style={{cursor: 'pointer'}} onClick={() => updateSelect(true)} />
                            )
                        }
                    </Grid >

                    <Grid style={{width: '10%'}}>
                        {kitchen.id}
                    </Grid>

                    <Grid className={classes.item}>
                        {kitchen.name}
                    </Grid>

                    <Grid className={classes.item}>
                        {kitchen.status}
                    </Grid>

                    <Grid className={classes.item}>
                        {kitchen.location}
                    </Grid>

                    <Grid className={classes.item}>
                        {kitchen.cost}
                    </Grid>

                    <EditIcon style={{cursor: 'pointer', color: "#ccc", margin: 2}} />
                    <DeleteIcon style={{cursor: 'pointer', color: "#990000", margin: 2}} />
                    {(is_open) ? <RemoveCircleIcon style={{cursor: 'pointer', color: "#777", margin: 2}} onClick={() => updateCloseView()} /> : <InfoIcon style={{cursor: 'pointer', color: "#5DB6CE"}} onClick={() => updateOpenView()} />}
               </ListItem>

              {(is_open) ? <KitchenDetails kitchen={kitchen} openAppModal={openAppModal} /> : null }
          </>
      ) : null
    )
}

export default KitchenRecord;
