const query = async function () {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
query();
