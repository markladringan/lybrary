import { createBrowserRouter } from "react-router";
import { Navigate } from "react-router";
import Main from "../Main";
import Library from "../pages/Library"
import Finished from "../pages/Finished";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter([
    {
        path:"/", Component: Main, 
        children:[
            { index: true, element: <Navigate to="/Library" replace /> },
            { path: "Library", Component: Library },
            { path: "Finished", Component: Finished },
            { path: "Wishlist", Component: Wishlist },
        
        ]
    }

]);

