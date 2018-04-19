const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = '8287c2848177adc5bfb5564573ed7168'

export default {
  get (local) {
    const promise = new Promise((resolve, reject) => {
      fetch(`${URL}?q=${local}&units=metric&appid=${API_KEY}`)
        .then((response) => {
          if (response.status === 200) {
            response.json().then((data) => {
              resolve(data)
            })
          } else {
            response.json().then((error) => {
              reject(error)
            })
          }
        })
        .catch((erro) => {
          reject(erro)
        })
    })

    return promise
  }
}
