import { useContext, createContext, useState } from "react"

const AppContext = createContext()

// eslint-disable-next-line react/prop-types
export function AppContextProvider({ children }) {
  const [list, setList] = useState([
    { id: 0, title: "Item 1", active: true },
    { id: 1, title: "Item 2", active: true },
    { id: 2, title: "Item 3", active: true },
    { id: 3, title: "Item 4", active: true },
    { id: 4, title: "Item 5", active: true },
    { id: 5, title: "Item 6", active: true },
    { id: 6, title: "Item 7", active: true },
    { id: 7, title: "Item 8", active: true },
    { id: 8, title: "Item 9", active: true },
    { id: 9, title: "Item 10", active: true },
  ])

  return (
    <>
      <AppContext.Provider
        value={{
          list,
          setList,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  )
}

export const useAppContext = () => useContext(AppContext)
