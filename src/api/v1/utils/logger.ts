import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { createLogger, format, transports } from 'winston'

if (!existsSync('logs')) {
  mkdirSync('logs')
}

const date = new Date().toISOString().split('T')[0] 
const logFileName = join('logs', `${date}.log`)

const Logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`
    }),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: logFileName }),
  ],
})

Logger.info('----- New Logging Session Started -----')

export const logError = (message: string): void => {
  Logger.error(message)
}

export const logMessage = (message: string): void => {
  Logger.info(message)
}
