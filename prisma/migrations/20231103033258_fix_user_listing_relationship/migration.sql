/*
  Warnings:

  - You are about to drop the `listing_address` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listing_contact_info` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listing_price` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `listing_rating` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `listing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "listing_address" DROP CONSTRAINT "listing_address_listingId_fkey";

-- DropForeignKey
ALTER TABLE "listing_contact_info" DROP CONSTRAINT "listing_contact_info_listingId_fkey";

-- DropForeignKey
ALTER TABLE "listing_price" DROP CONSTRAINT "listing_price_listingId_fkey";

-- DropForeignKey
ALTER TABLE "listing_rating" DROP CONSTRAINT "listing_rating_listingId_fkey";

-- AlterTable
ALTER TABLE "listing" ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "listing_address";

-- DropTable
DROP TABLE "listing_contact_info";

-- DropTable
DROP TABLE "listing_price";

-- DropTable
DROP TABLE "listing_rating";

-- CreateTable
CREATE TABLE "price" (
    "id" TEXT NOT NULL,
    "value" MONEY NOT NULL,
    "startDate" DATE NOT NULL DEFAULT CURRENT_DATE,
    "endDate" DATE NOT NULL DEFAULT '9999-12-31 00:00:00 +00:00',
    "isCurrent" BOOLEAN NOT NULL DEFAULT true,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipcode" TEXT,
    "country" TEXT NOT NULL,
    "latitude" DECIMAL(16,10) NOT NULL,
    "longitude" DECIMAL(16,10) NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contactNumber" TEXT NOT NULL,
    "email" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_listingId_key" ON "address"("listingId");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "listing" ADD CONSTRAINT "listing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price" ADD CONSTRAINT "price_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
