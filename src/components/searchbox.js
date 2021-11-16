import React from "react";
import { Grid, Button } from '@material-ui/core'
import Search from '../molecules/search'
import AddIcon from '@material-ui/icons/Add';




const SearchBox = props => {

    return (
        <Grid container direction="row" alignItems="center" justifyContent="space-between">
            <Grid item style={{width: '40%'}}>
                <Search />
            </Grid>
            <Grid item>
                <Button size="small" style={{backgroundColor: '#5DB6CE', color: '#fff'}}><AddIcon/> &nbsp; Add New Kitchen</Button>
            </Grid>
        </Grid>
    )
}




export default SearchBox;
