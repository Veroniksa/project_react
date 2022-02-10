import React from 'react';
import { useState, useRef, useCallback } from 'react';
import { FormControl } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';


export const Form = ({onSubmit}) => {

  const inputRef = useRef(null);

  const[messageAdd, setMessageAdd] = useState("");

  const handelChange = useCallback((event) => {
    setMessageAdd(event.target.value);
  },[]);

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(messageAdd);

    inputRef.current.focus();
  };

  return (
    <FormControl 
    className="MessageListForm" 
    onSubmit={handelSubmit}>
      <TextField autoFocus 
      label="Message"
      inputRef={inputRef} 
      className="MessageListInput" 
      value={messageAdd.text}
      onChange={handelChange}/>
      <Button 
      type="submit"
      variant="outlined" 
      size="small" 
      onClick={handelSubmit} 
      className="MessageListBTN"
      >ADD</Button>
    </FormControl>
  )
}