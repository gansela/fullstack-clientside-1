import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import { saveToLocalStorage } from "../../utils/localStorage"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import store from "../../redux/store"

export default function TestCpmponent() {
    const initailState = { email: "", password: null }
    const initailClicks = { numberOfClicks: 0 }
    const [data1, setData] = useState(initailState)
    const [clicksData, setCounter] = useState(initailClicks)

    const handleOnChange = (event) => {
        const { target } = event;
        setData({ ...data1, [target.name]: target.value })
    }

    const onSave = () => {
        const counter = clicksData.numberOfClicks + 1
        console.log("this is data")
        console.log(clicksData)
        setCounter({ numberOfClicks: counter })
    }

    const localStorageCheck = (event) => {
        if (event.target.checked) {
            saveToLocalStorage("test", data1)
        }
    }
    console.log(data1)
    return (
        <div style={{ position: "relative", margin: "50px 150px", left: "0%" }}>

            <h1 >Log In</h1>

            <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="email" label="email" type="email" id="email" onChange={handleOnChange} />
            <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" onChange={handleOnChange} />
            <Button variant="contained" color="primary" size="large" style={{ margin: "15px", verticalAlign: "top" }} onClick={() => onSave()}>sign Up</Button>
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" onClick={(event) => localStorageCheck(event)} />}
                label="Remember me"
            />
        </div>
    )
}