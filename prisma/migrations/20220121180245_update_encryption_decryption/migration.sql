/*
  Warnings:

  - Added the required column `encoding` to the `Dcrypted` table without a default value. This is not possible if the table is not empty.
  - Added the required column `encoding` to the `Encrypted` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Dcrypted" ADD COLUMN     "encoding" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Encrypted" ADD COLUMN     "encoding" TEXT NOT NULL;
