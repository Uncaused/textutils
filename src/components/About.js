import React from "react";

export default function About(props) {
    let myStyle;
    if (props.mode === "dark") {
        myStyle = {
            color: "white",
            backgroundColor: "grey",
            border: '1px solid white'
        }
    } else {
        myStyle = {
            color: "black",
            backgroundColor: "white"
        }
    }


    return (
        <>
            <div className="container" style={myStyle}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion my-1" id="accordionExample" style={myStyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                                style={myStyle}
                            >
                                About TextUtils
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                            style={myStyle}
                        >
                            <div className="accordion-body" style={myStyle}>
                                TextUtils is a text based utility to modify your text in the way you want!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}