import { Component } from "react";

class ClassComponent extends Component {
    render(){
        return(
            <div className="secondBox2">
            <div>yee hai class Component</div>
             <div>
                <h3>This is created using Class Component</h3>
                <div>This is done using external CSS</div>
                <div style={{color:'violet'}}>This is done using inline CSS</div>
        
        
                </div> 
                </div>
        )
    }
}
export default ClassComponent;

// import React, { Component } from 'react'

// export default class ClassComponent extends Component {
//   render() {
//     return (
//       <div>ClassComponent</div>
//     )
//   }
// }
