import { z } from 'zod'

export const HelloSchema = z.object({
    message: z.string(),
})

export type HelloResponse = z.infer<typeof HelloSchema>