/*
  Warnings:

  - You are about to drop the column `dcrypted_value` on the `Decrypted` table. All the data in the column will be lost.
  - Added the required column `decrypted_value` to the `Decrypted` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Decrypted" DROP COLUMN "dcrypted_value",
ADD COLUMN     "decrypted_value" TEXT NOT NULL;
