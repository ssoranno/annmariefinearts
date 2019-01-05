var storage = firebase.storage();
var database = firebase.database();

function alertStuff(){
    alert("hi");
}

var imageRef = database.ref('images');
imageRef.on('value', gotData, errData);

function gotData(data){
  console.log(data.val());
  var snapshot = data.val();
  var imageName = Object.keys(snapshot);
  for(var i =0; i<imageName.length; i++){
    var name = imageName[i];
    var URL = snapshot[name].URL;
    var description = snapshot[name].description;
    console.log("Name:",name);
    console.log("URL:",URL);
    console.log("Description:", description);
    var head = document.createElement("h2");
    head.innerHTML = name;
    var source = document.getElementById("imageList");
    source.appendChild(head);
    var img = document.createElement("img");
    img.src = URL;
    img.width = 500;
    img.height = 500;
    source.appendChild(img);
    var d = document.createElement("p");
    d.innerHTML = description;
    source.appendChild(d);
    var buyButton = document.createElement("button");
    buyButton.setAttribute("onclick","navigateToBuy()");
    //buyButton.onclick = "navigateToBuy()";
    buyButton.innerHTML = "Buy " + name + " Photo";
    source.appendChild(buyButton);
  }
  
}
function errData(data){
  console.log("Error:");
  console.log(data);
}

function navigateToBuy(){
  //alert("navigated");
  location = "buy.html";
}

