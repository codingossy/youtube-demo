import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
        maxResults: 50,
      },
    headers: {
      'X-RapidAPI-Key': '37b4463b9fmshf49d809f9292d3ap1daae5jsncd492740fba1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const dataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;

    // destructure response into data and return the data
    // pass the url as a parameter

  }