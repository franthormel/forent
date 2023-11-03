-- CreateTable
CREATE TABLE "listing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "deposit" DECIMAL(65,30),
    "imageUrls" TEXT[],
    "description" TEXT NOT NULL,
    "beds" INTEGER NOT NULL,
    "baths" INTEGER NOT NULL,
    "area" INTEGER NOT NULL,
    "availableDate" DATE NOT NULL DEFAULT CURRENT_DATE,

    CONSTRAINT "listing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_price" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30) NOT NULL DEFAULT -1,
    "startDate" DATE NOT NULL DEFAULT CURRENT_DATE,
    "endDate" DATE NOT NULL,
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "listing_price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_rating" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "listing_rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_address" (
    "id" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" INTEGER,
    "country" TEXT NOT NULL,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "listing_address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "listing_contact_info" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "email" TEXT,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "listing_contact_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "listing_id_key" ON "listing"("id");

-- CreateIndex
CREATE UNIQUE INDEX "listing_price_id_key" ON "listing_price"("id");

-- CreateIndex
CREATE UNIQUE INDEX "listing_price_listingId_key" ON "listing_price"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "listing_rating_id_key" ON "listing_rating"("id");

-- CreateIndex
CREATE UNIQUE INDEX "listing_rating_listingId_key" ON "listing_rating"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "listing_address_id_key" ON "listing_address"("id");

-- CreateIndex
CREATE UNIQUE INDEX "listing_address_listingId_key" ON "listing_address"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "listing_contact_info_id_key" ON "listing_contact_info"("id");

-- CreateIndex
CREATE UNIQUE INDEX "listing_contact_info_listingId_key" ON "listing_contact_info"("listingId");

-- AddForeignKey
ALTER TABLE "listing_price" ADD CONSTRAINT "listing_price_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_rating" ADD CONSTRAINT "listing_rating_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_address" ADD CONSTRAINT "listing_address_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "listing_contact_info" ADD CONSTRAINT "listing_contact_info_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
