import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

import KitchensPage from "./pages/kitchenspage"
import { useKitchen } from './contexts/kitchencontext'


const AppView = props => {
 let { loadData } = useKitchen()
 useEffect(() => {loadData()}, [loadData])
  return (
      <>
      <Switch>
          <Route path="/">
              <KitchensPage />
          </Route>
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
