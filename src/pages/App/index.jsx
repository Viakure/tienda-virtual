import { useRoutes, BrowserRouter } from 'react-router-dom';
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home';
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import { Navbar } from '../../Comonents/Navbar'
import { CheckoutSideMenu } from '../../Comonents/CheckoutSideMenu';
import './App.css'


const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/all', element: <Home /> },
    { path: '/mensClothing', element: <Home /> },
    { path: '/womensClothing', element: <Home /> },
    { path: '/electronics', element: <Home /> },
    { path: '/jewelery', element: <Home /> },
    { path: '/others', element: <Home /> },
    { path: '/MyAccount', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/MyOrders', element: <MyOrders /> },
    { path: '/MyOrders/last', element: <MyOrder /> },
    { path: '/MyOrders/:id', element: <MyOrder /> },
    { path: '/*', element: <NotFound /> },
    { path: '/SignIn', element: <SignIn /> },
  ])
  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
