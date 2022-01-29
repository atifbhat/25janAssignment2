// var reviews = [{
//         id: 1,
//         name: "susan smith",
//         job: "web developer",
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
//         text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
//     },
//     {
//         id: 2,
//         name: "anna johnson",
//         job: "web designer",
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
//         text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
//     },
//     {
//         id: 3,
//         name: "peter jones",
//         job: "intern",
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
//         text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
//     },
//     {
//         id: 4,
//         name: "bill anderson",
//         job: "the boss",
//         img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
//         text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
//     },
// ];









console.log("starting get data");
url = "https://api2.binance.com/api/v3/ticker/24hr";
fetch(url).then((response) => {
    console.log("Inside first then")
    return response.json();

}).then((data) => {
    console.log("inside second then");
    console.log(data);









    var imgElement = document.getElementById("person-img");
    var symbol = document.getElementById("symbol");
    var firstId = document.getElementById("firstId");
    var highPrice = document.getElementById("highPrice");
    var lowPrice = document.getElementById("lowPrice");
    var priceChangePercent = document.getElementById("priceChangePercent");
    var prevBtn = document.querySelector("#prev-btn");
    var nextBtn = document.querySelector("#next-btn");
    var randomBtn = document.querySelector(".random-btn");





    prevBtn.addEventListener("click", prevClick);
    nextBtn.addEventListener("click", nextClick);
    randomBtn.addEventListener("click", randomaize);









    var currentIndex = 0;




    function prevClick() {
        if (currentIndex === 0) {
            currentIndex = 100 - 1;
        } else {
            currentIndex--;
        }
        console.log(currentIndex);
        updateUserDetails();
    }

    function nextClick() {
        if (currentIndex === 100 - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        console.log(currentIndex);
        updateUserDetails();
    }

    function randomaize() {
        currentIndex = Math.floor(Math.random() * 100);
        console.log(currentIndex);
        updateUserDetails();
    }

    function updateUserDetails() {

        symbol.innerText = data[currentIndex].symbol;
        firstId.innerText = data[currentIndex]["firstId"];
        highPrice.innerText = data[currentIndex]["highPrice"];
        lowPrice.innerText = data[currentIndex]["lowPrice"];
        priceChangePercent.innerText = data[currentIndex]["priceChangePercent"];
    }



});













// for (i = 0; i < 100; i++) {
//     var tr = document.createElement("tr");
//     var td = document.createElement("td");
//     var as = document.createElement("td");
//     var alpha = document.createElement("td");
//     var domains = document.createElement("td");
//     var country = document.createElement("td");

//     // var td = document.createElement("td");
//     td.innerText = data[i].symbol;
//     as.innerText = data[i]["firstId"];
//     alpha.innerText = data[i]["highPrice"];
//     country.innerText = data[i]["lowPrice"];
//     domains.innerText = data[i]["priceChangePercent"];
//     // td.innerText = data[i].country;
//     // td.innerText = data[i]['state-province']; 
//     // tr.appendChild(td);
//     // tr.appendChild(td);
//     tr.appendChild(td);
//     tr.appendChild(as);
//     tr.appendChild(alpha);
//     tr.appendChild(domains);
//     tr.appendChild(country);
//     table.appendChild(tr);