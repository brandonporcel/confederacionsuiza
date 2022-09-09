import React from "react";
import ProjectContainer from "../ProjectContainer";
import SubTitleAndDescription from "../SubTitleAndDescription";

export default function Fll2019() {
  return (
    <ProjectContainer
      title="FLL 2019 - Convergencia 26"
      mainImg="./images/proyectos/torneo-fll2019.png"
      when="2019"
      specialty="c"
    >
      <SubTitleAndDescription
        title="Descripción"
        specialClass="subtitleClassProject"
        w="100"
      >
        <p>
          FIRST® LEGO League es un programa internacional que fomenta el
          aprendizaje práctico de las STEM (ciencia, tecnología, ingeniería y
          matemáticas según sus siglas en inglés) en los jóvenes de 4 a 16 años.
        </p>
        <br />
        <p>
          Los equipos participan en la investigación y resolución del reto
          relacionado con la temática de la temporada. También deben resolver
          las misiones del juego del robot construyendo y programando
        </p>
        <br />
        <p>
          En la FLL 2019 la temática fue la llamada “City-Shaper” que consiste
          en dos pruebas: La de investigación y la de robótica.
        </p>
        <br />
      </SubTitleAndDescription>
      <SubTitleAndDescription
        title="Las Pruebas"
        specialClass="subtitleClassProject"
        w="100"
      >
        <p>
          La prueba de investigación trata sobre formas de implementar la
          ecología en las ciudades, en el equipo de “Convergencia - 26” se ideó
          un tipo de ladrillo de construcción hecho en base de plásticos
          reciclados.
        </p>
        <br />
        <p>
          La prueba de robótica desafía a los chicos a construir un robot
          funcional con piezas de LEGO con el cual el día de la competencia
          deberán superar una serie de retos y pruebas en la “lona”, que es su
          campo donde los robots realizan las pruebas.
        </p>
        <br />
        <p>
          Aunque no logramos ganar el desafío se nos condecoró con un
          reconocimiento por nuestro destacado desempeño e innovación en nuestra
          investigación.
        </p>
      </SubTitleAndDescription>
      <SubTitleAndDescription
        title="Redes Sociales"
        specialClass="subtitleClassProject"
        w="100"
      >
        <ul>
          <li>
            <a
              className="linktoa"
              href="https://www.instagram.com/fll.et26/"
              rel="noreferrer"
              target="_blank"
            >
              fll.et26
            </a>
          </li>
        </ul>
      </SubTitleAndDescription>
    </ProjectContainer>
  );
}
