import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./config/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_vkTrDjA30Cis@ep-raspy-bird-a1i71q4c-pooler.ap-southeast-1.aws.neon.tech/saas-lms-app?sslmode=require",
  },
});
