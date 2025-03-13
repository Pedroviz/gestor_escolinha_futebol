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

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));
