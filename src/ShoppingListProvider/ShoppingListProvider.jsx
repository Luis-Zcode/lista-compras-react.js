import { createContext, useState } from "react";
import { useForm } from "react-hook-form";

export const ShoppingListContext = createContext()

export const ShoppingListProvider = ({ children }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const [listProducts, setListProducts] = useState([])
    const agregarItem = (nombre) => {
        const idAleatorio = Math.random().toString(36).slice(2)
        const nuevoItem = {
            nombre: nombre,
            comprado: false,
            id: idAleatorio
        }
        listProducts.push(nuevoItem)
        setListProducts[listProducts]
    }

    const eliminarItem = (id) => {
        const eliminar = listProducts.filter(element => element.id != id)
        setListProducts(eliminar)
    }

    const marcarComoComprado = (id) => {
        const index = listProducts.findIndex(element => element.id == id)
        if(listProducts[index].comprado == false){
            listProducts[index].comprado = true
        }else{
            listProducts[index].comprado = false
        }
    }

    return (
        <ShoppingListContext.Provider value={{
            register,
            handleSubmit,
            errors,
            agregarItem,
            listProducts,
            eliminarItem,
            marcarComoComprado
        }}>
            {children}
        </ShoppingListContext.Provider>
    )
}