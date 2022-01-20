-- CreateTable
CREATE TABLE "Method" (
    "method_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "minKeyLength" INTEGER NOT NULL DEFAULT 0,
    "maxKeyLength" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Method_pkey" PRIMARY KEY ("method_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Method_endpoint_key" ON "Method"("endpoint");
