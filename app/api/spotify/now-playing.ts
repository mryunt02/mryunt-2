import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your personal access token

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(
      'https://api.spotify.com/v1/me/player/currently-playing',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching track:', error);
    res.status(400).json({ error: error.response.data });
  }
}
