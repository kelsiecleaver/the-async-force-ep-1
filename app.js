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

  function getPerson(){
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", reqListener);
  oReq.open("GET", "http://swapi.co/api/people/4/");
  oReq.send();
}
  function getHome(){
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load",reqListener1);
    oReq.open("GET", "http://www.swapi.co/api/planets/1/");
    oReq.send();
  }
getPerson();
getHome();

})();
