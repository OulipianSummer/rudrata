
import React, { Component } from "react";
import {Modal, Button} from 'react-bootstrap';

class ConfirmReset extends Component {
    constructor(props) {
      super(props);
      this.state = {
        show: props.show,
      };
      this.handleClear = this.handleClear.bind(this);
    }
  
    open = () => {
      this.setState({ show: true });
    };
  
    close = () => {
      this.setState({ show: false });
    };
  
    componentDidUpdate(prevProps) {
      const { show } = this.props;
      if (prevProps.show !== show) {
        if (show) {
          this.open();
        } else {
          this.close();
        }
      }
    }
  
    handleClear() {
      this.props.clear();
      return this.close();
    }
  
    render() {
      return (
        <>
          <Button className="ml-2" variant="danger" onClick={this.open}>
            Clear Board
          </Button>
  
          <Modal
            className="d-flex flex-column justify-content-center"
            show={this.state.show}
            onHide={this.close}
            ref={this.props.refBody}
          >
            <Modal.Header closeButton>
              <Modal.Title>Confim Board Reset</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to reset the chess board? Any progress you
              have made will be lost!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-primary" onClick={this.close}>
                Close
              </Button>
  
              <Button variant="danger" onClick={this.handleClear}>
                Reset
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  export default ConfirmReset;