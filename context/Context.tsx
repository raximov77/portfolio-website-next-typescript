"use client"
import React, { createContext, ReactNode, SetStateAction, useState } from "react"

export interface ContextType {
    category:string | null,
    tags:string | null,
    size:string | null,
    maxPrice:number | string | null,
    minPrice:number | string | null,
    token:string | null | any,
    setCategory:React.Dispatch<SetStateAction<string | null>>,
    setTags:React.Dispatch<SetStateAction<string | null>>,
    setSize:React.Dispatch<SetStateAction<string | null>>,
    setMaxPrice:React.Dispatch<SetStateAction<number | string | null>>,
    setMinPrice:React.Dispatch<SetStateAction<number | string | null>>,
    setToken:React.Dispatch<SetStateAction<any>>,
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
    token:null,
    setToken:() => "",
})

export const ContextProvider:React.FC<{children:ReactNode}> = ({children}) => {
    let data: string | null = null;
    if(typeof window !== "undefined"){
        data = localStorage.getItem("user")
    }

    const [category, setCategory] = useState<string | null>(null)
    const [tags, setTags] = useState<string | null>(null)
    const [size, setSize] = useState<string | null>(null)
    const [maxPrice, setMaxPrice] = useState<number | string | null>(null)
    const [minPrice, setMinPrice] = useState<number | string | null>(null)
    const [token, setToken] = useState<any>(data ? JSON.parse(data) : null)

    if(typeof window !== "undefined"){
        localStorage.setItem("user", JSON.stringify(token))
    }
    return <Context.Provider value={{category, setCategory, tags, setTags, size, setSize, maxPrice, setMaxPrice, minPrice, setMinPrice, token, setToken}}>{children}</Context.Provider>
}