/*
  Warnings:

  - You are about to drop the column `decor_navolochca` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `decor_prostin` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `material_1` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `material_2` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `navolochka` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `pododeyalnik` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `print` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `prostin` on the `OrderM` table. All the data in the column will be lost.
  - Added the required column `date` to the `OrderM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `products` to the `OrderM` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderM" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "products" TEXT NOT NULL
);
INSERT INTO "new_OrderM" ("id", "name", "order") SELECT "id", "name", "order" FROM "OrderM";
DROP TABLE "OrderM";
ALTER TABLE "new_OrderM" RENAME TO "OrderM";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
