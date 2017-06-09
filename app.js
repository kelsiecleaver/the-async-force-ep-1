(function(){
  console.log("sanity check");


  var person4Container = document.getElementById('person4');
//Creating Person 4 Darth Vador

  function reqListener(){
    var response = JSON.parse(this.responseText);
    var person4 = document.createElement("div");
    person4.innerHTML = response.name;
    person4Name.appendChild(person4);
    }

    var kReq = new XMLHttpRequest();
    kReq.addEventListener("load", reqListener);
    kReq.open("GET", "http://swapi.co/api/people/4/");
    kReq.send();

//Creating Darth Vador Home World
  function reqListener1(){
    var response = JSON.parse(this.responseText);
    var person4Home = document.getElementById('person4HomeWorld');
    person4Home.innerHTML = response.name;
  }
    var sReq = new XMLHttpRequest();
    sReq.addEventListener("load",reqListener1);
    sReq.open("GET", "http://www.swapi.co/api/planets/1/");
    sReq.send();

// Creating person 14 Han Solo
  function reqListener2(){
    var response = JSON.parse(this.responseText);
    var person14 = document.getElementById("person14Name");
    person14.innerHTML = response.name;
  }
    var pReq = new XMLHttpRequest();
    pReq.addEventListener("load", reqListener2);
    pReq.open("GET", "http://swapi.co/api/people/14/");
    pReq.send();

//Creating Han Solo Species
  function reqListener3(){
    var response = JSON.parse(this.responseText);
    var person14Species = document.getElementById("person14Species");
    person14Species.innerHTML = response.name;
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener3);
  oReq.open("GET", "http://swapi.co/api/species/1/");
  oReq.send();

//Creating Film List
  var filmListContainer =  document.getElementById("filmList");

    function filmListener(){
      console.log("hello world");
    var res = JSON.parse(this.responseText);
    console.log("hello", res);

    for(var i = 0; i < res.results.length;  i++){
      var film = document.createElement("li");
      film.className = "film";
      filmListContainer.appendChild(film);
      console.log("filmmm",film);

      var filmTitle = document.createElement("h2");
      filmTitle.className = "filmTitle";
      filmTitle.innerHTML = res.results[i].title;
      film.appendChild(filmTitle);

      var planets = document.createElement("h3");
      planets.className = "planets";
      planets.innerHTML = "Planets:";
      film.appendChild(planets);

     var filmPlanets = document.createElement("ul");
     filmPlanets.className = "filmPlanets";
    film.appendChild(filmPlanets);



//Getting the film planets
console.log("res.....",res.results[i].planets.length);
    console.log("purple", planets);
    for(var p = 0; p < res.results[i].planets.length; p++){

        (function(myPlanets){
          console.log("sanity check world");
        var pReq = new XMLHttpRequest();
        pReq.addEventListener("load", function(){
        var pRes = JSON.parse(this.responseText);
        console.log("planets", myPlanets);
          var planetListItemContainer = document.createElement("li");
          planetListItemContainer.className = "planet";

          var planetTitleHeading = document.createElement("h4");
          planetTitleHeading.className = "planetName";
          planetListItemContainer.innerHTML = pRes.name;
          planetListItemContainer.appendChild(planetTitleHeading);
          myPlanets.appendChild(planetListItemContainer);
        });
        pReq.open("GET", res.results[i].planets[p]);
        pReq.send();
      })(filmPlanets);
}
}

  }
  var lReq = new XMLHttpRequest();
  lReq.addEventListener("load", filmListener);
  lReq.open("GET", "http://swapi.co/api/films/");
  lReq.send();
})();
