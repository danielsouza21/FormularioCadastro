import React, { useState } from "react";
import DadosEntrega from "../DadosEntrega";
import DadosPessoais from "../DadosPessoais";
import DadosUsuarios from "../DadosUsuarios";

import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

import "./FormularioCadastro.css";

function Formulario({ validacoes }) {
  const [Dados, setDados] = useState({
    Nome: "",
    Sobrenome: "",
    CPF: "",
    Promoções: true,
    Novidades: true,
    Email: "",
    Password: "",
    CEP: "",
    Endereço: "",
    Número: "",
    Cidade: "",
    Estado: "",
  });

  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [
    <DadosUsuarios
      Dados={Dados}
      setDados={setDados}
      AoEnviar={NextStep}
      validacoes={validacoes}
    ></DadosUsuarios>,
    <DadosPessoais
      Dados={Dados}
      setDados={setDados}
      AoEnviar={NextStep}
      validacoes={validacoes}
    ></DadosPessoais>,
    <DadosEntrega
      Dados={Dados}
      setDados={setDados}
      AoEnviar={NextStep}
      validacoes={validacoes}
    ></DadosEntrega>,
    <Typography variant="h5">Obrigado pelo cadastro</Typography>,
  ];

  function NextStep() {
    if (etapaAtual === formularios.length - 1) {
      console.log(Dados);
      setDados({
        Nome: "",
        Sobrenome: "",
        CPF: "",
        Promoções: true,
        Novidades: true,
      });
      setEtapaAtual(0);
    } else {
      setEtapaAtual(etapaAtual + 1);
    }

    if (etapaAtual === formularios.length - 2) console.log(Dados);
  }

  return (
    <section>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formularios[etapaAtual]}
    </section>
  );
}

export default Formulario;
