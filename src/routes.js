import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Order from './pages/order'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Order}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes