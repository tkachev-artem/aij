import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Маршруты
app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from Express + Bun!' })
})

app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Запуск
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})