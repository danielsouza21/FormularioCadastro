import FormularioCadastro from "./Formulario/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

import "fontsource-roboto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro />
      </Container>
    </div>
  );
}

export default App;
