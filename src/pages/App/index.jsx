import { useRoutes, BrowserRouter } from 'react-router-dom'

import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Admin from '../Admin'
import Navbar from '../../components/Navbar'
import { ShoppingCartProvider } from '../../context'

import './App.css'

const AppRoutes = () => {
  const routes = useRoutes([
    {path: '/',element: <Home />},
    {path: '/electronics',element: <Home />},
    {path: '/jewelery',element: <Home />},
    {path: '/men',element: <Home />},
    {path: '/women',element: <Home />},
    {path: '/my-account',element: <MyAccount />},
    {path: '/my-order',element: <MyOrder />},
    {path: '/my-orders/:id',element: <MyOrder />},
    {path: '/my-orders',element: <MyOrders />},
    {path: '/sign-in',element: <SignIn />},
    {path: '/admin', element: <Admin />},
    {path: '/*',element: <NotFound />},
  ])

  return routes
}

const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App

