




document.addEventListener('DOMContentLoaded',function(event){
  var addPeople = document.getElementById('button');

  addPeople.addEventListener('click', function(){

    var name = document.getElementById('name').value;
    var li = document.createElement('li')
    li.innerHTML= name
    var peopleList = document.getElementById('randomPeople')
    peopleList.appendChild(li)

  })

})
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
