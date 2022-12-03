import { createBrowserRouter } from 'react-router-dom';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';

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
    }
])

export default routes;