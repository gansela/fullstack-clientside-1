import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { saveUserAction, stopSession } from "../../redux/actions"
import { connect } from "react-redux"
import { saveToLocalStorage } from "../../utils/localStorage"



class SignIn extends React.Component<any, any>{

  constructor(props: any) {
    super(props)

    this.state = { email: "", password: "", fullName: "", age: 0 }
  }


  handleOnChange = (event: any) => {
    const { target } = event;
    this.setState({ [target.name]: target.value })
  }

  componentDidUpdate() {
    const { redirect, userLoading } = this.props
    if (redirect) this.props.history.push("/login")
  }

  render() {
    const { onSave, session, signOut } = this.props
    if (session) {
      return (
        <div>
          <h1>You're allready signed in</h1>
          <Button variant="contained" color="primary" size="large" style={{ margin: "15px", verticalAlign: "top" }} onClick={() => signOut()}>sign out</Button>
        </div>
      )
    }
    return (
      <div style={{ position: "relative", margin: "50px 150px", left: "0%" }}>

        <h1 >Sign Up</h1>

        <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="email" label="email" type="email" id="email" onChange={this.handleOnChange} />
        <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="password" label="Password" type="password" id="password" onChange={this.handleOnChange} />
        <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="age" label="age" type="age" id="age" onChange={this.handleOnChange} />
        <TextField aria-label="minimum height" variant="outlined" margin="normal" fullWidth name="fullName" label="full name" type="fullName" id="fullName" onChange={this.handleOnChange} />
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
      dispatch(saveUserAction(userObj))
    },
    signOut: () =>{
      dispatch(stopSession())
    },
  }
}

export default connect(mapToProps, mapDispatch)(SignIn)