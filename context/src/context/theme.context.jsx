import {createContext} from 'react'

//createContext creates a new context

// Creates a new context in the variable themeContext
const ThemeContext = createContext()

function ThemeProviderWrapper(props) {
    
 
    return (
     
      <ThemeContext.Provider value={"Diogo"}>
          {props.children}
      </ThemeContext.Provider>
    )
  }
  

export {ThemeContext, ThemeProviderWrapper}