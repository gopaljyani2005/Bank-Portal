import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = {
  extends: [
    "next/core-web-vitals",  // Use Next.js config directly
  ],
};

export default eslintConfig;
