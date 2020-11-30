import { React, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErrors from "../../hooks/useErrors";

function DadosEntrega({ Dados, setDados, AoEnviar }) {
  const validacoes = useContext(ValidacoesCadastro);
  const [Errors, validarCampos, canSend] = useErrors(validacoes);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (canSend()) AoEnviar(Dados);
      }}
    >
      <TextField
        onChange={(e) => setDados({ ...Dados, CEP: e.target.value })}
        value={Dados.CEP}
        id="CEP"
        label="CEP"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        onChange={(e) => setDados({ ...Dados, Endereço: e.target.value })}
        value={Dados.Endereço}
        id="Endereço"
        label="Endereço"
        type="text"
        variant="outlined"
        margin="normal"
        fullWidth
      ></TextField>
      <TextField
        onChange={(e) => setDados({ ...Dados, Número: e.target.value })}
        value={Dados.Número}
        id="Número"
        label="Número"
        type="number"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        onChange={(e) => setDados({ ...Dados, Cidade: e.target.value })}
        value={Dados.Cidade}
        id="Cidade"
        label="Cidade"
        type="text"
        variant="outlined"
        margin="normal"
      ></TextField>
      <TextField
        onChange={(e) => setDados({ ...Dados, Estado: e.target.value })}
        value={Dados.Estado}
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
