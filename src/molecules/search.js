import React from "react";
import { makeStyles, Grid, TextField, IconButton } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    search: {
        margin: '1%'
    },
    searchfield: {
        width: '60%'
    },
    searchicon:{
        marginLeft: 2
    }
})


const Search = props => {
    const classes = useStyles()

    let placeholder = 'Search by Kitchen ID'

    return (
      <Grid className={classes.search}>
         <TextField placeholder={placeholder} className={classes.searchfield} autoFocus variant="outlined" />
         <IconButton className={classes.searchicon} style={{backgroundColor: '#5DB6CE', color: "#fff", borderRadius: "10%", height: 55, width: 55}}>
             <SearchIcon />
         </IconButton>
      </Grid>
    )
}

export default Search;
