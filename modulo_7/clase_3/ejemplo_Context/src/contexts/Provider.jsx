import { createContext, useState } from "react";

// Paso 1. Crear el context
const AppContext = createContext();

// Paso 2. Componte Provider
function Provider({children}) {

    // Paso 2.1 Especificar todo lo que necesitemos (states, memos, callbacks, etc...)
    const [value, setValue] = useState("");

    return (
        // Paso 2.2 Pasarlo como props al Provider
        <AppContext.Provider value={{ value, setValue }}>
            {children}
        </AppContext.Provider>
    )
}

export { Provider, AppContext }