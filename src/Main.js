import React, {useEffect, useState} from 'react'
import DonutsPage from "./DonutsPage"
import Header from './header'
import { useRouteMatch } from 'react-router-dom'

export const Main = () => {
    const match = useRouteMatch("/donuts/:donut_type")
    const donut_type = match != null ? match.params.donut_type : ''

    const [donuts, setDonuts] = useState(null)
    
    useEffect(() => {
        fetch(`https://6nk3mepzv7.execute-api.us-east-1.amazonaws.com/dev/donuts/${donut_type}`)
        .then(response => response.json())
        .then(data => setDonuts({data}));
    }, [])

    return(
        <>
        <Header />
        {donuts && <DonutsPage donuts={donuts.data} />}
        </>
    )
}

export default Main
