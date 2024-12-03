import { createContext, useContext, useState } from "react";

//createContext function : context allows you to share values between components
    const GiftContext = createContext()

//provider function
    export const GiftProvider =({children})=>{
        //single value
        // const [surprise, setSurprise] = useState("Banana")
        //object
        const [surprise, setSurprise] = useState({
            game:"Cricket",
            captain:"Dhoni"
            })

    //custom component
        return(
            <GiftContext.Provider value={{surprise, setSurprise}}>
                {children}
            </GiftContext.Provider>
        )

}
//custom hook
export const useData =() => useContext(GiftContext)