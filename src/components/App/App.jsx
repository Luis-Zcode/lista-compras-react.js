import { ShoppingListProvider } from "../../ShoppingListProvider/ShoppingListProvider"
import { AddItemForm } from "../AddItemForm/AddItemForm"
import { ShoppingList } from "../ShoppingList/ShoppingList"

function App() {

  return (
    <ShoppingListProvider>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Lista de Artículos</h1>
          <AddItemForm />
          <ShoppingList /> 
        </div>
      </div>


    </ShoppingListProvider>
  )
}

export default App
