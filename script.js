const apiKey = 'YOUR_API_KEY'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key

window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        displayWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    });
  } else {
    alert('Geolocation is not supported by your browser');
  }
});

function displayWeather(data) {
  const weatherElement = document.getElementById('weather');
  const { name, main, weather } = data;

  const temperature = main.temp;
  const description = weather[0].description;

  weatherElement.innerHTML = `Current weather in ${name}: ${temperature}°C, ${description}`;
}
