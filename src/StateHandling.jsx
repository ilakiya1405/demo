/*import React from "react";

const StateHandling = () => {

    //named function
    //declaration
    function adding() {

    }
    //calling the function
    adding();
    return (
        <div>StateHandling</div>
    )
}

import React from "react";

const StateHandling = () => {

    //annoymous function
    //declaration
    const adding= function() {

    }

    }
    //calling the function
    adding();
    return (
        <div>StateHandling</div>
    )
}

import React from "react"
import Img from './imge.png'

const StateHandling = () => {
    function message() {
        open('https://images.app.goo.gl/E53vD8LjXFUJe3aF7')
        
    }
    return (
        <div>
           <span onClick={message}>
               <img src={Img}/>
           </span>
        </div>
    )
}

export default StateHandling*/

import React, { useState } from "react"
//import './StateHandling.css'

const StateHandling = () => {
    const [like,setLike]=useState("HII") 
    
    function para()
    {
        setLike("This is Ilakiya Thangavelu")
    }
    function change()
    {
        setName("Welcome")
    }
    function old()
    {
        setName("This is Ilakiya Thangvelu")
    }
    
    function increment() {
        setLike(like+1)

    }
    function decrement() {
        setLike(like -1)

    }
    return (
        <div onMouseEnter={para}>{like}
            </div>
    )
}

export default StateHandling;