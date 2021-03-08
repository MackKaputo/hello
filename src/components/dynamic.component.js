import React, { Component } from "react"

class Dynamic extends Component {
    constructor(props){
        super(props)
        
        this.getLength = this.getLength.bind(this)
        this.state = {
            names: ['mack','elie']
        }
    }

    getData(){
        fetch("https://randomuser.me/api/?results=2")
          .then(response => {
              console.log(response.data)
          })
          .catch(error => console.log(error))
    }                                                                                                               

    getLength() {
        let length = this.state.names.length
        return length

    }

    render(){
        return(
            <div> 
               <div> 
                   <h3>Length: { this.getLength() } </h3>
                   <button onClick={ () => this.getData() } >Click here</button>
                </div>

            </div>
    
        )}

}

export default Dynamic