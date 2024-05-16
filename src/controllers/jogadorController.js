const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createJogador = async (req, res) => {
  try {
    const { nome, idade, posicao, nacionalidade } = req.body;
    const jogador = await prisma.jogador.create({
      data: { nome, idade, posicao, nacionalidade },
    });
    res.status(201).json(jogador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listJogadores = async (req, res) => {
  try {
    const jogadores = await prisma.jogador.findMany();
    res.status(200).json(jogadores);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getJogador = async (req, res) => {
  try {
    const jogador = await prisma.jogador.findUnique({
      where: { id: req.params.id },
    });
    if (jogador) {
      res.status(200).json(jogador);
    } else {
      res.status(404).json({ error: "Jogador not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateJogador = async (req, res) => {
  try {
    const { nome, idade, posicao, nacionalidade } = req.body;
    const jogador = await prisma.jogador.update({
      where: { id: req.params.id },
      data: { nome, idade, posicao, nacionalidade },
    });
    res.status(200).json(jogador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteJogador = async (req, res) => {
  try {
    await prisma.jogador.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
