import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root'
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import About from '../pages/About/About';
import Career from '../pages/Career/Career';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/career',
                element: <Career></Career>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;