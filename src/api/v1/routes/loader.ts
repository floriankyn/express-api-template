import fs from 'fs'
import express, { Router } from 'express'

const router: Router = express.Router()
const routeFiles: string[] = fs.readdirSync(`${__dirname}/`)

/**
 * Dynamically imports route modules from a list of files and applies them to a router.
 * It skips 'index.js' to prevent re-importing the main route file.
 * Assumes that each route module exports an object with a 'router' property.
 *
 * @return {Promise<void>} A promise that resolves when all route files have been processed.
 */
async function main(): Promise<void> {
  for (const file of routeFiles) {
    if (file !== 'loader.js') {
      const route = await import('./' + file)
      router.use(route.router)
    }
  }
}

main()
  .then()
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })

export default router
