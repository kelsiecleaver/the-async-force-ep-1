(function(){
  console.log("sanity check");


  var person4Container = document.getElementById('person4');

  function reqListener(){
    var response = JSON.parse(this.responseText);
    var person4 = document.createElement("div");
    person4.innerHTML = response.name;
    person4Name.appendChild(person4);
  }
  function reqListener1(){
    var response = JSON.parse(this.responseText);
    var person4Home = document.getElementById('person4HomeWorld');
    person4Home.innerHTML = response.name;
    person4HomeWorld.appendChild(person4Home);

  }
  function reqListener2(){
    var response = JSON.parse(this.responseText);
    var person14 = document.getElementById("person14Name");
    person14.innerHTML = response.name;
    person14name.appendChild(person14);
  }

  function reqListener3(){
    var response = JSON.parse(this.responseText);
    var person14Species = document.getElementById("person14Species");
    person14Species.innerHTML = response.name;
    person14Species.appendChild(person14Species);
  }
  function filmListener(){
    var response = JSON.parse(this.responseText);
    var filmList = document.getElementById("filmList");
    filmList.innerHTML = response.name;
    filmList.appendChild(filmList);
  }

  function getPerson(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://swapi.co/api/people/4/");
  oReq.send();
}

function getPerson14(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener2);
  oReq.open("GET", "http://swapi.co/api/people/14/");
  oReq.send();
}
  function getHome(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load",reqListener1);
    oReq.open("GET", "http://www.swapi.co/api/planets/1/");
    oReq.send();
  }
  function getHome14(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener3);
    oReq.open("GET", "http://swapi.co/api/species/1/");
    oReq.send();
  }
  function getFilm(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", filmListener);
    oReq.open("GET", " http://swapi.co/api/films/");
    oReq.send();
  }





getPerson();
getHome();
getPerson14();
getHome14();
getFilm();
})();
