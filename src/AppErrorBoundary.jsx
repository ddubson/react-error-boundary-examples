import {PureComponent} from "react";
import React from "react";

export class AppErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState( { hasError: true, error});
        console.log("Caught an error at the boundary: ", errorInfo);
    }

    render() {
        if(this.state.hasError) {
            return <div>Error: {this.state.error.message  }</div>
        }

        return this.props.children;
    }
}