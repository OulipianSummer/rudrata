import React, { Component, PureComponent } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import HowTo from "./components/HowTo/HowTo.js";
import Score from "./components/Score/Socre.js";
import CreatedBy from "./components/CreatedBy/CreatedBy.js";
import Win from "./components/Win/Win.js";

import "./App.css";

// React-bootstrap import
import {
  Button,
  Row,
  Col,
  Container,
  ButtonToolbar,
  Dropdown,
} from "react-bootstrap";

// Custom Chess Diagram Import
import Chessdiagram from "./components/rudrata-chess-diagram/chessdiagram";

// Import react-measure
import Measure from "react-measure";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPiggyBank } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 8,
    };

    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder(event) {
    const order = parseInt(event.target.attributes["data-order"].value);

    return this.setState({ order: order });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col col={12}>
            <ChessBoard
              handleOrder={this.handleOrder}
              order={this.state.order}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

class ChessBoard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      boardWidth: parseInt(props.order),
      boardHeight: parseInt(props.order),
      diagramDimensions: { width: -1 },
      seqNumber: 0,
      tourSeq: [],
      helpAltBackground: false,
      currentScore: 0,
    };

    this.wrapper = React.createRef();

    this.handleClear = this.handleClear.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleHowTo = this.handleHowTo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.order !== prevProps.order) {
      return this.setState({
        boardHeight: this.props.order,
        boardWidth: this.props.order,
      });
    }
  }

  handleMove(move) {
    const { tourSeq } = this.state;

    if (tourSeq.includes(move) === false) {
      if (this.state.seqNumber === 0) {
        return this.placeKnight(move);
      } else {
        const prevMove = tourSeq.slice().pop();

        if (this.checkLegalMove(move, prevMove) === true) {
          return this.placeKnight(move);
        } else {
          return null;
        }
      }
    }
  }

  handleHowTo() {
    const howto = document.querySelector("#how-to");
    howto.scrollIntoView();

    this.setState((state) => ({
      helpAltBackground: !state.helpAltBackground,
    }));
    return setTimeout(() => {
      this.setState((state) => ({
        helpAltBackground: !state.helpAltBackground,
      }));
    }, 5000);
  }

  checkLegalMove(move, prevMove) {
    const legalMoves = [
      [2, 1],
      [2, -1],
      [-2, 1],
      [-2, -1],
      [1, 2],
      [1, -2],
      [-1, 2],
      [-1, -2],
    ];
    const ranks = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

    const re = /(\d{1,})/;

    const move_x = ranks.indexOf(move[0]) + 1;
    const move_y = parseInt(move.split(re)[1]);
    const prevMove_x = ranks.indexOf(prevMove[0]) + 1;
    const prevMove_y = parseInt(prevMove.split(re)[1]);
    let isLegal = false;

    for (let i in legalMoves) {
      if (
        prevMove_x + legalMoves[i][0] === move_x &&
        prevMove_y + legalMoves[i][1] === move_y
      ) {
        isLegal = true;

        return isLegal;
      } else {
        continue;
      }
    }

    return isLegal;
  }

  placeKnight(move) {
    let sequence = this.state.tourSeq.slice();
    sequence.push(move);
    return this.setState((state) => ({
      tourSeq: sequence,
      seqNumber: (state.seqNumber += 1),
      currentScore: (state.currentScore += 1),
    }));
  }

  handleClear() {
    return this.setState({ tourSeq: [], seqNumber: 0, currentScore: 0 });
  }

  handleUpdate(event) {
    this.handleClear();
    this.props.handleOrder(event);
  }

  render() {
    const {
      boardWidth,
      boardHeight,
      diagramDimensions,
      seqNumber,
      tourSeq,
      currentScore,
    } = this.state;

    let tourSquares = tourSeq; //sequence of squares visited in tour (as array)
    let lastSquareName = tourSquares[seqNumber - 1];

    let positionDescriptor = tourSquares.map((sq) => "-@" + sq); // blanked squares at each square of sequence
    if (lastSquareName) positionDescriptor.push("N@" + lastSquareName); // knight on last square of sequence

    return (
      <React.Fragment>
        {/* A win condition that displays a fun visual effect */}
        {seqNumber === this.props.order * this.props.order && <Win />}

        {/* The website header */}
        <header id="rudrata-header">
          <Container fluid className="d-flex justify-content-around mb-5">
            <Row>
              <Col className="mr-5">
                <h1 className="display-2">Rudrata</h1>
                <p>Visit each square on the chess board!</p>
                <button
                  className="font-weight-bold btn-link btn"
                  onClick={this.handleHowTo}
                >
                  How To Play <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Col>

              <Col>
                <Row>
                  <Score currentScore={currentScore} order={this.props.order} />
                </Row>

                <ButtonToolbar className="d-flex w-75 flex-column justify-content-around ml-3">
                  <Row>
                    <Button
                      size="lg"
                      className="mt-2"
                      variant="success"
                      onClick={this.handleClear}
                    >
                      New Game
                    </Button>
                  </Row>

                  <Row>
                    <Dropdown className="mt-2 w-100">
                      <Dropdown.Toggle size="lg" variant="success">
                        Chess Board Size
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          data-order={5}
                          className="text-success difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          5x5 (easy)
                        </Dropdown.Item>
                        <Dropdown.Item
                          data-order={6}
                          className="text-success difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          6x6{" "}
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          data-order={7}
                          className="text-warning difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          7x7 (intermediate)
                        </Dropdown.Item>
                        <Dropdown.Item
                          data-order={8}
                          className="text-warning difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          8x8 (default)
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item
                          data-order={9}
                          className="text-danger difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          9x9 (difficult)
                        </Dropdown.Item>
                        <Dropdown.Item
                          data-order={10}
                          className="text-danger difficulty-dd"
                          onClick={(event) => {
                            this.handleUpdate(event);
                          }}
                        >
                          10x10{" "}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Row>
                </ButtonToolbar>
              </Col>
            </Row>
          </Container>
        </header>

        <section id="chessboard">
          <Measure
            bounds
            onResize={(contentRect) => {
              this.setState({ diagramDimensions: contentRect.bounds });
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef} className="d-flex justify-content-center">
                <Chessdiagram
                  allowMoves={false}
                  squareSize={
                    measureRef
                      ? Math.min(80, (1 * diagramDimensions.width) / boardWidth)
                      : 45
                  }
                  files={boardHeight}
                  ranks={boardWidth}
                  pieces={positionDescriptor}
                  onSelectSquare={(name) => this.handleMove(name)}
                  lightSquareColor="#F0EBD8"
                  darkSquareColor="#A38D7B"
                />
              </div>
            )}
          </Measure>
        </section>
        <br />

        <section id="how-to-section">
          <HowTo altBackground={this.state.helpAltBackground} />
        </section>
        <hr className="w-50" />

        <section id="created-by-section">
          <CreatedBy />
        </section>

        <section
          id="donate-section"
          className="d-flex flex-row justify-content-center"
        >
          <a
            className="btn btn-primary btn-lg"
            href="https://www.paypal.com/donate?hosted_button_id=3972H6RJEYDVW"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faPiggyBank} />
            Donate
          </a>
        </section>
        <hr className="w-50" />
        <section id="tos" className="d-flex flex-row justify-content-center">
          <p>
            Rudrata does not store or process any personal data, period. It
            simply does not have the capability to track you or store your
            personal data. But, for important legal reasons, this website still
            needs a{" "}
            <a
              href="https://www.termsfeed.com/live/86855bbe-e5f0-4b57-a4a4-8319222cfcb6"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>
      </React.Fragment>
    );
  }
}

export default App;
