/*
  Warnings:

  - The primary key for the `Dcrypted` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dcrypted_id` on the `Dcrypted` table. All the data in the column will be lost.
  - The primary key for the `Encrypted` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `dcrypted_id` on the `Encrypted` table. All the data in the column will be lost.
  - You are about to drop the column `encrepted_id` on the `Encrypted` table. All the data in the column will be lost.
  - You are about to drop the column `methodMethod_id` on the `EndPoint` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Encrypted" DROP CONSTRAINT "Encrypted_dcrypted_id_fkey";

-- DropForeignKey
ALTER TABLE "EndPoint" DROP CONSTRAINT "EndPoint_methodMethod_id_fkey";

-- AlterTable
ALTER TABLE "Dcrypted" DROP CONSTRAINT "Dcrypted_pkey",
DROP COLUMN "dcrypted_id",
ADD COLUMN     "decrypted_id" SERIAL NOT NULL,
ADD CONSTRAINT "Dcrypted_pkey" PRIMARY KEY ("decrypted_id");

-- AlterTable
ALTER TABLE "Encrypted" DROP CONSTRAINT "Encrypted_pkey",
DROP COLUMN "dcrypted_id",
DROP COLUMN "encrepted_id",
ADD COLUMN     "decrypted_id" INTEGER,
ADD COLUMN     "encrypted_id" SERIAL NOT NULL,
ADD CONSTRAINT "Encrypted_pkey" PRIMARY KEY ("encrypted_id");

-- AlterTable
ALTER TABLE "EndPoint" DROP COLUMN "methodMethod_id",
ADD COLUMN     "method_id" INTEGER;

-- AddForeignKey
ALTER TABLE "EndPoint" ADD CONSTRAINT "EndPoint_method_id_fkey" FOREIGN KEY ("method_id") REFERENCES "Method"("method_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Encrypted" ADD CONSTRAINT "Encrypted_decrypted_id_fkey" FOREIGN KEY ("decrypted_id") REFERENCES "Dcrypted"("decrypted_id") ON DELETE SET NULL ON UPDATE CASCADE;
