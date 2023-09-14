const data = require('../database/data');
const News = require('../model/news-Schema')


const getNews = async (request, response) => {
    try {
        let data = await News.find({});
        response.status(200).json(data);
    }
    catch (error) {
        console.log(error)
        response.status(500).json({ message: data.message });
    }
}

module.exports = getNews