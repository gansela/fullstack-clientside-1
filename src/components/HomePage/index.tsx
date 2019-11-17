import React from 'react';
import { connect } from "react-redux"
import { disableRidirect } from "../../redux/actions"
import { saveToLocalStorage } from "../../utils/localStorage"




class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { helloName: "Guest" }
  }


  componentDidMount() {
    const { redirect, isRedirect } = this.props
    if (redirect) {
      isRedirect()
    }
  }


  render() {
    const { helloName } = this.state
    const { session, user } = this.props
    if (session && (helloName === "Guest")) {
      this.setState({ helloName: user.fullName})
    }
    return (
      <div style={{ height: "100vh" }}>
        <h3 className="jumbotron"> hello {helloName}</h3>
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
    isRedirect: () => {
      dispatch(disableRidirect())
    }
  }
}

export default connect(mapToProps, mapDispatch)(HomePage)