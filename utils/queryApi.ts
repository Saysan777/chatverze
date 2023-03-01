import openai from "./chatGpt";

const query = async (prompt: string, chatId: string,  model: string) =>{
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,       //for making chatgpt more creative higher-> more creative
        top_p: 1,
        max_tokens: 1000,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res=> res.data.choices[0].text).catch(err => `ChatGpt is was unable to answer for that! (Error: ${err.message})`)

    return res;
}

export default query;