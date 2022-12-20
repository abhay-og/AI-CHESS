// return a square with the chess piece
import React from "react";

export function Square(props) {
    if (props.value !== null) {
        return (
            <button
                className={"square " + props.color + props.corner + props.cursor}
                onClick={props.onClick}
            >
                {props.value.icon}
            </button>
        );
    } else {
        return (
            <button
                className={"square " + props.color + props.corner + props.cursor}
                onClick={props.onClick}
            >
                {" "}
            </button>
        );
    }
}