const data = require('./database/data');
const News = require('./model/news-Schema');

const DefaultData = async () => {
    try {
        // await News.deleteMany({})
        await News.insertMany(data);
        console.log("Data imported successfully")
    }
    catch (error) {
        console.log('Error ', error.message);
    }
}

module.exports = DefaultData;