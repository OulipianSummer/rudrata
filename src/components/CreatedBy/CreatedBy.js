import { Container } from "react-bootstrap";

function CreatedBy() {
  return (
    <>
      <Container id="created-by" data-testid='created-by' style={{ fontSize: "1.5em" }}>
        <p>
          Created by{" "}
          <a
            href="https://github.com/OulipianSummer"
            target="_blank"
            rel="noreferrer"
          >
            Andrew Benbow
          </a>
          . UI design inspired by{" "}
          <a href="https://play2048.co/" target="_blank" rel="noreferrer">
            2048
          </a>{" "}
          by{" "}
          <a
            href="https://twitter.com/gabrielecirulli?lang=en"
            target="_blank"
            rel="noreferrer"
          >
            Gabriele Cirulli
          </a>
          .
        </p>
      </Container>
    </>
  );
}

export default CreatedBy;
