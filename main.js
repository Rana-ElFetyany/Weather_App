const myAPIKey = `63fe278cbeeb41e8b1f05256241008`
const BaseURL = `https://api.weatherapi.com/v1/forecast.json`
let searchLoc = document.querySelector("#findLocation")

//https://api.weatherapi.com/v1/forecast.json?key=63fe278cbeeb41e8b1f05256241008&q=cairo&days=3

var interface = document.querySelector('.interface')
var contectLink = document.querySelector('.contectLink')
var homeLink = document.querySelector('.homeLink')
var contentPage = document.querySelector('.contentPage')

searchLoc.addEventListener("change", function(){
   getWeather(searchLoc.value) 
})

searchLoc.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        getWeather(searchLoc.value)
    }
})

function displayContentPage() {
    console.log("طب ما اهو صح اهو  ")
    interface.innerHTML = ""


    homeLink.classList.remove("active");
    contectLink.classList.add("active");


    box = `
    <div class="container">
			<div class="pathWay w-100 px-3 py-3 rounded rounded-pill text-white-50">
				<a class="text-white-50 pointer-cursor" onclick="displayhomePage()">Home </a>
				<span>--></span>
				<span class="text-white"> Contact</span>
			</div>

			<div class="row gap-5 mb-5 overflow-hidden">
				<div class="col-md-5 mapSec p-4 ms-5 my-5 position-relative rounded-4">
					<div class="contact-details ">
						<div class="map" data-latitude="-6.897789" data-longitude="107.621735"></div>
						<div class="contact-info position-absolute">
							<address class="text-white-50 d-flex ">
								<img src="https://routeweather.netlify.app/images/icon-marker@2x.png" class="me-2" alt="" width="12" height="19">
								<p>Company Name INC. <br>
								2803 Avenue Street, Los Angeles</p>
							</address>
							
							<a href="#" class="text-white-50 text-decoration-none me-3"><img src="https://routeweather.netlify.app/images/icon-phone@2x.png" class="me-2" alt="" width="19" height="19">+1 800 314 235</a>
							<a href="#" class="text-white-50 text-decoration-none "><img src="https://routeweather.netlify.app/images/icon-envelope@2x.png" class="me-2" alt="" width="16" height="12">contact@companyname.com</a>
						</div>
					</div>
				</div>
				<div class="col-md-5 ms-5 my-5 text-white">
					<h2 class="section-title">Contact us</h2>
					<p class="text-white-50">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur inventore ducimus, facilis, numquam id soluta omnis eius recusandae nesciunt vero repellat harum cum. Nisi facilis odit hic, ipsum sed!</p>
					<form action="#" class="contact-form position-relative">
						<div class="row mb-3">
							<div class="col-md-6"><input type="text" class="form-control py-2 rounded rounded-pill text-white" placeholder="Your name..."></div>
							<div class="col-md-6"><input type="text" class="form-control py-2 rounded rounded-pill text-white" placeholder="Email Addresss..."></div>
						</div>
						<div class="row mb-3">
							<div class="col-md-6"><input type="text" class="form-control py-2 rounded rounded-pill text-white" placeholder="Company name..."></div>
							<div class="col-md-6"><input type="text" class="form-control py-2 rounded rounded-pill text-white" placeholder="Website..."></div>
						</div>
						<textarea name="" class="form-control py-2 rounded rounded-4 text-white mb-3" rows="5" placeholder="Message..."></textarea>
					
						<input type="submit" class="btn rounded rounded-pill text-white border-0 ms position-absolute" placeholder="Send message">
					
					</form>

				</div>
			</div>
		</div>
        
        `

    contentPage.innerHTML = box
}
function displayhomePage() {
    console.log("طب ما اهو صح اهو  ")
    contentPage.innerHTML = ""

    contectLink.classList.remove("active");
    homeLink.classList.add("active");


    box = `<div class="photoSec overflow-hidden position-absolute">
			<img src="images/banner.png" class="w-100" alt="">
		</div>
			<div class="container home-body w-75 mb-5 pb-5">


				<div class="searchLoc d-flex justify-content-center align-items-center mt-5 ">
					<input type="text" class="form-control py-3 rounded-5 mt-5 position-relative border-0 text-white"
						placeholder="Find your location" id="findLocation">
					<button class="btn text-white px-4 py-2 mt-5 rounded-5 position-absolute">Find</button>
				</div>

					<div class="row weatherCards w-100 mt-5">
							<div class="col-md-12">
								<div class="row headsOfCards w-100">
									<div
										class="col-md-4 CardHead1 d-flex justify-content-between align-items-center text-white-50 rounded-start-2 rounded-bottom-0">
										<p class="weekDay fw-bolder mt-3">Sunday</p>

										<p class="todayDate fw-bold mt-3">11/8/2024</p>
									</div>
									<div
										class="col-md-4 CardHead2 d-flex justify-content-center align-items-center text-white-50">
										<p class="weekDay fw-bolder mt-3">Sunday</p>
									</div>
									<div
										class="col-md-4 CardHead1 d-flex justify-content-center align-items-center text-white-50 rounded-end-2">
										<p class="weekDay fw-bolder mt-3">Sunday</p>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row cardsBody text-white-50 w-100">
									<div class="col-md-4 CardBody1 rounded-start-2">
										<p class="fw-bold my-4 " id="location">EGYPT</p>
										<div class="status d-flex justify-content-between align-items-center">
											<h1 class="text-white fw-bold display-1">23°C</h1>
										<img src="images/113.png" width="100px" alt="">
										</div>
										<p class="weatherStatus fw-semibold">Sunny</p>
										<div class="weatherAdd d-flex align-items-center mb-4">
											<span class="me-3 "><img src="images/icon-umberella.png" class="me-2 " alt="">20%</span>
										<span class="me-3 "><img src="images/icon-wind.png" class="me-2 " alt="">18km/h</span>
										<span class="me-3 "><img src="images/icon-compass.png" class="me-2 " alt="">East</span>
										</div>
									</div>
									
									<div class="col-md-4 CardBody2 d-flex justify-content-between align-items-center flex-column">
										<img src="images/113.png" class="mt-4" alt="">	
										<h1 class="text-white text-center fw-bold">23°C</h1>
										<p class="text-center">21°</p>
										<p class="weatherStatus text-center fw-semibold">Sunny</p>
										
									</div>
	
	
									<div class="col-md-4 CardBody1 rounded-end-2 d-flex justify-content-between align-items-center flex-column">
										<img src="images/113.png" class="mt-4" alt="">
										<h1 class="text-white text-center fw-bold">23°C</h1>
										<p class="text-center">21°</p>
										<p class="weatherStatus text-center fw-semibold">Sunny</p>
										
									</div>
								</div>

							</div>
					</div>
				</section>
			</div>
        
        `

    interface.innerHTML = box
}

