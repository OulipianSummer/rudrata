import React, { Component } from "react";
import { Container } from "react-bootstrap";

class HowTo extends Component {
  render() {
    return (
      <>
        <Container
          id="how-to"
          data-testid='how-to'
          style={{ fontSize: "1.5em" }}
          className={
            this.props.altBackground === true
              ? "bg-success text-light bg-transition p-2"
              : " bg-transition p-2"
          }
        >
          <strong>How To Play</strong>
          <br />
          <p>
            <strong>Click on any square</strong> to place a knight and start the
            game. Your goal is to <strong>visit each square</strong> on the
            chessboard <strong>exactly once</strong>.
          </p>
          <p>
            Click on any square to move the knight to it. As in chess, the
            knight may only move in an "L" shape:{" "}
            <strong>two squares vertically and one horizontally</strong>, or{" "}
            <strong>two squares horizontally and one square vertically</strong>.
          </p>

          <p>If you are able to tour the entire chess board, <strong>something mysterious might happen!</strong></p>
        </Container>
      </>
    );
  }
}

export default HowTo;
