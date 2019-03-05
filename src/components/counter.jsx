// importing the component class from react library
import React, { Component } from 'react'; 

// create another instance of component class called counter
class Counter extends Component {
 


    styles = {
        fontSize: 50,
        fontWeight: 'bold'
    };

    render() { 

        return (
        <React.Fragment>
            
            <span style= { this.styles } className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
            <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
        </React.Fragment>
        );
    }

    handleIncrement= product => {
        console.log(product);
       this.setState({ value: this.state.value+ 1 });
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;