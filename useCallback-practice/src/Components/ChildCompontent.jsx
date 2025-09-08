import React from 'react'

const ChildCompontent =React.memo(
     (props) => {
  return (
    <div>
        <button onClick={props.handleClick}>
            {props.buttonName}
        </button>
    </div>
  )
}

)
export default ChildCompontent