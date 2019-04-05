import React, {PureComponent} from "react";
import {AppErrorBoundary} from "./AppErrorBoundary";
import {SimpleErrorThrower} from "./SimpleErrorThrower";

export class AppRoot extends PureComponent {
    render() {
        return (
            <AppErrorBoundary>
                <SimpleErrorThrower />
            </AppErrorBoundary>
        )
    }
}