const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createTime = async (req, res) => {
  try {
    const { nome, anoFundacao, pais, tecnico, jogador } = req.body;
    const time = await prisma.time.create({
      data: { nome, anoFundacao, pais, tecnico, jogador },
    });
    res.status(201).json(time);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.listTimes = async (req, res) => {
  try {
    const times = await prisma.time.findMany();
    res.status(200).json(times);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTime = async (req, res) => {
  try {
    const time = await prisma.time.findUnique({
      where: { id: req.params.id },
    });
    if (time) {
      res.status(200).json(time);
    } else {
      res.status(404).json({ error: "Time not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTime = async (req, res) => {
  try {
    const { nome, anoFundacao, pais, tecnico, jogador } = req.body;
    const time = await prisma.time.update({
      where: { id: req.params.id },
      data: { nome, anoFundacao, pais, tecnico, jogador },
    });
    res.status(200).json(time);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTime = async (req, res) => {
  try {
    await prisma.time.delete({
      where: { id: req.params.id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

