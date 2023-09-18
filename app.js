//3a58609ebf78f61a2606f34c5f69c322
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
export const getWeatherDta = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a58609ebf78f61a2606f34c5f69c322&lang=ru&units=metric`);
        return await response.json();
    } catch (error) {
        console.error("Не удалось получить данные");
    }
};