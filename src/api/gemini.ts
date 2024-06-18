import {
    GoogleGenerativeAI,
    HarmBlockThreshold,
    HarmCategory,
  } from '@google/generative-ai'
  
  const MODEL_NAME = 'gemini-1.5-pro-latest'
  const API_KEY = import.meta.env.VITE_APP_GOOGLE_AI_STUDIO_API_KEY as string
  
  const genAI = new GoogleGenerativeAI(API_KEY)
  const model = genAI.getGenerativeModel({ model: MODEL_NAME })
  
  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  }
  
  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ]
  
  const createChat = {
    getParaphraseFullContent: async (fullContent: string): Promise<string> => {
      try {
        const chat = model.startChat({
          generationConfig,
          safetySettings,
          history: [
            {
              role: 'system',
              parts: [
                {
                  text: `You are a helpful paraphraser. You should return the matching language of the original text. 
                  You should not change the meaning of the text 
                  You must only reply to the paraphrased text without any extra comments or explanations. 
                  For example: 
                  Fulltext: Cats are very cute animals
                  Result: Felines are known for their adorableness
                  
                  For another example: 
                  Fulltext: Cats are very cute animals
                  Result: With their playful antics and soft fur, it's no wonder cats are considered some of the most adorable creatures on the planet
                  
                  For another example: 
                  Fulltext: Mèo là loài rất dễ thương 
                  Result: Mèo là những sinh vật vô cùng đáng yêu 
                  
                  For another example: 
                  Fulltext: Mèo là loài rất dễ thương 
                  Result: Nhờ vẻ ngoài dễ thương và tính cách độc đáo, mèo là một trong những loài động vật được yêu thích nhất thế giới 
                  Now, please paraphrase according to my request`,
                },
              ],
            },
            {
              role: 'model',
              parts: [{ text: ` Now please paraphrase this: ${fullContent}` }],
            },
          ],
        })
        if (fullContent.length > 0) {
          const result = await chat.sendMessage(fullContent)
          const response = result.response
          return response.text()
        }
        return 'nothing to paraphrase 😔'
      }
      catch (error) {
        return ''
      }
    },
  }
  
  export default createChat