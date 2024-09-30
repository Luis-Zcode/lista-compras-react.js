import { useContext, useEffect } from "react"
import { ShoppingListContext } from "../../ShoppingListProvider/ShoppingListProvider"

export const ShoppingItem = () => {
    const { listProducts, eliminarItem, marcarComoComprado } = useContext(ShoppingListContext)

    return (
        <>
            {listProducts?.map(articulo => (
                <div key={articulo.id} className="flex gap-5 justify-between mt-4 bg-slate-400 w-full p-2 rounded-xl">
                    <button onClick={() => marcarComoComprado(articulo.id)} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Comprar
                        </span>
                    </button>
                    <p className={`p-2 ${articulo.comprado ? 'line-through' : ''} font-semibold text-lg text-white`}>{articulo.nombre}</p>
                    <button onClick={() => eliminarItem(articulo.id)} className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            Eliminar
                        </span>
                    </button>
                </div>
            ))
            }
        </>
    )
}