async function getWeather(country) {
    // let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=63fe278cbeeb41e8b1f05256241008&q=country&days=3`)


    try {
        document.querySelector(".weatherCards").innerHTML = `<div class="loading  d-flex justify-content-center align-items-center mt-5 py-5">
								<div class="loader">
								
								</div>
							</div>`
        let response = await fetch(`${BaseURL}?key=${myAPIKey}&q=${country}&days=3`)
        let finalResponse = await response.json()

        console.log(finalResponse)
        displayWeatherData(finalResponse)
    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter a valid loction or check your internt",
          });
          searchLoc.value = ""
          document.querySelector(".weatherCards").innerHTML =""
    }
}


// function displayWeatherData(data) {
//     let dataArr = data.forecast.forecastday
//     console.log(dataArr);

//     let box = ``;

//     for (i = 0; i < dataArr.length; i++) {

//         const date = new Date(dataArr[i].date)
//         console.log(date)
//         const weekDay = date.toLocaleDateString("en-uk", { weekday: "long" })


//         box += `
//     <div class="col-md-12">
// 								<div class="row headsOfCards w-100">
// 									<div
// 										class="col-md-4 CardHead1 d-flex justify-content-between align-items-center text-white-50 rounded-start-2 rounded-bottom-0">
// 										<p class="weekDay fw-bolder mt-3">${weekDay}</p>

// 										<p class="todayDate fw-bold mt-3">11/8/2024</p>
// 									</div>
// 									<div
// 										class="col-md-4 CardHead2 d-flex justify-content-center align-items-center text-white-50">
// 										<p class="weekDay fw-bolder mt-3">${weekDay}</p>
// 									</div>
// 									<div
// 										class="col-md-4 CardHead1 d-flex justify-content-center align-items-center text-white-50 rounded-end-2">
// 										<p class="weekDay fw-bolder mt-3">${weekDay}</p>
// 									</div>
// 								</div>
// 							</div>
// 							<div class="col-md-12">
// 								<div class="row cardsBody text-white-50 w-100">
// 									<div class="col-md-4 CardBody1 rounded-start-2">
// 										<p class="fw-bold my-4 " id="location">EGYPT</p>
// 										<div class="status d-flex justify-content-between align-items-center">
// 											<h1 class="text-white fw-bold display-1">23°C</h1>
// 										<img src="images/113.png" width="100px" alt="">
// 										</div>
// 										<p class="weatherStatus fw-semibold">Sunny</p>
// 										<div class="weatherAdd d-flex align-items-center mb-4">
// 											<span class="me-3 "><img src="images/icon-umberella.png" class="me-2 " alt="">20%</span>
// 										<span class="me-3 "><img src="images/icon-wind.png" class="me-2 " alt="">18km/h</span>
// 										<span class="me-3 "><img src="images/icon-compass.png" class="me-2 " alt="">East</span>
// 										</div>
// 									</div>

