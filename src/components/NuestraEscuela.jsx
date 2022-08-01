import React from "react";
import styled from "styled-components";
import Facebook from "./svg/Facebook";
import Instagram from "./svg/Instagram";
import Linkedin from "./svg/Linkedin";
import Youtube from "./svg/Youtube";

const ContainterMap = styled.div`
  background-color: var(--grey-bg-contact);
  .containerMap {
    height: 100vh;
    width: 50vw;
    margin: auto;
    background-color: var(--white);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .social {
    color: white;
    gap: 10px;
    display: grid;
    grid-template-columns: repeat(4, 30px);
  }
  h2 {
    font-size: 1.3rem;
  }
  p {
    font-size: 14px;
    color: #707a83;
  }
  a {
    font-size: 14px;
    font-weight: bold;
    color: var(--blue);
  }
  a:hover {
    color: var(--blue-hover);
  }
`;

export default function NuestraEscuela() {
  return (
    <ContainterMap className="section">
      <div className="containerMap">
        <h2>Nuestra Escuela</h2>
        <p>Avenida Jujuy 255 - 1083 CABA</p>
        <br />
        <div class="mapouter">
          <div class="gmap_canvas">
            <iframe
              width="500"
              height="300"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Avenida%20Jujuy%20255&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            />
            <br />
            <style>
              {`
                .mapouter{
                    position:relative;
                    text-align:center;
                    height:300px;
                    width:500px;
                }
            `}
            </style>
            <style>
              {`
                .gmap_canvas {
                    overflow:hidden;
                    background:none!important;
                    height:300px;
                    width:500px;
                }
            `}
            </style>
          </div>
        </div>
        <p>Información general:</p>
        <a href="#">et26@gmail.com</a>
        <p>Consultas Administrativas:</p>
        <a href="#">et26administracion@gmail.com</a>
        <p>Telefono: 11 4931 1947</p>
        <h2>Seguimos en las redes</h2>
        <div className="social">
          <a
            href="https://www.facebook.com/tecnica26/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://instagram.com/lasuizacompu"
            target={"_blank"}
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCTKTGa96qO3ESC1t2JqzfzQ"
            target={"_blank"}
            rel="noreferrer"
          >
            <Youtube />
          </a>
          <a
            href="https://www.linkedin.com/school/et26suiza/"
            target={"_blank"}
            rel="noreferrer"
          >
            <Linkedin />
          </a>
        </div>
      </div>
    </ContainterMap>
  );
}
