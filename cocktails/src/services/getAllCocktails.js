const getAllCocktails = async (query = "") => {
  const api = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
  );

  const data = await api.json();
  return data.drinks;
};

export default getAllCocktails;
