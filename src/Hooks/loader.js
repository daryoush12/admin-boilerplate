import { useState, createContext, useContext } from 'react'

const loaderContext = createContext()

export default function useLoading() {
    const [isLoading, setIsLoading] = useState(true)

    return { isLoading, setIsLoading }
}

export function ProvideLoadingMask({ children }) {
    const loading = useLoading()
    return (
        <loaderContext.Provider value={loading}>
            {children}
        </loaderContext.Provider>
    )
}

export function useLoader() {
    return useContext(loaderContext)
}
