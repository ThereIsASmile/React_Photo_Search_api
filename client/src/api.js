import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID S6M6z2dE83xevpXVis1Kh-rNgGF5QziCdQCCw_G38qY'
        },
        params: {
            query: term,
        }
    });
    return response.data.results;
};

export default searchImages;