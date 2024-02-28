


// yeh query just 1 ky lye thi means that ek element ky lye


// var elem1=document.querySelector("#elem1");

// var imgelem=document.querySelector("#elem1 img");

// elem1.addEventListener("mousemove",function(dets){
//     imgelem.style.left=dets.x+"px";
//     imgelem.style.top=dets.y+"px";
// });
// elem1.addEventListener("mouseenter", function(dets) {
//     imgelem.style.opacity = 1;
//  });




//  elem1.addEventListener("mouseleave", function(dets) {
//     imgelem.style.opacity = 0;
//  });

//  elem1.addEventListener("mousehover", function(dets) {
//     imgelem.style.opacity = 1;
//  });
var elem = document.querySelectorAll(".elem");

elem.forEach(function(val) {
    val.addEventListener("mouseenter", function() {
        val.childNodes[3].style.opacity = 1;
         });
         val.addEventListener("mousemove", function(dets) {
            val.childNodes[3].style.left=dets.x+"px";
            val.childNodes[3].style.top=dets.y+"px";
             });
    

    val.addEventListener("mouseleave", function() {
        val.childNodes[3].style.opacity = 0;
    });
});