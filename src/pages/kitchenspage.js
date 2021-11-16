import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from '@material-ui/core'

import { useKitchen } from '../contexts/kitchencontext'
import SearchBox from '../components/searchbox'
import KitchenList from '../components/kitchenlist'
import { AddKitchenModal } from '../components/appModal'


const useStyles = makeStyles(theme => ({
        body: {
            padding: '1%'
        }
    })
)

const KitchensPage = props => {
  const classes = useStyles()
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
        <Grid container direction="column" className={classes.body}>
            <Grid item style={{color: '#888'}}>
                {(kitchens && kitchens.length) ? (kitchens.length) : "0"} Kitchens
            </Grid>
            <Grid item>
                <SearchBox toggleApplication={toggleApplication} />
                <KitchenList openAppModal={openAppModal} />
            </Grid>
        </Grid>

        <AddKitchenModal closeAppModal={closeAppModal} add_kitchen={add_kitchen} />
     </>
  )
}


export default KitchensPage;
