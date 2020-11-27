import React, { useState } from "react";
import DadosEntrega from "../DadosEntrega";
import DadosPessoais from "../DadosPessoais";
import DadosUsuarios from "../DadosUsuarios";
import "./FormularioCadastro.css";

function Formulario() {
  const [Dados, setDados] = useState({
    Nome: "",
    Sobrenome: "",
    CPF: "",
    Promoções: true,
    Novidades: true,
  });

  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosPessoais
      Dados={Dados}
      setDados={setDados}
      AoEnviar={NextStep}
      validarCPFField={validarCPFField}
    ></DadosPessoais>,
    <DadosUsuarios
      Dados={Dados}
      setDados={setDados}
      AoEnviar={NextStep}
    ></DadosUsuarios>,
    <DadosEntrega
      Dados={Dados}
      setDados={setDados}
      AoEnviar={AoFinalizar}
    ></DadosEntrega>,
  ];

  function AoFinalizar(Dados) {
    console.log(Dados);
    setDados({
      Nome: "",
      Sobrenome: "",
      CPF: "",
      Promoções: true,
      Novidades: true,
    });
    setEtapaAtual(0);
  }

  function validarCPFField(cpf) {
    if (cpf.length !== 14) {
      return { valido: false, texterror: "CPF deve ter 11 digitos" };
    } else {
      return { valido: true, texterror: "" };
    }
  }

  function NextStep() {
    setEtapaAtual(etapaAtual + 1);
  }

  return <section>{formularios[etapaAtual]}</section>;
}

export default Formulario;
