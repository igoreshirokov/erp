/*
  Warnings:

  - You are about to drop the column `content` on the `OrderM` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `OrderM` table. All the data in the column will be lost.
  - Added the required column `material_1` to the `OrderM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `OrderM` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `OrderM` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OrderM" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "order" TEXT NOT NULL,
    "material_1" TEXT NOT NULL,
    "material_2" TEXT,
    "print" TEXT,
    "pododeyalnik" TEXT,
    "prostin" TEXT,
    "navolochka" TEXT,
    "decor_prostin" TEXT,
    "decor_navolochca" TEXT
);
INSERT INTO "new_OrderM" ("id") SELECT "id" FROM "OrderM";
DROP TABLE "OrderM";
ALTER TABLE "new_OrderM" RENAME TO "OrderM";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
