import { createBrowserRouter } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Admin } from "./pages/admin/Admin";
import { Login } from "./pages/Login";
import { Timeline } from "./pages/Timeline";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Default/>,
        children: [
            {
                path: '/',
                element: <Timeline/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/admin',
                element: <Admin/>
            },
        ]
    }  
])