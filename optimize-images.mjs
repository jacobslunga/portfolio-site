import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

const placesDir = "./public/places";

async function optimizeImages() {
  try {
    const files = await readdir(placesDir);
    const imageFiles = files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".jpeg")
    );

    for (const file of imageFiles) {
      const inputPath = join(placesDir, file);
      const outputPath = join(placesDir, file.replace(".jpg", ".webp"));

      console.log(`Optimizing ${file}...`);

      // Convert to WebP with good quality and resize to reasonable dimensions
      await sharp(inputPath)
        .resize(800, 800, {
          fit: "cover",
          position: "center",
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Created ${file.replace(".jpg", ".webp")}`);
    }

    console.log("\n✨ All images optimized!");
    console.log("Update your App.tsx to use .webp extensions instead of .jpg");
  } catch (error) {
    console.error("Error optimizing images:", error);
  }
}

optimizeImages();
