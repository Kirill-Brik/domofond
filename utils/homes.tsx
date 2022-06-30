import fs from "fs";
import path from "path";

const homesDirectory = path.join(process.cwd(), "homes");

export function getHomesData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(homesDirectory);
  const allHomesData = fileNames.map((address) => {
    // Read markdown file as string
    const addressDir = path.join(homesDirectory, address);
    const homesData = fs.readdirSync(addressDir);
    const homesDataPath = homesData.map((report) => {
      const filePath = path.join(addressDir, report);
      const stat = fs.statSync(filePath);
      return filePath;
    });
    return [address, homesData, homesDataPath];
    // const fileContents = fs.readFileSync(fullPath, "utf8");
  });
  return allHomesData;
}
