import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosEntrega({ Dados, setDados, AoEnviar }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        AoEnviar(Dados);
      }}
    >
      <TextField
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        id="Endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>
      <TextField
        id="Número"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        id="Cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        id="Estado"
        label="Estado"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
