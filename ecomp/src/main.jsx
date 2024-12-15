import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import './index.scss'
import Layout from './components/Layout'
import Homepage from './Pages/Homepage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Homepage/>} />
      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
