/*
  fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
*/

// O mesmo código acima, porém mais clara e limpa:
async function fetchProdutos(url) {
  const response = await fetch(url);
  const json = await response.json();
  return json;
}

fetchProdutos('https://ranekapi.origamid.dev/wp-json/api/produto');