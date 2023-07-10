import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import KitchensPage from "./pages/kitchenspage"
import { useKitchen } from './contexts/kitchencontext'
import Navbar from "./components/navbar.js"
import KitchenInfo from "pages/kitcheninfo";


const AppView = props => {
 let { loadData } = useKitchen()
 useEffect(() => {loadData()}, [loadData])
  return (
      <>
      <Navbar/>
      <Switch>
          <Route exact path="/" component={KitchensPage}/>
          <Route path="/kitcheninfo/:kitchenid" component={KitchenInfo}/>
      </Switch>

      </>
  )
}
const AppViewWithRouter = withRouter(AppView)



const App = props => {
  return (
    <Router>
        <AppViewWithRouter />
    </Router>
    )
}
export default App;
