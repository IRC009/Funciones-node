# Getting Started

Este es un ejemplo de uso de la libreria de Puppeteer para nodejs donde se hace un web scrapping de Mercado Libre.

La función:

`await input.type("Ropa de mujer");`

sirve para elegir lo que se va abuscar en el marketplace y este devuelve la lista de productos y sus precios.

```javascript
const itemList = await page.$$eval('.ui-search-layout__item', elements => {
    return elements.map(el => {
      const title = el.querySelector('.ui-search-item__title').textContent.trim();
      const price = el.querySelector('.andes-money-amount').getAttribute('aria-label');
      const imgSrc = el.querySelector('img').getAttribute('src'); // Obtener el src de la imagen
      
      return { title, price, imgSrc };
    });
  });
  ```
  Esta otra ordena los elementos y extrae los datos de interes con querySelector