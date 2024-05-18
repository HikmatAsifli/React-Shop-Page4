import AdminRoot from "../pages/admin/AdminRoot"
import Dashboard from "../pages/admin/dashboard/dashboard"
import Add from "../pages/admin/add/add"
import Error from "../pages/error/error/error"
import SiteRoot from "../pages/site/SiteRoot"
import Home from "../pages/site/home/home"
import Products from "../pages/admin/Products/Products"
import Basket from "../pages/site/home/Basket/Basket"

const ROUTES = [
    {
        path: "/",
        element: <SiteRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "basket",
                element: <Basket />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminRoot />,
        children: [
            {
                path: "",
                element: <Dashboard />
            },
            {
                path: "add",
                element: <Add />
            },
            {
                path: "products",
                element: <Products />
            }
        ]
    }
    , {
        path: "*",
        element: <Error />,

    },
]
export default ROUTES;