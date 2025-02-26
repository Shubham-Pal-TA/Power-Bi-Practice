import * as React from "react";
export interface State {
    textLabel: string;
    textValue: string;
    size: number;
    background?: string;
    borderWidth?: number;
}
export declare const initialState: State;
export declare class ReactCircleCard extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default ReactCircleCard;
