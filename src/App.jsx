import Login from "./pages/login/Login"
import Home from "./pages/home/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useState } from "react";
import Details from "./pages/details/Details";
import { CarProvider } from "./context/CarContext";

const App = () => { 
  return (
    <CarProvider>
      <BrowserRouter>
        <Fragment>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<ProtectedRoutes> <Home/> </ProtectedRoutes>}/>
            <Route path="/details" element={<ProtectedRoutes> <Details /> </ProtectedRoutes>} />

            {/*Esse é para quando o usuario acessar qualquer outra rota alem das declaradas em cima ele é redirecionado para o login*/}
            <Route path="*" element={<Login/>}/>
          </Routes>
        </Fragment>
      </BrowserRouter>
    </CarProvider>
  )
}

export default App
