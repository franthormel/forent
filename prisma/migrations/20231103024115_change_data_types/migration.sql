/*
  Warnings:

  - The `deposit` column on the `listing` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `latitude` on the `listing_address` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(16,10)`.
  - You are about to alter the column `longitude` on the `listing_address` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(16,10)`.
  - Changed the type of `value` on the `listing_price` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "listing_id_key";

-- DropIndex
DROP INDEX "listing_address_id_key";

-- DropIndex
DROP INDEX "listing_contact_info_id_key";

-- DropIndex
DROP INDEX "listing_price_id_key";

-- DropIndex
DROP INDEX "listing_rating_id_key";

-- AlterTable
ALTER TABLE "listing" DROP COLUMN "deposit",
ADD COLUMN     "deposit" MONEY,
ALTER COLUMN "area" SET DATA TYPE DECIMAL(24,2),
ALTER COLUMN "availableDate" DROP NOT NULL,
ALTER COLUMN "availableDate" DROP DEFAULT;

-- AlterTable
ALTER TABLE "listing_address" ALTER COLUMN "zipcode" SET DATA TYPE TEXT,
ALTER COLUMN "latitude" SET DATA TYPE DECIMAL(16,10),
ALTER COLUMN "longitude" SET DATA TYPE DECIMAL(16,10);

-- AlterTable
ALTER TABLE "listing_price" DROP COLUMN "value",
ADD COLUMN     "value" MONEY NOT NULL,
ALTER COLUMN "endDate" SET DEFAULT '9999-12-31 00:00:00 +00:00';
