require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Conectar ao banco de dados (MongoDB)
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Definir modelo de aluno
const Aluno = mongoose.model("Aluno", {
  nome: String,
  idade: Number,
  posicao: String,
  escolaAluno: String, // Adicionado campo escolaAluno
  enderecoAluno: String, // Adicionado campo enderecoAluno
});

// Definir modelo de escola
const Escola = mongoose.model("Escola", {
  nome: String,
  endereco: String,
  telefone: String,
});

// Rota para cadastrar aluno
app.post("/alunos", async (req, res) => {
  const aluno = new Aluno(req.body);
  await aluno.save();
  res.send(aluno);
});

// Rota para listar alunos
app.get("/alunos", async (req, res) => {
  const alunos = await Aluno.find();
  res.send(alunos);
});

// Rota para cadastrar escola
app.post("/escola", async (req, res) => {
  const escola = new Escola(req.body);
  await escola.save();
  res.send(escola);
});

// Rota para listar escola
app.get("/escola", async (req, res) => {
  const escolas = await Escola.find();
  res.send(escolas);
});

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));