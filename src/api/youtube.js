import axios from 'axios';



const KEY = 'AIzaSyBbukMLUAS6fvFTin-4_2NDsSmi49xo7lY';
 
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});