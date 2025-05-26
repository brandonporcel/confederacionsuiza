import ImgGallery from "./ImgGallery";
import SubTitleAndDescription from "./SubTitleAndDescription";

const galleryImages = [
  {
    id: 0,
    title: "Imagen random 1",
    url: "./images/random-1.JPG",
  },
  {
    id: 1,
    title: "Imagen random 2",
    url: "./images/random-2.jpg",
  },
];

function Archive() {
  return (
    <div>
      <SubTitleAndDescription title="Archivo">
        <p>
          Para no tenerlo en el drive tirado por ahí. Que quede. Aguante la
          suiza! 🇨🇭🇨🇭🇨🇭
        </p>
        <ul>
          <li style={{ listStyleType: "initial" }}>
            <a href="/pdf/Manual-Web-ET26.pdf" target="_blank" rel="noreferrer">
              Manual de uso
            </a>
          </li>
          <li style={{ listStyleType: "initial" }}>
            <a href="/pdf/Cuestionario.pdf" target="_blank" rel="noreferrer">
              Custionario
            </a>
          </li>
          <li style={{ listStyleType: "initial" }}>
            <a href="/pdf/Lasuiza-alcance.pdf" target="_blank" rel="noreferrer">
              Alcance
            </a>
          </li>
        </ul>

        <div style={{ marginTop: "20px" }}>
          <ImgGallery galleryImages={galleryImages} />
        </div>
      </SubTitleAndDescription>
    </div>
  );
}

export default Archive;
