const getAllCocktails = async (query = "") => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`
    );
  
    const data = await api.json();
    
    return  data.drinks;
  };
  


  const getRandomCocktail = async () => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  
    const data = await api.json();
    return data.drinks;
  };
  
  const getCocktailDetails = async (id) => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
  
    const data = await api.json();
    return data.drinks;
  };
  
  export {getRandomCocktail,  getAllCocktails, getCocktailDetails};
  