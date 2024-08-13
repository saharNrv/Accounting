"use client"
import useStorage from "../hooks/useStoreg"
import fa from "../assets/locals/fa.json"
import en from "../assets/locals/en.json"
import { createContext } from "react";


export const defaultCulture = {
    rtl: true,
    local: 'fa',
    displayName: 'فارسی'
}

export const CultureProviderContext = createContext({
    culture: defaultCulture,
    setCulure: () => null
})

export function CultureProvider(props) {
    const [culture, setCulture] = useStorage('culture', defaultCulture)

    return (
        <CultureProviderContext.Provider value={{ culture, setCulture }}>
            {props.children}
        </CultureProviderContext.Provider>
    )
}


export const storedLocalizationState = () => {
    try {
        const data = localStorage.getItem('culture')
        return data ? JSON.parse(data) : defaultCulture

    } catch (err) {
        return defaultCulture

    }
}


const dictionaryList = {
    fa,
    en
}


export const Translate = (key) => {
    const state = storedLocalizationState()
    const dict = JSON.parse(JSON.stringify(dictionaryList[state.local] ?? {}))

    if (dict) {
        return dict[key] || key
    }

    return key
}