// 									<div class="col-md-4 CardBody2 d-flex justify-content-between align-items-center flex-column">
// 										<img src="images/113.png" class="mt-4" alt="">	
// 										<h1 class="text-white text-center fw-bold">23°C</h1>
// 										<p class="text-center">21°</p>
// 										<p class="weatherStatus text-center fw-semibold">Sunny</p>

// 									</div>


// 									<div class="col-md-4 CardBody1 rounded-end-2 d-flex justify-content-between align-items-center flex-column">
// 										<img src="images/113.png" class="mt-4" alt="">
// 										<h1 class="text-white text-center fw-bold">23°C</h1>
// 										<p class="text-center">21°</p>
// 										<p class="weatherStatus text-center fw-semibold">Sunny</p>

// 									</div>
// 								</div>

// 							</div>

//     `

//         document.querySelector(".weatherCards").innerHTML = box;
//     }
// }


function displayWeatherData(data) {
    let dataArr = data.forecast.forecastday
    console.log(dataArr);

    let box = ``;

    const date1 = new Date(dataArr[0].date)
    const date2 = new Date(dataArr[1].date)
    const date3 = new Date(dataArr[2].date)

    console.log(date1)

    const CurrentWeekDay = date1.toLocaleDateString("en-uk", { weekday: "long" })
    const secWeekDay = date2.toLocaleDateString("en-uk", { weekday: "long" })
    const thiredWeekDay = date3.toLocaleDateString("en-uk", { weekday: "long" })


    box = `
    <div class="col-md-12">
								<div class="row headsOfCards w-100">
									<div
										class="col-md-4 CardHead1 d-flex justify-content-between align-items-center text-white-50 rounded-start-2 rounded-bottom-0">
										<p class="weekDay fw-bolder mt-3">${CurrentWeekDay}</p>

										<p class="todayDate fw-bold mt-3">${dataArr[0].date}</p>
									</div>
									<div
										class="col-md-4 CardHead2 d-flex justify-content-center align-items-center text-white-50">
										<p class="weekDay fw-bolder mt-3">${secWeekDay}</p>
									</div>
									<div
										class="col-md-4 CardHead1 d-flex justify-content-center align-items-center text-white-50 rounded-end-2">
										<p class="weekDay fw-bolder mt-3">${thiredWeekDay}</p>
									</div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="row cardsBody text-white-50 w-100">
									<div class="col-md-4 CardBody1 position-relative top-0 rounded-start-2">
										<span class="fw-bold my-4 position-absolute" id="locationCountry">${data.location.country}</span>
										<span class="fw-bold my-4 position-absolute" id="location">${data.location.name}</span>
										<div class="status d-flex justify-content-between align-items-center">
											<h1 class="text-white fw-bold mt-5 display-1">${data.current.temp_c}°C</h1>
										<img src="https:${data.current.condition.icon}" width="100px" alt="">
										</div>
										<p class="weatherStatus fw-semibold">${data.current.condition.text}</p>
										<div class="weatherAdd d-flex align-items-center mb-4">
											<span class="me-3 "><i class="fa-solid fa-droplet fs-6 me-2"></i> ${data.current.humidity}%</span>
										<span class="me-3 "><img src="images/icon-wind.png" class="me-2 " alt="">${data.current.vis_km}km/h</span>
										<span class="me-3 "><span class="me-3 "><img src="images/icon-compass.png" class="me-2 " alt="">${data.current.wind_dir}</span>
										</div>
									</div>
									
									<div class="col-md-4 CardBody2 d-flex justify-content-between align-items-center flex-column">
										<img src="https:${dataArr[1].day.condition.icon}" class="mt-4" alt="">	
										<h1 class="text-white text-center fw-bold">${dataArr[1].day.maxtemp_c}°C</h1>
										<p class="text-center">${dataArr[1].day.mintemp_c}°</p>
										<p class="weatherStatus text-center fw-semibold">${dataArr[1].day.condition.text}</p>
										
									</div>
	
	
									<div class="col-md-4 CardBody1 rounded-end-2 d-flex justify-content-between align-items-center flex-column">
										<img src="https:${dataArr[2].day.condition.icon}" class="mt-4" alt="">
										<h1 class="text-white text-center fw-bold">${dataArr[2].day.maxtemp_c}°C</h1>
										<p class="text-center">${dataArr[2].day.mintemp_c}°</p>
										<p class="weatherStatus text-center fw-semibold">${dataArr[2].day.condition.text}</p>
										
									</div>
								</div>

							</div>
    
    `

    document.querySelector(".weatherCards").innerHTML = box;

}

// getWeather()

function myCurrentLocation(position){
    // console.log(position)

    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    // console.log(longitude, latitude)

    let myCurrentPosition = `${latitude},${longitude}`

    getWeather(myCurrentPosition)
}


// let date = new Date()
//     console.log(date)
// let weekDay = date.toLocaleDateString("en-us",{weekday: "long"})  //ar-ar for arabic
//     console.log(weekDay)

navigator.geolocation.getCurrentPosition(myCurrentLocation)