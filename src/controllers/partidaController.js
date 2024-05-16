const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createPartida = async (req, res) => {
  try {
    const { date, location, score, homeTeam, visitingteam, coach } = req.body;
    const partida = await prisma.partida.create({
      data: { date, location, score, homeTeam, visitingteam, coach },
    });
    res.status(201).json(partida);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listPartidas = async (req, res) => {
  try {
    const partidas = await prisma.partida.findMany();
    res.status(200).json(partidas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPartida = async (req, res) => {
  try {
    const partida = await prisma.partida.findUnique({
      where: { id: req.params.id },
    });
    if (partida) {
      res.status(200).json(partida);
    } else {
      res.status(404).json({ error: "Partida not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePartida = async (req, res) => {
  try {
    const { date, location, score, homeTeam, visitingteam, coach } = req.body;
    const partida = await prisma.partida.update({
      where: { id: req.params.id },
      data: { date, location, score, homeTeam, visitingteam, coach },
    });
    res.status(200).json(partida);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePartida = async (req, res) => {
  try {
    await prisma.partida.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
