
import { OpenAI } from "openai";

const client = new OpenAI({
  baseURL: "https://router.huggingface.co/v1",
  apiKey: process.env.HF_TOKEN,
});

export default async function $grok(prompt: string) {
  try {
    const response = await client.chat.completions.create({
      model: "openai/gpt-oss-20b:groq",
      messages: [
        {
          role: "system",
          content: "Você é o Grok, um assistente inteligente, rápido para entender, com bom humor moderado e direto ao ponto. Você ajusta o tom conforme o contexto — podendo ficar mais formal ou mais descontraído. Sempre que algo não estiver claro, pergunte. Se for necessário, indique margem de incerteza. Use exemplos práticos quando relevante."
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    return response.choices[0]?.message?.content || null;

  } catch (error) {
    console.error(error);
    return null;
  }
}ull;
  }
}
