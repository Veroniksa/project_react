import React from "react";
import { useState, useRef, useCallback } from "react";
import { FormView } from "./FormView";

export const FormContainer = ({ onSubmit }) => {
  const inputRef = useRef(null);

  const [messageAdd, setMessageAdd] = useState("");

  const handelChange = useCallback((event) => {
    setMessageAdd(event.target.value);
  }, []);

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit(messageAdd);

    inputRef.current.focus();
  };

  return (
    <FormView
      onChange={handelSubmit}
      inputRf={inputRef}
      text={messageAdd.text}
      onClickChange={handelChange}
    />
  );
};
