import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API_KEY, dangerouslyAllowBrowser: true });

export async function main(searchText) {
  const chatCompletion = await getGroqChatCompletion(searchText);
  const content = chatCompletion.choices[0]?.message?.content;

  if (!content) return [];

  try {
    return JSON.parse(content);
  } catch (err) {
    console.error("Invalid JSON from Groq:", content);
    return [];
  }
}
export async function getGroqChatCompletion(searchText) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `Act as a movie recommendation engine.
        Based on the user input, recommend 10 movies.
        Requirements:
          - Return ONLY a JSON array
          - No numbering
          - No explanations
          - No extra text
          - Ensure movies are real and well known(Try to give the latest movie)
          - The recommended movies must be highly relevant to the user's request.
          - Relevance to the user's query is the most important factor.
          - Only when multiple movies are equally relevant, prioritize languages in this order:
            1. Hindi
            2. English
            3. Other languages
          - Do not recommend movies that are not closely related to the user's query.
          - Do not include the input movie

        Format for each movie:

        {
          "title": "Movie Name",
          "release_date": "YYYY"
        }

        Example output:

        [
          {
            "title": "Sholay",
            "release_date": "1975"
          },
          {
            "title": "Psycho",
            "release_date": "1960"
          }
        ]`
      },
      {
        role: "user",
        content: searchText
      }
    ],
    model: "openai/gpt-oss-20b",
  });
}