import dotenv from "dotenv"
import OpenAI from "openai";

dotenv.config()
const client = new OpenAI({
    apiKey: process.env.OPENAI_KEY,
});

export default async function writeStory(userInput) {
    const response = await client.responses.create({
        model: "gpt-4.1",
        input: `Write a one-sentence bedtime story about a unicorn and a ${userInput}.`
    });
    console.log("openAI.js response:", response.output_text);
    return response.output_text
}
