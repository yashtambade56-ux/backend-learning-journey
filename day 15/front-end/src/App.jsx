import { useState } from "react";

function App() {

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);

    function foo() {
        fetch("http://localhost:8000/home")
            .then((res) => res.text())
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function getWeather() {
        fetch(`http://localhost:8000/weather/${city}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setWeather(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            {/* ============= day 15 ============= */}
            {/* -------------- btn (back-end connect) -------------- */}
            <button onClick={foo}>Show Data</button>

            <br /><br />

            {/* -------------- wether data -------------- */}

            <input
                type="text"
                placeholder="Enter city"
                onChange={(e) => setCity(e.target.value)}
            />

            <button onClick={getWeather}>Get Weather</button>

            {weather && (
                <h2>
                    {weather.city}: {weather.temperature}°C
                </h2>
            )}
        </>
    );
}

export default App;