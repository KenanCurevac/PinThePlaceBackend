/*
  Warnings:

  - A unique constraint covering the columns `[gameId,questionId]` on the table `Guess` will be added. If there are existing duplicate values, this will fail.
  - Made the column `gameId` on table `Guess` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Guess" ALTER COLUMN "gameId" SET NOT NULL;

-- CreateTable
CREATE TABLE "GameQuestion" (
    "id" TEXT NOT NULL,
    "gameId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "GameQuestion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "GameQuestion_gameId_questionId_key" ON "GameQuestion"("gameId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "Guess_gameId_questionId_key" ON "Guess"("gameId", "questionId");

-- AddForeignKey
ALTER TABLE "GameQuestion" ADD CONSTRAINT "GameQuestion_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameQuestion" ADD CONSTRAINT "GameQuestion_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
