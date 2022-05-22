const getRandomCocktail = async () => {
    const api = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/random.php`
    );
  
    const data = await api.json();
    return data.drinks;
  };
  
  export default getRandomCocktail;