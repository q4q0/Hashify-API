/*
  Warnings:

  - You are about to drop the `Hash` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Hash";

-- CreateTable
CREATE TABLE "Hashed" (
    "hash_id" SERIAL NOT NULL,
    "digest" TEXT NOT NULL,
    "digestEncode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "key" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Hashed_pkey" PRIMARY KEY ("hash_id")
);

-- CreateTable
CREATE TABLE "Encrypted" (
    "encrepted_id" SERIAL NOT NULL,
    "encrypted_value" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,
    "dcrypted_id" INTEGER,

    CONSTRAINT "Encrypted_pkey" PRIMARY KEY ("encrepted_id")
);

-- CreateTable
CREATE TABLE "Dcrypted" (
    "dcrypted_id" SERIAL NOT NULL,
    "dcrypted_value" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "secret_key" TEXT NOT NULL,

    CONSTRAINT "Dcrypted_pkey" PRIMARY KEY ("dcrypted_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hashed_digest_key" ON "Hashed"("digest");

-- AddForeignKey
ALTER TABLE "Encrypted" ADD CONSTRAINT "Encrypted_dcrypted_id_fkey" FOREIGN KEY ("dcrypted_id") REFERENCES "Dcrypted"("dcrypted_id") ON DELETE SET NULL ON UPDATE CASCADE;
