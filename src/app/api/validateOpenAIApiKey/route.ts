import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  const { apiKey } = req.body

  if (!apiKey) {
    return res.status(400).json({ error: 'API key is required' })
  }

  const openai = new OpenAI({ apiKey })

  try {
    await openai.models.list()
    return res.status(200).json({ valid: true })
  } catch (err: any) {
    if (err.response && err.response.status === 401) {
      return res.status(401).json({ valid: false })
    }
    console.error('Error verifying the API key:', err)
    return res.status(500).json({ error: 'Internal Server Error' })
  }
}
