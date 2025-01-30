require('dotenv').config();
const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

const PAGE_URL = process.env.PAGE_URL;

axios.get(PAGE_URL)
    .then(response => {
        const $ = cheerio.load(response.data);
        const title = $('h1').text();
        console.log(`Page title: ${title}`);

        const baseUrl = new URL(PAGE_URL).origin;

        $('a').each((index, element) => {
            const link = $(element).attr('href');
            const linkText = $(element).text().trim();

            if (link) {
                const fullLink = link.startsWith('http') ? link : `${baseUrl}${link}`;
                console.log(`${linkText}: ${fullLink}`);
            }
        });
    })
    .catch(error => {
        console.error('Error fetching the page: ', error);
    });
