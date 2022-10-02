
// const axios = require("axios");

export const ApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY
    
  }
};

export const YoutubeApioptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchdata=async(url,options)=>{
const response= await fetch(url,options);
const data=await response.json();
return data;
}