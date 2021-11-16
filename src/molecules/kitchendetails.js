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

    return (
      <Grid className={classes.apps}></Grid>
    )
}

export default KitchenDetails;
