"use client"
import React, { createContext, ReactNode, SetStateAction, useState } from "react"

interface ContextType {
    category:string | null,
    tags:string | null,
    size:string | null,
    maxPrice:number | string | null,
    minPrice:number | string | null,
    setCategory:React.Dispatch<SetStateAction<string | null>>,
    setTags:React.Dispatch<SetStateAction<string | null>>,
    setSize:React.Dispatch<SetStateAction<string | null>>,
    setMaxPrice:React.Dispatch<SetStateAction<number | string | null>>,
    setMinPrice:React.Dispatch<SetStateAction<number | string | null>>,
}

export const Context = createContext<ContextType>({
    category:null,
    setCategory:() => "",
    tags:null,
    setTags:() => "",
    size:null,
    setSize:() => "",
    maxPrice:null,
    setMaxPrice:() => "",
    minPrice:null,
    setMinPrice:() => "",
})

export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    const [category, setCategory] = useState<string | null>(null)
    const [tags, setTags] = useState<string | null>(null)
    const [size, setSize] = useState<string | null>(null)
    const [maxPrice, setMaxPrice] = useState<number | string | null>(null)
    const [minPrice, setMinPrice] = useState<number | string | null>(null)

    return <Context.Provider value={{category, setCategory, tags, setTags, size, setSize, maxPrice, setMaxPrice, minPrice, setMinPrice}}>{children}</Context.Provider>
}