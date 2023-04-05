import Login from "./pages/login/Login"
import Home from "./pages/home/Home";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useState } from "react";
import Details from "./pages/details/Details";
import { CarProvider } from "./context/CarContext";
import Buy from "./pages/buy/Buy";
import { ChakraProvider } from '@chakra-ui/react'

const App = () => { 
  return (
    <ChakraProvider>
      <CarProvider>
        <BrowserRouter>
          <Fragment>
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<ProtectedRoutes> <Home/> </ProtectedRoutes>}/>
              <Route path="/details" element={<ProtectedRoutes> <Details /> </ProtectedRoutes>} />
              <Route path="/buy" element={<ProtectedRoutes> <Buy /> </ProtectedRoutes>} />

              {/*Esse é para quando o usuario acessar qualquer outra rota alem das declaradas em cima ele é redirecionado para o login*/}
              <Route path="*" element={<Login/>}/>
            </Routes>
          </Fragment>
        </BrowserRouter>
      </CarProvider>
    </ChakraProvider>
  )
}

export default App
