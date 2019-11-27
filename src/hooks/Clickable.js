import React, { useState } from 'react';

export default function Clickable(initialstate) {

    const [data, setData] = useState(initialstate)

    const clickOnThing = (event) => {
        const { name , value } = event.target

        setData({[name]:value})

    }
    console.log(data)
    
    return [data, clickOnThing]
}