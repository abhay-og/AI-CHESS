// helper function to help generate arrays of pieces captured by a player
import React from "react";

export function Collected(props) {
    return <button className={"collected"}> {props.value.icon} </button>;
}