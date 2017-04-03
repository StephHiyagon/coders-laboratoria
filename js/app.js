var img=document.getElementsByTagName("img");
var select = document.getElementById('select');
select.addEventListener("change", function(){
  switch (select.value) {
    case "promoChile1":
      clase="Chile1";
      break;

    case "promoLima1":
      clase="Lima1";
      break;

    case "promoLima2":
      clase="Lima2";
      break;

    }
    add(clase);
  });
  function add(item){
    console.log(item);
    for(var i=0; i<img.length;i++){
      if(img[i].className==item){
        console.log(img[i].className);
        img[i].style.display="inline-block";
      }
      else{
        img[i].style.display="none";
      }
    }
  }
