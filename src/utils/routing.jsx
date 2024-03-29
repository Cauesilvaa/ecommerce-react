import Buy from "../pages/buy/Buy";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import RegisterUser from "../pages/registerUser/RegisterUser";
import ProtectedRoutes from "./ProtectedRoutes";

const routes = [
  {
    path: '/login',
    component: () => <Login />,
  },
  {
    path: '/home',
    component: () => <ProtectedRoutes> <Home /> </ProtectedRoutes> ,
  },
  {
    path: '/details',
    component: () => <ProtectedRoutes> <Details /> </ProtectedRoutes>
  },
  {
    path: '/buy',
    component: () => <ProtectedRoutes> <Buy /> </ProtectedRoutes>
  },
  {
    path: '/registerUser',
    component: () => <RegisterUser />
  },

  /*Esse é para quando o usuario acessar qualquer outra rota alem das declaradas em cima ele é redirecionado para o login*/
  {
    path: '*',
    component: () => <Login />,
  },
];

export default routes;