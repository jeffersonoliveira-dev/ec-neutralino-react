import React, { useEffect } from "react";
import { Div } from "./dashboard.styled";
import { fetch } from "./dashboardMate"


export const Dashboard =  () => {

    const handleFetch = async () => {
        /// brincadeira
        const result = await fetch()
    }

    useEffect(() => {
        handleFetch()
    }, [])


    return <Div/>
}

