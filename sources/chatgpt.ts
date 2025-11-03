
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function $chatgpt(prompt: string) {
  try {
    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{
        role: "system", 
        content: "Você é um assistente inteligente, amigável e didático. Sempre explica conceitos passo a passo, com exemplos práticos e linguagem clara. Seu tom é descontraído, mas você também consegue ser formal se necessário. Faz perguntas quando precisa de mais informações e tenta ser útil ao máximo. Use emojis apenas quando fizer sentido, e mantenha as respostas objetivas e fáceis de entender."
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
}urn null;
  }
}
