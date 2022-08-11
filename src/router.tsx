import { RouteObject } from "react-router-dom";
import LazyWrapper from "./components/LazyWrapper";
const ROUTER_CONFIG: RouteObject[] = [
  {
    path: "/",
    element: <LazyWrapper path='/HelloWorld' />,
  },
  {
    path: "*",
    element: <div>404 Not Found!</div>,
  },
];
export { ROUTER_CONFIG };
