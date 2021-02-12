import React, { PureComponent } from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import HowTo from "./components/HowTo/HowTo.js";
import Score from "./components/Score/Socre.js";
import GameOver from "./components/GameOver/GameOver.js";
import CreatedBy from "./components/CreatedBy/CreatedBy.js";
import Win from "./components/Win/Win.js";


// Standard import for custom css
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
import { faArrowRight, faPiggyBank, faCode } from "@fortawesome/free-solid-svg-icons";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      order: 8,
      diagramDimensions: { width: -1 },
      seqNumber: 0,
      tourSeq: [],
      legalSquares: [],
      gameOver: false,
      helpAltBackground: false,
      currentScore: 0,
    };

    this.handleClear = this.handleClear.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleHowTo = this.handleHowTo.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  // Processes incoming moves ("e4", "a5", "b8", etc.) and decides whether or not users are allowed to move the knight to them
  handleMove(move) {
    const { tourSeq, legalSquares, gameOver } = this.state;

    // If the first move has not yet been made, this branch simply places the knight on the board and generates an array of legalSquares the player can move to.
    if ( tourSeq.length === 0){
      const newLegalSquares = this.checkLegalMove(move, tourSeq);
      
      console.log(legalSquares);
      
      this.setState({legalSquares: newLegalSquares});
      return this.placeKnight(move);

      // This branch is activated if any moves have been made.
    } else {
      
      // Checks to see if the move requested is in the array that was created during the previous move
      if (!gameOver && legalSquares.includes(move)){
        
        const newLegalSquares = this.checkLegalMove(move, tourSeq);
        
        console.log(legalSquares, move);
        
        this.setState({legalSquares: newLegalSquares});
        return this.placeKnight(move);
        
        // Moves that are not found in the legalSquares array are simply ignored 
      } else {
        return undefined;
      }
    
    }
  }

  // The how to section has a simple method for handling changing its className to trigger a short CSS transition when a user clicks the how to link
  // This method also has a scrollIntoView call that brings users down to the how to information
  handleHowTo() {
    
    // Shows the users the how to information when clicked
    const howto = document.querySelector("#how-to");
    howto.scrollIntoView();

    // When set to true, helpAltBackground will change some className information on the how to component, which triggers a CSS animation
    this.setState((state) => ({
      helpAltBackground: !state.helpAltBackground,
    }));

    // After 5 seconds, the state is witched back to false.
    return setTimeout(() => {
      this.setState((state) => ({
        helpAltBackground: !state.helpAltBackground,
      }));
    }, 5000);
  }

  // This function iterates through all of the possible moves a knight can take and attempts to figure out if the requested move is possible
  checkLegalMove(move, tourSeq) {

    const { order, seqNumber } = this.state;
  
    // Check to see if the move has already been made. If so, exit early.
    if (tourSeq.includes(move)){
      return [];
    }
    
    // A 2d array of all of the possible moves a knight can make. Used to generated square names.
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

    // This regular expression is built to find the files (numbers) of the moves passed into this function
    const files_re = /(\d{1,})/;

    // Declares a block of variables used for storing the various ranks and files of each move being processed
    const move_x = ranks.indexOf(move[0]) + 1;
    const move_y = parseInt(move.split(files_re)[1]);

    const legalSquares = legalMoves.map(function(legal){
      const next_x = legal[0] + move_x;
      const next_y = legal[1] + move_y;
      const next= `${ranks[next_x - 1]}${next_y}`;
    
      if(next_x > 0 && next_x <= order &&
         next_y > 0 && next_y <= order &&
        tourSeq.includes(next) === false){
          return next;
        } else {
          return null;
        }
    
    });
    
  let filteredSquares = legalSquares.filter(ele => ele !== null);
  
  // As a final check, we make sure that the final result has at least one move left in it. If it does not, then the game is over!
  if (filteredSquares.length === 0 && seqNumber < order * order){
    this.gameOver();
    return [];
  } else {return filteredSquares}
   
  }

  gameOver(){
    return this.setState({gameOver: true});
  }

  // A simple method for appending the knight's position to an array held in the state, thus updating the chess board and what it displays
  placeKnight(move) {

    let sequence = this.state.tourSeq.slice();
    sequence.push(move);
    return this.setState((state) => ({
      tourSeq: sequence,
      seqNumber: (state.seqNumber += 1),
      currentScore: (state.currentScore += 1),
    }));
  }


  // Resets the entire chess board using setState
  handleClear() {
    return this.setState({ tourSeq: [], seqNumber: 0, currentScore: 0, legalSquares: [], gameOver: false});
  }

  // This method is called each time the user changes the chess board size
  // Method clears the chess board, and take the incomming event data and processes it to find out the new chess board size
  handleUpdate(event) {
    this.handleClear();
    const order = event.target.attributes['data-order'].value;

    return this.setState({order: order});
    
  }

  render() {
    const {
      order,
      diagramDimensions,
      seqNumber,
      tourSeq,
      gameOver,
      currentScore,
    } = this.state;

  
    // This code block is used to build the positionDescriptor, a simple array containing the position of all of the blanked squares, and the knight.
    let lastSquareName = tourSeq[seqNumber - 1];
    let positionDescriptor = tourSeq.map((sq) => "-@" + sq);
    if (lastSquareName) positionDescriptor.push("N@" + lastSquareName); 

    return (
      <React.Fragment>
        <Row>
          <Col col={12}>
        {/* A win condition that displays a fun visual effect */}
        {seqNumber === Math.pow(order, 2) && <Win />}

        {/* The website header */}
        <header id="rudrata-header">
          <Container fluid className="d-flex justify-content-around mb-5">
            <Row>
              <Col className="mr-5">
                <h1 className="display-2 text-center">Rudrata</h1>
                <p className='text-center'>Visit each square on the chess board!</p>
                <button
                  className=" font-weight-bold btn-link btn mb-2 mt-2"
                  onClick={this.handleHowTo}
                >
                  How To Play <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Col>

              <Col>
              {/* A simple score keeping component  */}
                <Row>
                  <Score currentScore={currentScore} order={order} />
                </Row>

                <ButtonToolbar className="d-flex col-12 flex-column justify-content-around">
                  <Row>
                    {/* New game button */}
                    <Button
                      size="lg"
                      className="mt-3 btn-block"
                      variant="success"
                      onClick={this.handleClear}
                    >
                      New Game
                    </Button>
                  </Row>

                  <Row>
                    {/* A dropdown that allows users to choose their preferred difficulty */}
                    <Dropdown block='true' className="mt-3 btn-block w-100">
                      <Dropdown.Toggle block='true' size="lg" variant="success">
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

        {/* This section contains the chess board object */}
        <section id="chessboard">
         
          <Measure
            bounds
            onResize={(contentRect) => {
              this.setState({ diagramDimensions: contentRect.bounds });
            }}
          >
            {({ measureRef }) => (
              <div ref={measureRef} className="d-flex justify-content-center">
                 {gameOver === true && <GameOver score={`${seqNumber} / ${order * order}`} newGame ={this.handleClear}/>}
                <Chessdiagram
                  allowMoves={false}
                  squareSize={
                    measureRef
                      ? Math.min(80, (1 * diagramDimensions.width) / order)
                      : 45
                  }
                  files={parseInt(order)}
                  ranks={parseInt(order)}
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


        {/* How To section */}
        <section id="how-to-section">
          <HowTo altBackground={this.state.helpAltBackground} />
        </section>
        <hr className="w-50" />


        {/* Created By Information */}          
        <section id="created-by-section">
          <CreatedBy />
        </section>

       {/* This section contains some links out of website back to the project's GitHub page and a donation link */}
        <section
          id="button-section"
          className="d-flex flex-row justify-content-center"
        >
          <ButtonToolbar role='navigation'>
          <a
            className="btn btn-primary btn-lg mr-1"
            href="https://www.paypal.com/donate?hosted_button_id=3972H6RJEYDVW"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon className="mr-2" icon={faPiggyBank} />
            Donate
          </a>

          <a
          className='btn btn-primary btn-lg ml-1'
          href='https://github.com/OulipianSummer/rudrata'
          target='_blank'
          rel='noreferrer'
          ><FontAwesomeIcon icon={faCode}/> View On GitHub</a>
          </ButtonToolbar>

        </section>
        <hr className="w-50" />

        {/* This section contains a simple privacy policy that simply states that this app can't track users or store user data. */}
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
        </Col>
        </Row>
      </React.Fragment>
    );
  }
}
