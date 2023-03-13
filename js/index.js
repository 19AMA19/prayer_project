let selectOption = document.getElementById("selected-city")
let city_title = document.getElementById("city_name")
let bgImage = document.querySelector("#bgImage")
let content = document.getElementById("content")

function getPrayersTimings(cityName){
    let params = {
        country:"sa",
        city :cityName
    }
    
    axios.get('https://api.aladhan.com/v1/timingsByCity', {
        params: params
        })
        .then(function (response) {
        let prayTimes = response.data.data.timings
        
        let dateGregorian = response.data.data.date.gregorian.date
        let dateHijri   = response.data.data.date.hijri.date

        let weekday = response.data.data.date.hijri.weekday.ar
        document.getElementById("Fajr").innerHTML = prayTimes.Fajr
        // document.getElementById("Sunrise").innerHTML = prayTimes.Sunrise
        document.getElementById("Dhuhr").innerHTML = prayTimes.Dhuhr
        document.getElementById("Asr").innerHTML = prayTimes.Asr
        document.getElementById("Maghrib").innerHTML = prayTimes.Maghrib
        document.getElementById("Isha").innerHTML = prayTimes.Isha
        document.getElementById("weekday").innerHTML = `${weekday}`
        document.getElementById("gregorian_date").innerHTML = `${dateGregorian}`
        document.getElementById("hijri_date").innerHTML = `${dateHijri}`
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
            imageUrl: "https://hotelsareamazing.com/wp-content/uploads/2020/08/Best-Hotels-in-Medina-Saudi-Arabia.jpg",
            about: {
                title: "وجهة تاريخية مهيبة",
                content: "المدينة المنورة هي أول عاصمة في تاريخ الإسلام، وثاني أقدس الأماكن لدى المسلمين بعد مكة المكرمة، ما يجعلها إحدى الوجهات الرئيسية لملايين المسلمين من مختلف أنحاء العالم. تتمركز المدينة حول المسجد النبوي، الذي شيده الرسول الكريم بنفسه، وأيضًا المكان الذي دفن فيه. المدينة المنورة هي المكان الذي عاش فيه النبي محمد (ص) وأسس فيها أول دولة في الإسلام بعد هجرته من مكة المكرمة سنة 622 ميلادية. وتلك السنة على قدر كبير من الأهمية في تاريخ الإسلام، حيث تمثل بدء التقويم الهجري. وكانت المدينة المدينة المنورة تسمى بيثرب، ثم تم تغير اسمها إلى المدينة المنورة إثر دخول النبي محمد (ص) إليها، وأصبحت زيارة المدينة بمثابة حلم حياة الكثير من المسلمين."
            } 
        },
        {
            arabicName: "تبوك",
            name: "Tabūk",
            imageUrl: "./images/pic3.jpeg",
            about: {
                title: "أراضٍ خصبة وكنوز أثرية",
                content: "لطالما كانت مدينة تبوك، عاصمة منطقة تبوك في شمال غرب السعودية، نقطة استراحة للحجاج الأردنيين والمصريين. وتظهر ثقافتها الغنية جليًا في سوق الطواحين، الذي يشتهر ببيع السجاد المزركش وأغطية الخيم المصنوعة من جلد الماعز. وعادة ما تتدفق جموع الزوار لزيارة المواقع الأثرية القديمة والموقع المذكور في قصة النبي موسى الذي سكن شرق المدينة لمدة عقد من الزمن. تمثّل المدن الشاطئية الساحرة في تبوك، مثل حقل وشرما، بداية الساحل السعودي، وتتميز بمياه شفافة وشواطئ نقية. كما تتوفر المزيد من التضاريس الطبيعية التي يمكنك استكشافها: مثل المقابر المنحوتة في مغاير شعيب، أو عيون موسى بالقرب من مقنا حيث تتدفّق الينابيع الطبيعية أسفل أشجار النخيل، أو منطقة طيب الاسم المذهلة، وهي عبارة عن وادٍ من صخور الغرانيت المنحدرة يفصل بينه وبين خليج العقبة الفيروزي الطريق فقط."
            } 
        },
        {
            arabicName: "حائل",
            name: "Ḩā'il",
            imageUrl: "./images/pic1.jpeg",
            about: {
                title: "زاخرة بالتاريخ ويكتنفها الغموض",
                content: " تقع حائل بين جبل شمر شمالًا وجبل سلمى جنوبًا. وكانت في يوم ما عاصمة كافة الصحراء العربية وموطنًا لأساطير مثل حاتم الطائي، الشاعر العربي الذي ذاع صيته من خلال قصص مثل (التي تُعرف أيضًا باسم . أما اليوم، فهي عاصمة المنطقة الشمالية الوسطى والتي تحمل الاسم نفسه، وتعد محطة هامة للحجاج المتجهين إلى مكة المكرمة. وتشتهر مدينة حائل أيضًا باستضافة الفعاليات العالمية، ومنها مهرجان الصحراء الذي يحتفي بثقافة المنطقة، ورالي حائل الدولي، حيث تقام سباقات رالي السيارات وعربات الدفع الرباعي والدرجات النارية عبر صحراء النفوذ وحائل والبقاع والغزالة وقرية أم القلبان. فإذا كنت مولعًا بالتاريخ والثقافة والمغامرة، وجه نظرك إلى حائل."
            } 
        },
        {
            arabicName: "جازان",
            name: "Jāzān",
            imageUrl: "./images/pic4.jpeg",
            about: {
                title: "عن المدينة",
                content: "تقع منطقة جازان في الجزء الجنوبي الغربي من المملكة العربية السعودية على ساحل البحر الأحمر، بين خطي عرض 16 درجة والطول 42 درجة، وتقدر مساحتها بحوالي 35 ألف كيلو متر مربع ، وتعتبر هذه المنطقة همزة وصل بين التجارة البرية والبحرية للمنطقة الجنوبية إذ ان بها ميناء جازان ثالث موانئ المملكة من حيث السعة وتعتبر البوابة الرئيسية لواردات الجزء الجنوبي الغربي من المملكة وهي محطة استراحة للحجيج القادمين من اليمن بحكم موقعها على الطريق الذي يربط بين اليمن ومكة المكرمة، وتضم سد وادي جازان من اكبر سدود المملكة إذ تبلغ طاقته التخزينية 7 ملايين متر مكعب وهي غنية بالإنتاج الزراعي، كما تضم معالم تاريخية قديمة ."
            } 
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
                document.getElementById("title").innerHTML = city.about.title
                document.getElementById("content").innerHTML = city.about.content
                bgImage.style.background = 'url('+ city.imageUrl +')'
            }
            getPrayersTimings(cityName)
        }
    })
