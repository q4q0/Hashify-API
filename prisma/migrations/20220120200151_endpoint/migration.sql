-- CreateTable
CREATE TABLE "EndPoint" (
    "endpoint_id" SERIAL NOT NULL,
    "path" TEXT NOT NULL,
    "methodMethod_id" INTEGER,

    CONSTRAINT "EndPoint_pkey" PRIMARY KEY ("endpoint_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EndPoint_path_key" ON "EndPoint"("path");

-- AddForeignKey
ALTER TABLE "EndPoint" ADD CONSTRAINT "EndPoint_methodMethod_id_fkey" FOREIGN KEY ("methodMethod_id") REFERENCES "Method"("method_id") ON DELETE SET NULL ON UPDATE CASCADE;
