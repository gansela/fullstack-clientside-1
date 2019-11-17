import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { disableRidirect, logUserAction } from "../../redux/actions"
import { connect } from "react-redux"
import { saveToLocalStorage } from "../../utils/localStorage"



class LogIn extends React.Component<any, any>{

    constructor(props: any) {
        super(props)

        this.state = { email: "", password: "" }
    }


    handleOnChange = (event: any) => {
        const { target } = event;
        this.setState({ [target.name]: target.value })
    }


    render() {
        const { onSave, redirect, isRedirect, session } = this.props
        console.log(session)
        if (redirect && (!session)) {
            isRedirect()
            console.log("here")
            return (<div>loading</div>)
        }
        if (redirect && session) this.props.history.push("/")
        return (
            <div style={{ position: "relative", margin: "50px 150px", left: "0%" }}>

                <h1 >Log In</h1>

                <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="email" label="email" type="email" id="email" onChange={this.handleOnChange} />
                <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" onChange={this.handleOnChange} />
                <Button variant="contained" color="primary" size="large" style={{ margin: "15px", verticalAlign: "top" }} onClick={() => onSave(this.state)}>sign Up</Button>
            </div>
        )

    }
}

const mapToProps = (state: any) => {
    saveToLocalStorage("appState", state)
    return state
}

const mapDispatch = (dispatch: any) => {
    return {
        onSave: (userObj: any) => {
            dispatch(logUserAction(userObj))
        },
        isRedirect: () => {
            dispatch(disableRidirect())
        },
    }
}

export default connect(mapToProps, mapDispatch)(LogIn)