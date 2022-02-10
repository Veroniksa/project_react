import React, { useEffect, useState } from "react";

export const Counter =() => {
/* const countState = useState(0);
const count = countState[0];
const setCount = countState[1]; */
const[count, setCount] = useState(0);

const[string, setString] = useState("");

useEffect(() => {
    console.log("like did mount");
}, []);

useEffect(() => {
    console.log("like did mount + like did update count");
}, [count]);

useEffect(() => {
    return () => {
        console.log("will unmount");
    };
}, []); 

    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>setCount(count +1)}>CLICK</button>
        </div>
    );
};

/* export class Counter extends React.Component {
constructor(props) {
    super(props);
    console.log("constructor")
    this.state = {
        count: 0,
    };
}
componentDidMount(){
    console.log("component did mount");
}
componentDidUpdate(){
    console.log("component did update");
}
componentWillUnmount(){
    console.log("component did unmount");
    clearTimeout(this.timeout)
}

    updateCount = () => {
        this.timeout = setTimeout(()=>this.setState({
            count: this.state.count + 1,
        }), 4000);
    }

    render(){
        console.log("render");
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.updateCount}>CLICK</button>
            </div>
        )
    }
}
 */