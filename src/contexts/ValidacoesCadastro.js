import React from "react";

const ValidacoesCadastro = React.createContext({
  cpf: semValidacao,
  password: semValidacao,
});

function semValidacao(dados) {
  console.log(dados);
  return { valido: true, texterror: "" };
}

export default ValidacoesCadastro;
