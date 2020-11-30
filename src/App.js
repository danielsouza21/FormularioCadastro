import FormularioCadastro from "./components/Formulario/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validarCPFField, validarSenhaField } from "./models/cadastro";
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";

import "fontsource-roboto";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <ValidacoesCadastro.Provider
          value={{ CPF: validarCPFField, password: validarSenhaField }}
        >
          <FormularioCadastro></FormularioCadastro>
        </ValidacoesCadastro.Provider>
      </Container>
    </div>
  );
}

export default App;
