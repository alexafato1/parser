

window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    ///
    let textNodes = [];

    function recurcy(element) {
    element.childNodes.forEach(node => {
      
      if (node.nodeName.match(/^H\d/)) {
          const obj = {
              header: node.nideName,
              content: node.textContent
          };
        textNodes.push(node.textContent)

      } else {
          
          recurcy(node);
      }
    });
  }
  recurcy(body);
  
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(textNodes)
  })
  .then(response => response.json())
  .then(json => console.log(json))
///
})