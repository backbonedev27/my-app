import { join } from "path";
import { createReadStream } from "fs/promises";
import { parse } from "url";

// Define the absolute path to the public directory
const publicDirectory = join(process.cwd(), "public");

export async function GET(req, res) {
  try {
    // Extract the pathname from the request URL
    const { pathname } = parse(req.url, true);

    // Fully resolve the path to the file (in this case, 'pool.png' in the 'images' directory)
    const filePath = join(publicDirectory, "images", "pool.png");

    // Set the headers to indicate it's a download
    res.setHeader("Content-Disposition", 'attachment; filename="pool.png"');

    // Create a read stream and pipe it to the response
    const readStream = createReadStream(filePath);
    readStream.pipe(res);
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).end("Internal Server Error");
  }
}
