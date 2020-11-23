import React, { useState } from "react";

import { FormControlLabel, Button, TextField, Switch } from "@material-ui/core";

import "./FormularioCadastro.css";

function Formulario() {
  const [Dados, setDados] = useState({
    Nome: "",
    Sobrenome: "",
    CPF: "",
    Promoções: true,
    Novidades: true,
  });

  function handleInputNome(e) {
    setDados({ ...Dados, Nome: e.target.value });
  }

  function handleInputSobrenome(e) {
    setDados({ ...Dados, Sobrenome: e.target.value });
  }

  function handleInputCPF(e) {
    setDados({ ...Dados, CPF: e.target.value });
  }

  function handleSwitches(e) {
    setDados({ ...Dados, [e.target.name]: e.target.checked });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(Dados);
      }}
      className="Form_container"
    >
      <TextField
        onChange={(e) => handleInputNome(e)}
        value={Dados.Nome}
        id="InputNome"
        label="Nome"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(e) => handleInputSobrenome(e)}
        value={Dados.Sobrenome}
        id="InputSobrenome"
        label="Sobrenome"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(e) => handleInputCPF(e)}
        value={Dados.CPF}
        id="InputCPF"
        label="CPF"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <FormControlLabel
        control={
          <Switch
            checked={Dados.Promoções}
            onChange={(e) => handleSwitches(e)}
            name="Promoções"
            color="primary"
          ></Switch>
        }
        label="Promoções"
      ></FormControlLabel>

      <FormControlLabel
        control={
          <Switch
            checked={Dados.Novidades}
            onChange={(e) => handleSwitches(e)}
            name="Novidades"
            color="primary"
          ></Switch>
        }
        label="Novidades"
      ></FormControlLabel>

      <Button
        checked={Dados.Novidades}
        onChange={(e) => handleSwitches(e)}
        type="submit"
        variant="contained"
        color="primary"
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default Formulario;
