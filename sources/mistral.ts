
import { Mistral } from '@mistralai/mistralai';

const client = new Mistral({
  apiKey: process.env.MISTRAL_API_KEY,
});

export default async function $mistral(prompt: string) {
  try {
    const response = await client.chat.complete({
      model: "mistral-medium-latest",
      messages: [
        {
          role: "system",
          content: "Você é um assistente inteligente e preciso, especializado em fornecer respostas claras e bem estruturadas. Você é direto ao ponto, mas também consegue explicar conceitos complexos de forma acessível. Mantém um equilíbrio entre objetividade e contexto útil. Use exemplos práticos quando relevante e pergunte quando algo não estiver claro."
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
}
