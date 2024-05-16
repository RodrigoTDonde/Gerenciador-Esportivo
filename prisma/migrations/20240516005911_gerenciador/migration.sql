-- CreateTable
CREATE TABLE `Jogador` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `idade` INTEGER NULL,
    `posicao` VARCHAR(50) NULL,
    `nacionalidade` VARCHAR(50) NULL,

    UNIQUE INDEX `Jogador_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Time` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(100) NOT NULL,
    `anoFundacao` VARCHAR(100) NOT NULL,
    `pais` VARCHAR(50) NOT NULL,
    `tecnico` VARCHAR(50) NOT NULL,
    `jogador` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Time_nome_key`(`nome`),
    UNIQUE INDEX `Time_anoFundacao_key`(`anoFundacao`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Partida` (
    `id` VARCHAR(191) NOT NULL,
    `date` VARCHAR(100) NOT NULL,
    `location` VARCHAR(100) NOT NULL,
    `score` VARCHAR(50) NOT NULL,
    `homeTeam` VARCHAR(100) NOT NULL,
    `visitingteam` VARCHAR(100) NOT NULL,
    `coach` VARCHAR(50) NOT NULL,

    UNIQUE INDEX `Partida_date_key`(`date`),
    UNIQUE INDEX `Partida_location_key`(`location`),
    UNIQUE INDEX `Partida_homeTeam_key`(`homeTeam`),
    UNIQUE INDEX `Partida_visitingteam_key`(`visitingteam`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
