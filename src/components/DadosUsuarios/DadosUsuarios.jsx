import { React, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosUsuarios({ Dados, setDados, AoEnviar }) {
  const validacoes = useContext(ValidacoesCadastro);
  const [Errors, validarCampos, canSend] = useErrors(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSend(Errors)) AoEnviar(Dados);
      }}
    >
      <TextField
        onChange={(e) => setDados({ ...Dados, Email: e.target.value })}
        value={Dados.Email}
        id="email"
        label="email"
        type="email"
        variant="outlined"
        margin="normal"
        fullWidth
        required
      ></TextField>
      <TextField
        onChange={(e) => setDados({ ...Dados, Password: e.target.value })}
        value={Dados.Password}
        id="senha"
        label="senha"
        name="password"
        type="password"
        error={!Errors.password.valido}
        helperText={Errors.password.texterror}
        onBlur={validarCampos}
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
