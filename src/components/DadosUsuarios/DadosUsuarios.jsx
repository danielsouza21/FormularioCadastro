import React from "react";
import { Button, TextField } from "@material-ui/core";

function DadosUsuarios({ Dados, setDados, AoEnviar }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        AoEnviar(Dados);
      }}
    >
      <TextField
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      ></TextField>
      <TextField
        id="senha"
        label="senha"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      ></TextField>
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuarios;
