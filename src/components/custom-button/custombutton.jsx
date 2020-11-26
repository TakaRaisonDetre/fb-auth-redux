import React from 'react'




 function CustomButton({ children, ...otherProps}) {
    return (
      <button {...otherProps}> {children} </button>
    )
}
export default CustomButton