import React from 'react';

const styleHeaderDiv = { backgroundColor: "grey", padding: "20px" }
const styleHeader = {  textDecorationLine: 'underline'}

export default class Header extends React.Component<any, any> {
    render() {
        
      return (
      <div style= {styleHeaderDiv}>
          <h1 style= {styleHeader}>{this.props.content}</h1>
      </div>
      )
    }
  }