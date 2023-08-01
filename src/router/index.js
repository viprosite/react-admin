import { createBrowserRouter } from "react-router-dom";

import Layout from '@/layout'
import ErrorPage from "@/pages/errorPage";
import Dashboard from "@/pages/dashboard";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [
                    { index: true, element: <Dashboard /> },

                ]
            },


        ]
    }
])


export default routes;