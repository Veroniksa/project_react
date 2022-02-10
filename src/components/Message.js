import React  from "react";

export const Message = (props) => {
    console.log(props);

    return <h2>HELLO, {props.name} {props.age} {props.text} </h2>;
}
