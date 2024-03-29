import ReactDOM from 'react-dom/client'
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen.jsx'
import ProductScreen from './screens/ProductScreen.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} path='/' element={<HomeScreen />} /> 
            <Route path='/product/:id' element={<ProductScreen />} /> 
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <RouterProvider router={router} />
    </>
)
