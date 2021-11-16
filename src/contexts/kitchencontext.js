import React, {useState, useContext, createContext} from 'react'
import { getAllKitchens } from '../api/crud'

const KitchenContext = createContext();


const KitchenProvider = props => {
    const [kitchens, updateKitchens] = useState([])

    const loadData = async () => {
        let all_kitchens = await getAllKitchens()
        console.log("all_kitchens", all_kitchens)
        updateKitchens(all_kitchens ? all_kitchens : [])
    }


    let data = {
                kitchens,
                loadData,
                updateKitchens
            }


    return <KitchenContext.Provider value={data} {...props} />
}

const useKitchen = () => {
    const context = useContext(KitchenContext)
    if (context === undefined ){
        throw new Error(`useKitchen must be used within KitchenProvider`)
    }
    return context
}

export { KitchenProvider, useKitchen }
