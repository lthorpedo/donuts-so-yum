import React, {useEffect, useState} from 'react';
import DonutsPage from "./DonutsPage"
import { useRouteMatch } from 'react-router-dom'


export const SomeDonuts = () => {
    const match = useRouteMatch("/donuts/:donut_type")
    const donut_type = match.params.donut_type

    const [donuts, setDonuts] = useState(null)
    
    useEffect(() => {
        fetch(`https://6nk3mepzv7.execute-api.us-east-1.amazonaws.com/dev/somedonuts/${donut_type}`)
        .then(response => response.json())
        .then(data => setDonuts({data}));
    }, [])

    return(
        <>
        <h1 style={{textAlign:"center"}}>Donuts</h1>
        {donuts && <DonutsPage donuts={donuts.data} />}
        </>
    )
}

export default SomeDonuts