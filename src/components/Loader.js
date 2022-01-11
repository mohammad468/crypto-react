import React from "react";
import { Container, Spinner } from "react-bootstrap";

//*style
import "./Loader.scss";

const Loader = () => {
  return (
    <Container className="loading">
      <Spinner animation="border" variant="danger" />
    </Container>
  );
};

export default Loader;
