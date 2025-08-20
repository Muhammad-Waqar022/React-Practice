import React from 'react'

const Notification = (props) => {
    const getStyle=()=>{
        switch(props.type){
            case "success":
        return { backgroundColor: "lightgreen", color: "green", padding: "10px", borderRadius: "5px" };
      case "error":
        return { backgroundColor: "lightcoral", color: "darkred", padding: "10px", borderRadius: "5px" };
      case "warning":
        return { backgroundColor: "yellow", color: "black", padding: "10px", borderRadius: "5px" };
      case "info":
        return { backgroundColor: "lightblue", color: "navy", padding: "10px", borderRadius: "5px" };
      default:
        return { backgroundColor: "white", color: "black", padding: "10px", borderRadius: "5px" };
    }
    };
    
  return (
    <div>
        <h2 style={getStyle()}>{props.message}</h2>
    </div>
  )
}

export default Notification