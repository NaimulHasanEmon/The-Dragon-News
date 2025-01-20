import { createBrowserRouter } from 'react-router-dom';
import Root from '../layouts/Root'
import Home from '../pages/Home/Home';
import Error from '../pages/Error/Error';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <Error></Error>,
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
]);

export default router;