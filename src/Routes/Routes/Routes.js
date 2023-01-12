import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Error from "../../Pages/Error/Error";
import CategoriesDetails from '../../../src/Pages/Home/Categories/CategoriesDetails';
import Categories from "../../Pages/Home/Categories/Categories";
import Home from "../../Pages/Home/Home/Home";
import Samsungs from "../../Pages/Home/Samsung/Samsungs";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Spinner from "../../Pages/Shared/Spinner/Spinner";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/Categories/',
                element:<Categories></Categories>
                
            },
            {
                path:'/spinner',
                element:<Spinner></Spinner>
                
            },
            // {
            //     path:'/Categories/:name',
            //     element:<Categories></Categories>,
            //     loader: ({params}) => fetch(`http://localhost:5000/catagories/${params.name}`)
                
            // },
            {
                path:'/Categories/:name',
                element:<PrivateRoute><CategoriesDetails></CategoriesDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/Catagories/${params.name}`)
                
            },
            // {
            //     path:'/categories/:name',
            //     element: <Samsungs></Samsungs>,
            //     loader:({params}) => fetch(`http://localhost:5000/categories/${params.name}`)
                
            // },
            // {
            //     path:'/catagories/',
            //     element: <PrivateRoute><Samsungs></Samsungs></PrivateRoute>,
                
            // }
        ]
        
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children:[
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>
            }
        ]
    },
    {
        path:'*',
        element: <Error></Error>
    }
])


export default router;