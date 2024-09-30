import { useContext } from "react"
import { ShoppingListContext } from "../../ShoppingListProvider/ShoppingListProvider"

export const AddItemForm = () => {
    const { handleSubmit, errors, register, agregarItem } = useContext(ShoppingListContext)
    return (
        <form onSubmit={handleSubmit((nombre) => agregarItem(nombre.articulo))} id="add-item-form" className="mb-4">
            <div className="flex items-center">
                <input type="text"{...register('articulo', { required: 'Escriba un nombre para el nuevo articulo' })} id="new-item" className="flex-grow p-2 border border-gray-300 rounded mr-2" placeholder="Nuevo artículo" />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Agregar</button>
            </div>
            {errors.articulo && <p className="text-red-800 mt-1">{errors.articulo.message}</p>}
        </form>
    )
}