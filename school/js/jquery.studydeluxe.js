$.fn.extend({

  map:function(){
    /*Mapbox accesstoken*/
    mapboxgl.accessToken = 'pk.eyJ1IjoibGFyc29sb2YiLCJhIjoiY2tlaThiM2x2MjNmMTJybWlicnN1aHl0cCJ9.U_cW4cmsun342DWdVZKywA';
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/satellite-streets-v11', // stylesheet location
      center: [17.947567, 59.405679], // starting position [lng, lat]
      zoom: 14 // starting zoom
    });
  },


  /*Item using .loadPg function only needs ID with html file name*/
  pgLoadBtn:function(){
    this.click(function(){//on element click

      var fileSrc= "html/" + this.id + ".html"; //file dir

      $("#main-container").load(fileSrc); //load func
    });
  },

  collapse:function(){
    this.click(function(){

      $(".collapsedContent").toggleClass("d-block");

    });
  },



});