import { z } from 'zod'
import morgan from 'morgan';
import { logMessage } from '../api/v1/utils/logger'

const envVariables = z.object({
  MASTER_TOKEN_SECRET: z.string(),
  DATABASE_URL: z.string(),
})

envVariables.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}

import express from 'express'

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json({ limit: '10mb' }))

app.use(morgan(":method :url :status :res[content-length] - :response-time ms", {
    stream: {
      write: (message) => logMessage(message.trim())
    }
  })
)

// import routes
import routerV1 from '../api/v1/routes/loader'
app.use(routerV1)


// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
