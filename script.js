
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '8a424129c9mshdef92f546835a05p184932jsna11d2507af65',
        'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

// logic for fetch data and handle error........
const getweather = (city) => {
    let promise = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)

    promise.then((Response) => {
        if (!Response.ok) {
            throw new Error('Network response was not ok');
        }
        return Response.json()
    }).then((Response) => {
        // console.log(Response.temp)
        cityName.innerHTML = city
        cloud_pct.innerHTML = Response.cloud_pct
        feels_like.innerHTML = Response.feels_like
        humidity.innerHTML = Response.humidity
        humidity2.innerHTML = Response.humidity
        max_temp.innerHTML = Response.max_temp
        min_temp.innerHTML = Response.min_temp
        sunrise.innerHTML = Response.sunrise
        temp.innerHTML = Response.temp
        temp2.innerHTML = Response.temp
        wind_degrees.innerHTML = Response.wind_degrees
        wind_speed.innerHTML = Response.wind_speed
        wind_speed2.innerHTML = Response.wind_speed
    }).catch(function (error) {
        if (city === "") {
            alert("please fill city name!")
        } else {
            alert("In this city weather not found!")
        }
        
    })
}

getweather("Delhi")

// logic for search city weather
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})

let obj = {
    kanpur: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanpur',
    shuklaganj: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shuklaganj',
    delhi: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',
    lakhnow: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow',
    prayagraj: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=allahabad',
    jhasi: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jhansi',

}

//
for (let i = 0; i < Object.keys(obj).length; i++) {

    let promise = fetch(obj[Object.keys(obj)[i]], options)
    promise.then((Response) => {
        return Response.json()
    }).then((Response) => {
        // console.log(response)
        let x = document.querySelector(`.data${i}`)
        // let y = x.querySelector(".cloud_pct")
        x.querySelector(".cloud_pct").innerHTML = Response.cloud_pct
        x.querySelector(".feels_like").innerHTML = Response.feels_like
        x.querySelector(".humidity").innerHTML = Response.humidity
        x.querySelector(".max_temp").innerHTML = Response.max_temp
        x.querySelector(".min_temp").innerHTML = Response.min_temp
        x.querySelector(".sunrise").innerHTML = Response.sunrise
        x.querySelector(".temp").innerHTML = Response.temp
        x.querySelector(".wind_degrees").innerHTML = Response.wind_degrees
        x.querySelector(".wind_speed").innerHTML = Response.wind_speed

    })
}


//logic for dark mode...

document.querySelector(".mode-div").addEventListener('click',()=>{
    let body = document.querySelector("body")
    console.log(body)
   let boll = document.querySelector(".mode-boll")
   boll.classList.toggle("mode-click")
   body.classList.toggle("dark-mode")
   body.querySelector("nav").classList.toggle("dark-mode")
})
