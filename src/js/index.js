const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/stat/`);
    const data = await response.json();
    console.log(data.results);
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
