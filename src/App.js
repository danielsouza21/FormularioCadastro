import FormularioCadastro from "./Formulario/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

import "fontsource-roboto";
import "./App.css";

function App() {
  function AoEnviar(Dados) {
    console.log(Dados);
  }

  function validarCPFField(cpf) {
    if (cpf.length !== 14) {
      return { valido: false, texterror: "CPF deve ter 11 digitos" };
    } else {
      return { valido: true, texterror: "" };
    }
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1">
          Formulário de cadastro
        </Typography>
        <FormularioCadastro
          AoEnviar={AoEnviar}
          validarCPFField={validarCPFField}
        />
      </Container>
    </div>
  );
}

export default App;
