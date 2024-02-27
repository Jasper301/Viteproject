export function show_joke(element) {
  async function getjoke() {
    console.log("täällä ollaan");
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        console.log(response);
        if (!response.ok)  throw new Error('virhe haku!!');

        const jokes = response.json();
        console.log(jokes);
        console.log(jokes.value);

        document.querySelector('#show_joke').innerHTML = jokes.value

    } catch (error) {
        // jos tulee virhe
        console.log(error);    }
  }

  console.log(element);
  element.addEventListener("click", () => getjoke());
}
