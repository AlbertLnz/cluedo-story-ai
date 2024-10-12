import { Game } from '@/types/games'

const apiKey = process.env.OPENAI_APIKEY

export const getStoryOfOpenAI = async (): Promise<Game | null> => {
  const prompt = `
    Escribe una historia corta en un solo párrafo al estilo de Cluedo, con cuatro personajes en una situación en la que uno es el impostor. El lector debe identificar al impostor basándose en las pistas del párrafo.

    Luego, proporciona los siguientes detalles en los siguientes párrafos de manera exhaustiva tal y como te indico a continuación, sin títulos:
    • El primer párrafo debe contener la historia completa.
    • El segundo párrafo debe listar solo los nombres de los cuatro personajes únicamente. Ejemplo: Mark, Anthony, Jack, Michael
    • El tercer párrafo debe indicar el nombre del impostor únicamente. Ejemplo: Jack
    • El cuarto párrafo debe ofrecer la respuesta con el razonamiento que explica cómo se llegó a la conclusión.
  `

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'Eres el autor del juego del Cluedo Anthony E. Pratt',
          },
          { role: 'user', content: prompt },
        ],
        temperature: 0,
        max_tokens: 3000,
      }),
    })

    // console.log(response)

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }

    const data = await response.json()
    const text = data.choices[0].message.content

    // console.log(data)
    // console.log(text)

    const paragraphs = text
      .trim()
      .split(/\n\s*\n/)
      .map((paragraph: string) => paragraph.trim())

    // console.log('PARAG', paragraphs)

    if (paragraphs.length !== 4) {
      throw new Error('La respuesta no contiene exactamente 4 párrafos.')
    }

    const game: Game = {
      history: paragraphs[0],
      characters: paragraphs[1],
      impostor_character: paragraphs[2],
      solution: paragraphs[3],
      language: 'es',
    }

    // console.log('GAME:', game)

    return game
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
