const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://en.wikipedia.org/wiki/Cat')
    .then(response=> {
        const $ = cheerio.load(response.data);
        const title = $('h1').text();
        console.log(`Page title: ${title}`);

        $('a').each((index, element) => {
            const link = $(element).attr('href');
            const linkText = $(element).text().trim();
            if (link && link.startsWith('/wiki/')) {
                console.log(`${linkText}: https://en.wikipedia.org${link}`);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching the page: ', error);
    });