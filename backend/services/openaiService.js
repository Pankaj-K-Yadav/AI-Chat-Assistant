const OpenAI = require("openai");
require("dotenv").config();

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

async function getAIResponse(message) {
  try {
    const response = await client.chat.completions.create({
      model: process.env.MODEL,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return response.choices[0].message.content;
  } catch (error) {
  console.error("OPENAI ERROR:", error.response?.data || error.message);
  return "AI service error";
  }
}

module.exports = {
  getAIResponse,
};