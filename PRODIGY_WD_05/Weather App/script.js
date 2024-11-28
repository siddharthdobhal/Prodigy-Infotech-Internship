// Fetch weather data from RapidAPI
async function fetchWeatherData(city) {
    const apiKey = "0d7bad350emsh512197a55257812p146112jsnda9507c213b3";
    const apiUrl = "https://weatherapi-com.p.rapidapi.com/current.json";
  
    try {
      const response = await fetch(`${apiUrl}?q=${city}`, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const data = await response.json();
      displayWeather(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
    }
  }
  
  // Display the fetched weather data on the webpage
  function displayWeather(data) {
    const weatherDetails = `
      <h3>Weather for ${data.location.name}, ${data.location.country}</h3>
      <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
      <p><strong>Condition:</strong> ${data.current.condition.text}</p>
      <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
      <p><strong>Wind Speed:</strong> ${data.current.wind_kph} kph</p>
    `;
  
    document.getElementById("weatherDetails").innerHTML = weatherDetails;
  }
  
  // Attach event listener to search button
  document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value.trim();
    if (city) {
      fetchWeatherData(city);
    } else {
      alert("Please enter a city name.");
    }
  });
  