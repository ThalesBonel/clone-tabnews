function status(request, response) {
  response
    .status(200)
    .json({ chave: "Textão para Validar mensagem: são, média, alça" });
}

export default status;
