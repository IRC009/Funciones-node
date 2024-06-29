const puppeteer = require("puppeteer")


const webpage = async () => {
  const browser = await puppeteer.launch({ headless: false});
  const page = await browser.newPage();

  await page.goto("https://www.mercadolibre.com.co/");

  await page.waitForSelector("#cb1-edit");
  const input = await page.$("#cb1-edit");

  // Escribe dentro del input
  await input.type("Ropa de mujer");
  await page.click(".nav-search-btn");

  await new Promise(r => setTimeout(r,30000))

  await page.waitForSelector('.ui-search-layout__item');

  const itemList = await page.$$eval('.ui-search-layout__item', elements => {
    return elements.map(el => {
      const title = el.querySelector('.ui-search-item__title').textContent.trim();
      const price = el.querySelector('.andes-money-amount').getAttribute('aria-label');
      const imgSrc = el.querySelector('img').getAttribute('src'); // Obtener el src de la imagen
      
      return { title, price, imgSrc };
    });
  });
  
  console.log(itemList)
browser.close()
};

webpage();

