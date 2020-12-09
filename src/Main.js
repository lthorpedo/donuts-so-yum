import React, {useEffect, useState} from 'react';
import DonutsPage from "./DonutsPage"
export const Main = () => {

    const [donuts, setDonuts] = useState(null)
    
    useEffect(() => {
        fetch('https://6nk3mepzv7.execute-api.us-east-1.amazonaws.com/dev/donuts')
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

export default Main
