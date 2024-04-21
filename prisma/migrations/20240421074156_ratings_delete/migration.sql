/*
  Warnings:

  - You are about to drop the `rating` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "rating" DROP CONSTRAINT "rating_listingId_fkey";

-- DropTable
DROP TABLE "rating";
