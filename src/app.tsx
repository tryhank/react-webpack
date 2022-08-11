import { useRoutes } from "react-router-dom";
import { ROUTER_CONFIG } from "./router";
import "@/assets/css/normalize.css";
// import "@arco-design/web-react/dist/css/arco.css";
const App = () => {
  const appRoutesElement = useRoutes(ROUTER_CONFIG);
  return appRoutesElement;
};

export default App;
