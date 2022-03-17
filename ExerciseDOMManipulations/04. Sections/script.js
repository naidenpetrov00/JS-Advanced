function create(words) {
   const SELECTORS = {
      content: "#content",
      div: 'div',
      p: 'p',
      clickEvent: 'click',
      dblClickEvent: 'dblclick',
   };
   const STYLES = {
      hideDisplay: 'none',
      showDisplay: 'inline-block',
      redColor: 'red',
   }

   let container = document.querySelector(SELECTORS.content);

   for (const word of words) {
      const divElement = document.createElement(SELECTORS.div);
      const pElement = document.createElement(SELECTORS.p);

      pElement.textContent = word;
      pElement.style.display = STYLES.hideDisplay;

      divElement.appendChild(pElement);
      divElement.addEventListener(SELECTORS.clickEvent, () => {
         pElement.style.display = STYLES.showDisplay;
      });
      divElement.addEventListener(SELECTORS.dblClickEvent, () => {
         pElement.style.color = STYLES.redColor;
      })

      container.appendChild(divElement);
   }
}