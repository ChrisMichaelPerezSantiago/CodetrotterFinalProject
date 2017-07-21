// npm packages
const axios = require('axios');
const cheerio = require('cheerio');

// base URL
const baseURL = "http://www.crunchyroll.com/";


const Crunchyroll = {
  async function getAllSeries(){
    const {data} = await axios.get(baseURL);
    console.log(data);

  },

  getEpisodes(series){

  },

  getEpisode(episode){

  },

  getMySeries(){

  },

  search(query){

  },
};

Crunchyroll.getAllSeries();

module.exports = Crunchyroll;
