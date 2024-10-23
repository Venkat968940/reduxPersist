import { Dashboard } from "../../app/Pages/Dashboard"
import { ROUTE } from "../../constants/Routes"

export const RouteData  = () =>{

    const RouteList=[
        {
            title : "Dashboard",
            path: ROUTE.DASHBOARD,
            element : <Dashboard />,
            ability : true,
            activeIcon : "",
            hoverIcon : ""
        },

    ]
    return RouteList
}