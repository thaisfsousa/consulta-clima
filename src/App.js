import { useState } from 'react'

function Tempo() {
  const [city, setcity] = useState('')
  const [weatherforecast, setWeatherForecast] = useState(null)
  const searchForecastWeather = () => {
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt
    `)
      .then(response => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then(data => {
        setWeatherForecast(data)
      })
  }

  const handleCityChange = event => {
    setcity(event.target.value)
  }

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark mb-4">
          <a className="navbar-brand" href="s">
            EBAC WEATHER
          </a>
        </nav>
        <main className="align-items:center" className="container">
          <div className="jumbotron">
            <h1> Verifique o clima </h1>
            <p className="lead">Insira sua cidade para iniciar a busca.</p>
            <div className="mb-4">
              <div className="thais">
                <input
                  type="text"
                  className="form-control"
                  value={city}
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <button
              className="btn btn-lg btn-primary"
              onClick={searchForecastWeather}
            >
              {' '}
              Pesquisar
            </button>
            {weatherforecast ? (
              <div>
                <div className="mt-4 d-flex align-items-center">
                  <img
                    src={weatherforecast.current.condition.icon}
                    alt="weather icon"
                  />
                  <div>
                    <h3>
                      {' '}
                      Hoje o dia em {city} está:{' '}
                      {weatherforecast.current.condition.text}{' '}
                    </h3>
                    <p> Temperatura: {weatherforecast.current.temp_c} º</p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </main>
      </div>
    </>
  )
}
export default Tempo
