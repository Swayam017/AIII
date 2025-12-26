require("dotenv").config()
let genai = require("@google/genai");
let ai = new genai.GoogleGenAI({
    apiKey:process.env.GEMINI_API_KEY
});

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain what is AI in a few words",
  });
  console.log(response.text);
}

 main();