import "./styles.css";
import listado from "./api/cursos";
import Buscador from "./componentes/Buscador";
import { useState } from "react";
export default function App() {
  const [cursos, setCursos] = useState([]);
  function search(valor) {
    console.log(valor);
    const cursoFiltrado = listado.filter((curso) =>
      curso.title.toLowerCase().includes(valor.toLowerCase())
    );
    setCursos(valor ? cursoFiltrado : []);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Buscador search={search} sugerencia={cursos} />
      <div className="container">
        {listado.map((curso) => (
          <div className="d-flex" key={curso.title}>
            <span>{curso.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
