import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Artist {
  name: string;
}

interface Track {
  item: {
    name: string;
    artists: Artist[];
  };
  is_playing: boolean;
}

const Spotify: React.FC = () => {
  const [track, setTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchCurrentlyPlaying = async () => {
      try {
        const response = await axios.get<Track>('/api/now-playing');
        setTrack(response.data);
      } catch (error) {
        console.error('Error fetching track:', error);
      }
    };

    fetchCurrentlyPlaying();
  }, []);

  return (
    <div>
      <h1>My Spotify Now Playing</h1>
      {track && track.is_playing ? (
        <div>
          <h2>Currently Playing:</h2>
          <p>
            {track.item.name} by{' '}
            {track.item.artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
      ) : (
        <p>Not currently playing anything.</p>
      )}
    </div>
  );
};

export default Spotify;
