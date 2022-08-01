import React from "react";
import styled from "styled-components";
import NuestraEscuela from "./NuestraEscuela";

const Containter = styled.div`
  height: 70vh;
  width: 100vw;
  background-color: var(--grey-bg-contact);
  background-image: url("./images/bg-contact.png");
  background-repeat: no-repeat;
  background-position-x: -10px;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .content {
    z-index: 10;
    color: var(--white);
    h1 {
      max-width: 700px;
      font-size: 62px;
      margin-bottom: 20px;
    }
  }
`;

export default function Contacto() {
  return (
    <>
      <Containter className="section">
        <div className="content">
          <h1>Contacto</h1>
        </div>
      </Containter>
      <NuestraEscuela />
    </>
  );
}
