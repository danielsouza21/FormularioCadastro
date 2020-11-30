function validarCPFField(cpf) {
  if (cpf.length !== 14) {
    return { valido: false, texterror: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texterror: "" };
  }
}

function validarSenhaField(senha) {
  if (senha.length < 4 || senha.length > 14) {
    return { valido: false, texterror: "Senha deve ter entre 4 e 14 digitos." };
  } else {
    return { valido: true, texterror: "" };
  }
}

export { validarCPFField, validarSenhaField };
