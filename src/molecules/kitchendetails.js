import React from "react";

import { makeStyles, Grid } from '@material-ui/core'


const useStyles = makeStyles({
    apps: {
        width: '100%',
        color: '#444',
    },
    appitem: {
        width: '30%'
    }
})


const KitchenDetails = props => {
    const classes = useStyles()
    const {kitchen} = props;

    return (
      <Grid className={classes.apps}>
        <Grid>{kitchen.name} | {kitchen.status} | {kitchen.location} | {kitchen.cost}</Grid>
      </Grid>
    )
}

export default KitchenDetails;
