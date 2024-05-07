export const openaiApi = {
  async getParaphraseText(content: string, fullContent: string) {
    await fetch('https://api.openai.com/v1/chat/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_APP_OPEN_AI_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content:
                `You are a helpful paraphraser.You will take the following text and rewrite it in a way that is easier to read and understand. The text is written in a formal style, and you should rewrite it in a more casual style. You should not change the meaning of the text, but you can add or remove information as needed to make it easier to read. You should also try to make the text shorter if possible. You should write the paraphrased text as if you were explaining it to a friend. You must only reply the paraphrased text without any extra commenting or explanation. You should return the matching language of the original text.
                For example: 
                Full text: Cats are very cute animals.
                Paraphrased text: cute animals.
                Result: adorable animals.
            
                Now, here is the text you need to paraphrase: ${content} Here is the full paragraph: ${fullContent}`,
          },
          {
            role: 'user',
            content: 'Hello world',
          },
        ],
      }),
    })
    // const chatCompletion = await Response.json()
    // return chatCompletion?.choices?.[0]?.message?.content || ''
  },

}
