function updateValue(value){
    document.getElementById('range-value').textContent = value;
}


  function next1(){
    document.getElementById("gomb1").style.display = "none";
    document.getElementById("elsoForm").style.display = "none";
    document.getElementById("masodikForm").style.display = "inherit";
    document.getElementById("gomb2").style.display = "flex";
    document.getElementById("gomb3").style.display = "flex";
  }
  function next2(){
    document.getElementById("gomb2").style.display = "none";
    document.getElementById("gomb3").style.display = "none";
    document.getElementById("masodikForm").style.display = "none";
    document.getElementById("harmadikForm").style.display = "inherit";
    document.getElementById("gomb4").style.display = "flex";
    document.getElementById("gomb5").style.display = "flex";
  }
  function next3(){
    document.getElementById("gomb4").style.display = "none";
    document.getElementById("gomb5").style.display = "none";
    document.getElementById("harmadikForm").style.display = "none";
    document.getElementById("negyedikForm").style.display = "inherit";
    document.getElementById("gomb6").style.display = "flex";
    document.getElementById("submit").style.display = "flex";
    document.getElementById("reset").style.display = "flex";
  }

  function back1(){
    document.getElementById("gomb2").style.display = "none";
    document.getElementById("gomb3").style.display = "none";
    document.getElementById("masodikForm").style.display = "none";
    document.getElementById("elsoForm").style.display = "inherit";
    document.getElementById("gomb1").style.display = "flex";
  }
  function back2(){
    document.getElementById("gomb4").style.display = "none";
    document.getElementById("gomb5").style.display = "none";
    document.getElementById("harmadikForm").style.display = "none";
    document.getElementById("masodikForm").style.display = "inherit";
    document.getElementById("gomb2").style.display = "flex";
    document.getElementById("gomb3").style.display = "flex";
  }
  function back3(){
    document.getElementById("gomb6").style.display = "none";
    document.getElementById("submit").style.display = "none";
    document.getElementById("reset").style.display = "none";
    document.getElementById("negyedikForm").style.display = "none";
    document.getElementById("harmadikForm").style.display = "inherit";
    document.getElementById("gomb4").style.display = "flex";
    document.getElementById("gomb5").style.display = "flex";
  }

$(document).ready(function() {

  $(".center").slick({
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
          {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerPadding: '60px',
                slidesToShow: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
                arrows: false,
                centerPadding: '60px',
                slidesToShow: 1
            }
          }
      ]
  });


});