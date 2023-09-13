import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"

import { getAllPrompts } from "./routes/get-all-prompts"
import { uploadVideoRoute } from "./routes/upload-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompletionRoute } from "./routes/generate-ai-completion"

const port = 3333

const app = fastify()

app.register(fastifyCors, {
  origin: "*",
})

app.register(getAllPrompts)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  port,
}).then(() => {
  console.log("HTTP Server Running!")
  console.log(`http://localhost:${port}`)
})