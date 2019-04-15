import React from "react";

function MyJumbotron(props) {
    return (
        <div className="jumbotron jumbotron-fluid text-center text-black bg-black">
            <div className="container">
                <img src="https://data.whicdn.com/images/101741280/large.png"></img>
                <p className="lead">Click on a Friend image below to start earing points! Clicking on a Friend more than once will restart the game. Good luck!</p>
            </div>
        </div>
    )
}

export default MyJumbotron;