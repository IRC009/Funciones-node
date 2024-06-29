const puppeteer = require("puppeteer");

const webpage = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.mercadolibre.com.co/");

  await page.waitForSelector("#cb1-edit");
  const input = await page.$("#cb1-edit");

  // Escribe dentro del input
  await input.type("Ropa de mujer");
  await page.click(".nav-search-btn");

  // Espera unos segundos para que la página cargue completamente
  await new Promise(r => setTimeout(r,10000))

  await page.waitForSelector('.ui-search-layout__item');

  const itemList = await page.$$eval('.ui-search-layout__item', elements => {
    return elements.map(el => {
      const titleElement = el.querySelector('.ui-search-item__title');
      const priceElement = el.querySelector('.andes-money-amount');
      const imgElement = el.querySelector('img');

      const title = titleElement ? titleElement.textContent.trim() : 'Título no encontrado';
      const price = priceElement ? priceElement.getAttribute('aria-label') : 'Precio no encontrado';
      const imgSrc = imgElement ? imgElement.getAttribute('src') : 'URL de imagen no encontrada';

      return { title, price, imgSrc };
    });
  });

  console.log(itemList);
  await browser.close();
};

webpage();

