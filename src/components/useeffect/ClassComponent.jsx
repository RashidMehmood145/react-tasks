import React, { Component } from 'react';
class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            message:"This is class component",
            time:new Date().toString()
         }
    }

componentDidMount(){
    console.log("i am from component did mount");
    this.interval = setInterval(this.showDate, 1000);
}
componentDidUpdate(){
    console.log("Hello i am from component did update")
}
componentWillUnmount(){
    console.log("this from component will unMount");
    clearInterval(this.interval);
}



showDate =()=>{
    this.setState({time: new Date().toString()})
  
}

    render() { 
        return ( 
            <div>
                <div>{this.state.message}</div>
                <div>{this.state.time}</div>

            </div>
         );
    }
}
 
export default ClassComponent;