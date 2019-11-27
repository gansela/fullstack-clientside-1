import React from 'react';
import { connect } from "react-redux"
import { disableRidirect, getFlightsAction } from "../../redux/actions"
import { saveToLocalStorage } from "../../utils/localStorage"
import FlightCard from "../FlightCard"




class HomePage extends React.Component<any, any> {
  constructor(props: any) {
    super(props)

    this.state = { helloName: "Guest", flightData: [], reload: false }
  }


  async componentDidMount() {
    const { redirect, isRedirect, session, getData } = this.props
    console.log(this.props)
    if (redirect) {
      isRedirect()
      if (session) {
        await getData(session)
        this.setState({ reload: true })
      }
    }
  }


  render() {
    const { helloName, reload, flightData } = this.state
    const { session, user, flights } = this.props
    if (reload) {
      this.setState({ flightData: flights, reload: false })
    }
    if (session && (helloName === "Guest")) {
      this.setState({ helloName: user.fullName })
    }
    return (
      <div style={{ height: "100vh" }}>
        <h3 className="jumbotron"> hello {helloName}</h3>
        {flights.map((card: any) => <FlightCard card={card} />)}
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
    },
    getData: (key: string) => {
      dispatch(getFlightsAction({}, key))
    }
  }
}

export default connect(mapToProps, mapDispatch)(HomePage)