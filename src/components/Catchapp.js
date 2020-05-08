import React from 'react'

class Catchapp extends React.Component{


  componentDidCatch(info, errinfo){
    console.log(info)
    console.log(errinfo)
  }

  render(){
    return this.props.children
  }
}

export default Catchapp