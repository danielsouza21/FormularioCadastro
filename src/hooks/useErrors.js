import { React, useState } from "react";

function useErrors(validacoes) {
  const [Errors, setErrors] = useState({
    CPF: { valido: true, texterror: "" },
    password: { valido: true, texterror: "" },
  });

  function validarCampos(event) {
    const { name, value } = event.target;
    var valido = validacoes[name](value);
    var novoEstado = { ...Errors };
    novoEstado[name] = valido;
    setErrors(novoEstado);
  }

  function canSend(Errors) {
    for (let campo in Errors) {
      if (!Errors[campo].valido) return false;
    }

    return true;
  }

  return [Errors, validarCampos, canSend];
}

export default useErrors;
