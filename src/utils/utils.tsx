import React from "react"
import type { ReactNode } from "react"
import "./utils.css"

const LoadingSuspsense = () => {
    return (
        <div className="w-full h-screen bg-white flex items-center justify-center">
            <span className="loader"></span>
        </div>
    )
}

export const CustomSuspense = ({ children }: { children: ReactNode }) => {
    return <React.Suspense fallback={<LoadingSuspsense />}>{children}</React.Suspense>
}