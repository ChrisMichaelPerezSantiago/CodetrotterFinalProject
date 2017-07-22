// npm packages
import axios from 'axios';
import cheerio from 'cheerio';


// my package
import db from '../db';

// base URL
const baseURL = "http://www.crunchyroll.com";

export const Crunchyroll = {
   async getAllSeries(page = 0){
    // load catalogue
    const {data} = await axios.get(`${baseURL}/videos/anime/popular/ajax_page?pg=${page}`);

    // create cheerio cursor
    const $ = cheerio.load(data);
    const series = $('li.group-item').map((index, el) =>  {
        // title and url
        const element = $(el);
        const a = $('a' , element);
        const title = a.attr('title');
        const url = `{baseURL}${a.attr('href')}`;

        // get title
        const img = $('img' , element);
        const image = img.attr('src');

        // amount of videos and serie data
        const data = $('.series-data',element);
        const counter = parseInt(data.text().trim().replace('Videos','').trim() , 10);

        // return series data
        return{
          title,
          url,
          image,
          counter,
        };
    }).get();

   // store information in the data-base
    await db.series.bulkDocs(series);
    return series;
  },

  getEpisodes(series){},
  getEpisode(episode){},
  getMySeries(){},
  search(query){},
};
