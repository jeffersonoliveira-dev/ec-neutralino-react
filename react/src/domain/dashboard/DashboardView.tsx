import React, { useEffect } from "react";
import { Div } from "./Dashboard.styled";
import { fetch } from "./DashboardMate"


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

