import React, { useState } from "react";

import { FormControlLabel, Button, TextField, Switch } from "@material-ui/core";

import "./FormularioCadastro.css";

function Formulario({ AoEnviar, validarCPFField }) {
  const [Dados, setDados] = useState({
    Nome: "",
    Sobrenome: "",
    CPF: "",
    Promoções: true,
    Novidades: true,
  });

  const [Errors, setErrors] = useState({
    cpf: { valido: true, texterror: "" },
  });

  function maskCPF(_CPF) {
    var cpf = _CPF;

    return cpf
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        AoEnviar(Dados);
      }}
      className="Form_container"
    >
      <TextField
        onChange={(e) => setDados({ ...Dados, Nome: e.target.value })}
        value={Dados.Nome}
        id="InputNome"
        label="Nome"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(e) => setDados({ ...Dados, Sobrenome: e.target.value })}
        value={Dados.Sobrenome}
        id="InputSobrenome"
        label="Sobrenome"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>

      <TextField
        onChange={(e) => {
          setDados({
            ...Dados,
            CPF: e.target.value,
          });
        }}
        value={maskCPF(Dados.CPF)}
        id="InputCPF"
        label="CPF"
        type="text"
        variant="outlined"
        margin="normal"
        error={!Errors.cpf.valido}
        helperText={Errors.cpf.texterror}
        onBlur={(event) => {
          var validoCPF = validarCPFField(Dados.CPF);
          setErrors({ ...Errors, cpf: validoCPF });
        }}
        fullWidth
      ></TextField>

      <FormControlLabel
        control={
          <Switch
            checked={Dados.Promoções}
            onChange={(e) =>
              setDados({ ...Dados, Promoções: e.target.checked })
            }
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
            onChange={(e) =>
              setDados({ ...Dados, Novidades: e.target.checked })
            }
            name="Novidades"
            color="primary"
          ></Switch>
        }
        label="Novidades"
      ></FormControlLabel>

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default Formulario;
