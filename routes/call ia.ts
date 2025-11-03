import Fastify from "fastify";
import $chatgpt from "../sources/chatgpt";
import $grok from "../sources/grok";
import $mistral from "../sources/mistral";

export const app = Fastify({ logger: true });

app.get('/', async (request, reply) => {
  return { mode: `💥 Como usar esse APIs?, chame uma das rotas: /chatgpt, /grok, /mistral com o método POST e envie um JSON com a chave "prompt" e o valor da sua pergunta. Exemplo: {
"prompt": "Qual é a capital do Brasil?" }`}
})
app.post('/chatgpt', async (request, reply) => {
  const { prompt } = request.body as {
    prompt: string
  }
  const response = await $chatgpt(prompt);
  return { response };
   
})
app.post('/grok', async (request, reply) => {
  const { prompt } = request.body as {
    prompt: string
  }
  const response = await $grok(prompt);
  return { response }
})
app.post('/mistral', async (request, reply) => {
  const { prompt } = request.body as {
    prompt: string
  }
  const response = await $mistral(prompt);
  return { response };
});


