export const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyParts',
  
  
  headers: {
    'X-RapidAPI-Key': '115458bef0msh1fb38b6be6be309p16e3d0jsn12ad5eff646f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const fetchData = async (url , options) =>
{
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}