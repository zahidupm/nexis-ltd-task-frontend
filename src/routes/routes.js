import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import RegisterFinal from '../Pages/Auth/RegisterFinal';
import RegisterSecond from '../Pages/Auth/RegisterSecond';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login></Login>
    },
    {
        path: '/login',
        element: <Login></Login>
    }, 
    {
        path: '/register', 
        element: <Register></Register>
    },
    {
        path: '/register_second',
        element: <RegisterSecond></RegisterSecond>
    }, 
    {
        path: '/register_final',
        element: <RegisterFinal></RegisterFinal>
    }
])

export default routes;