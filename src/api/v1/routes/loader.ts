import fs from 'fs'
import express, { Router } from 'express'

const router: Router = express.Router()
const routeFiles: string[] = fs.readdirSync(`${__dirname}/`)


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
