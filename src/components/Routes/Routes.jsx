import _ from "lodash";
import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../../app/Layout/MainLayout";
import { Login } from "../../app/Pages/Login";
import { IsAuth, IsLoggedIn } from "./Auth";
import { RouteData } from "./RouteList";
import { ROUTE } from "../../constants/Routes";

export const AppRoutes = () => {
  const routeConfig = RouteData();
  const routes = [
    { path: ROUTE.ROOT, element: <Navigate to={ROUTE.DASHBOARD} replace /> },
    {
      path: ROUTE.LOGIN,
      element: <IsAuth><Login /></IsAuth>
    },
    {
      path: ROUTE.ROOT,
      element: <IsLoggedIn><MainLayout /></IsLoggedIn>,
      children: _.map(routeConfig, (val) => ({
        path: val.path,
        element: val.element,
      })),
    },
  ];

  const element = useRoutes(routes);
  return element;
};
