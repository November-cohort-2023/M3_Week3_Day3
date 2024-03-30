// Two parts to creating a context

//1. creating the context itself2

//2. creating the wrapper function to give access to all my application


// To create context we need to import the createContext() function

import { createContext, useState } from "react";

const ThemeContext = createContext()




// Wrapper function that will give all my components access to my contwxt

function ThemeProviderWrapper(props){

    const [theme,setTheme] = useState('light')

    return(
    <ThemeContext.Provider value = {{theme:theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export { ThemeContext, ThemeProviderWrapper}



/* 

1. create the context

2. create the wrapper function

3. wrap your entire application around the wrapper function

4. use the useContext hook to get your context and use it however you need in the component

*/