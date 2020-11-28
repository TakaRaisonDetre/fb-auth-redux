import React from 'react'

import Button from '@material-ui/core/Button';


 function CustomButton({ children, ...otherProps}) {
    return (
      <Button  type="button"  {...otherProps}> {children} </Button>
    )
}
export default CustomButton