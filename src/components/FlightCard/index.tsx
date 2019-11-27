import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Clickable from "../../hooks/Clickable"





export default class FlightCard extends React.Component<any, any>{
    constructor(props: any) {
        super(props)

        this.state = { click: "" }
    }

    render() {
        const width = { width: "15rem", display: "inline-block", verticalAlign: "top", border: "solid black 5 px" }
        const { from, to, departure, arrival, fromFlag, toFlag } = this.props.card
        return (
            <div className="card" style={width}>
                <div className="card-body">
                    <h6 className="card-title"> from: {from} </h6>
                    <img src={fromFlag} style={{ "width": "8rem" }} />
                    <p className="card-text">departure {departure}</p>
                    <h6 className="card-title"> destination: {to}</h6>
                    <img src={toFlag} style={{ "width": "8rem" }} />
                    <p className="card-text">arrival: {arrival}</p>
                </div>
            </div >
        )
    }
}