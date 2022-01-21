/*
  Warnings:

  - You are about to drop the column `decrypted_id` on the `Encrypted` table. All the data in the column will be lost.
  - You are about to drop the `Dcrypted` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Encrypted" DROP CONSTRAINT "Encrypted_decrypted_id_fkey";

-- AlterTable
ALTER TABLE "Encrypted" DROP COLUMN "decrypted_id";

-- DropTable
DROP TABLE "Dcrypted";

-- CreateTable
CREATE TABLE "Decrypted" (
    "decrypted_id" SERIAL NOT NULL,
    "dcrypted_value" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,
    "encoding" TEXT NOT NULL,

    CONSTRAINT "Decrypted_pkey" PRIMARY KEY ("decrypted_id")
);
