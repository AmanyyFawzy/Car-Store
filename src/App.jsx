import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import MasterLayout from './Components/MasterLayout/MasterLayout';
import LandingPage from './Components/LandingPage/LandingPage';
import AllCars from './Components/AllProducts/AllCars';
import './App.css'


function App() {
  const routes=createBrowserRouter([{
    path:'/',
    element:<MasterLayout/>,
    children:[
      {index:true,element:<LandingPage/>},
      { path: 'AllCars', element: <AllCars /> },
    ]    

  }])


  return (
    <>
       <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
