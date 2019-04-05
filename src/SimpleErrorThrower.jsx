import {PureComponent} from "react";
import React from "react";

export class SimpleErrorThrower extends PureComponent {
    render() {
        return (
            <div>
                <div>Hello World!</div>
                {throw new Error("this is a child error.")}
            </div>
        );
    }
}