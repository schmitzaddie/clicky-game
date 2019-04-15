import React from "react";
import Navbar from "react-bootstrap/Navbar";

function CustomNavbar(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Clicky Game</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-center">
                    <Navbar.Text>
                        Score: {props.score} | High Score: {props.highScore}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default CustomNavbar;