import { createContext } from "react";
import { useState } from 'react'

export const CarContext = createContext()

export const CarProvider = ({ children }) => {
    const [car, setCar] = useState([])

    // const changeSetCar = () => { setCar('outro teste né pai') }

    return <CarContext.Provider value={{ car, setCar }}>{children}</CarContext.Provider>
}

export const arrayCarGlobal = []