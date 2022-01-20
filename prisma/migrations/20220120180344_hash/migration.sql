-- CreateTable
CREATE TABLE "Hash" (
    "hash_id" SERIAL NOT NULL,
    "digest" TEXT NOT NULL,
    "digestEncode" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "key" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Hash_pkey" PRIMARY KEY ("hash_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Hash_digest_key" ON "Hash"("digest");
