import {useRef} from 'react'

const FocusInput = () => {
    let focusRef=useRef()

    const handleClick=()=>{
        focusRef.current.focus();
    }
  return (
    <div>
        <input type="text" ref={focusRef} />
        <button onClick={handleClick}>Click to Focus</button>
    </div>
  )
}

export default FocusInput