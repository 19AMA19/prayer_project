let selectOption = document.getElementById("selected-city")
let city_title = document.getElementById("city_name")
let bgImage = document.querySelector(".bgImage")



function getPrayersTimings(cityName){
    let params = {
        country:"sa",
        city :cityName
    }
    
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
        })
        .then(function (response) {
        let prayTimes = response.data.data.timings
        let date    = response.data.data.date.gregorian.date
        let weekday = response.data.data.date.hijri.weekday.ar
        document.getElementById("Fajr").innerHTML = prayTimes.Fajr
        document.getElementById("Sunrise").innerHTML = prayTimes.Sunrise
        document.getElementById("Dhuhr").innerHTML = prayTimes.Dhuhr
        document.getElementById("Asr").innerHTML = prayTimes.Asr
        document.getElementById("Maghrib").innerHTML = prayTimes.Maghrib
        document.getElementById("Isha").innerHTML = prayTimes.Isha
        document.getElementById("city_date").innerHTML = `${weekday} ${date}`
        })
        .catch(function (error) {
        console.log(error);
        },
    )
}


    let cities = [
        {
            arabicName: "المدينة المنورة",
            name: "medina",
            imageUrl: "./images/pic2.jpeg"
        },
        {
            arabicName: "تبوك",
            name: "Tabūk",
            imageUrl: "./images/pic3.jpeg"

        },
        {
            arabicName: "حائل",
            name: "Ḩā'il",
            imageUrl: "./images/pic1.jpeg"

        },
        {
            arabicName: "جازان",
            name: "Jāzān",
            imageUrl: "./images/pic4.jpeg"

        }

        
    ]

    for(city of cities){
        const content = `
        <option>${city.arabicName}</option>
        `
        selectOption.innerHTML += content
    }




    selectOption.addEventListener("change", function(){
        city_title.innerHTML = this.value
        let cityName = ""
        for(let city of cities){
            if(city.arabicName == this.value){
                cityName = city.name
                bgImage.style.background = 'url('+ city.imageUrl +')'
            }
            getPrayersTimings(cityName)
        }
    })
