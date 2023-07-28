// const url = ;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8a424129c9mshdef92f546835a05p184932jsna11d2507af65',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
cityName.innerHTML = city
    let promise = fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    promise.then((Response) => {
        return Response.json()
    }).then((Response) => {
        // console.log(Response.temp)
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
    })
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getweather(city.value)
})

getweather("Delhi")

let obj = {
    kanpur: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=kanpur',
    shuklaganj: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=shuklaganj',
    delhi: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi',
    lakhnow: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lucknow',
    prayagraj: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=allahabad',
    jhasi: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=jhansi',

}

// 

//
for(let i =0;i<Object.keys(obj).length;i++){
   
    let promise = fetch(obj[Object.keys(obj)[i]], options)
    promise.then((Response)=>{
        return Response.json()
    }).then((Response)=>{
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
console.log(obj[Object.keys(obj)[0]])

// weather for other places.....


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }