import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

const API_KEY = 'AIzaSyBhJb000GgEpiFHEfTHMCPL-ZKe6wDrCDI';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: API_KEY,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  // return [videos, onTermSubmit];
  return { videos, search };
};

export default useVideos;
