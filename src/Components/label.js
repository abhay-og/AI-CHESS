// return labels for axes of the board
import React from "react";

export function Label(props) {
    return <button className={"label"}> {props.value} </button>;
}