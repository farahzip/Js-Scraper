# Js-Scraper
A simple web scraper that fetches all links from a given adress.

## Setting up the `.env` file

To use Js-Scraper with a custom URL for scraping, you'll need to set up an `.env` file to store your target website's URL securely.

1. Install `dotenv` package to load environment variables from a `.env` file.

   ```bash
   npm install dotenv
2. In the root of your project, create a new file called .env.
3. Open the .env file and add your target URL like this:
   ```bash
   PAGE_URL=https://example.com
4. Run your scraper as usual. The URL from the .env file will be used for scraping.
   ```bash
   node scraper.js

