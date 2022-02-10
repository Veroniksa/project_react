import React from 'react';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


export const FormView = ({onChange, inputRf, text, onClickChange}) => {

  return (
    <FormControl 
    className="MessageListForm" 
    onSubmit={onChange}>
      <TextField autoFocus 
      label="Message"
      inputRef={inputRf} 
      className="MessageListInput" 
      value={text}
      onChange={onClickChange}/>
      <Button 
      type="submit"
      variant="outlined" 
      size="small" 
      onClick={onChange} 
      className="MessageListBTN"
      >ADD</Button>
    </FormControl>
  )
}