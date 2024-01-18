
var marvel = {
    render: function() {
      var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=922d2e2dee8044b8d530e8290cb86b15&hash=b9f4ce33f9c69e554245275fabd98cfa&limit=100&offset=0"
      var url2 = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=922d2e2dee8044b8d530e8290cb86b15&hash=b9f4ce33f9c69e554245275fabd98cfa&limit=100&offset=100"
      var url3 = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=922d2e2dee8044b8d530e8290cb86b15&hash=b9f4ce33f9c69e554245275fabd98cfa&limit=100&offset=200"
      var url4 = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=922d2e2dee8044b8d530e8290cb86b15&hash=b9f4ce33f9c69e554245275fabd98cfa&limit=100&offset=300"
      var url5 = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=922d2e2dee8044b8d530e8290cb86b15&hash=b9f4ce33f9c69e554245275fabd98cfa&limit=100&offset=400"
      
      var message = document.getElementById("message");
      var footer = document.getElementById("footer1");
      var marvelContainer = document.getElementById("marvel-container")
      var marvelContainer2 = document.getElementById("marvel-container2")
      var marvelContainer3 = document.getElementById("marvel-container3")
      var marvelContainer4 = document.getElementById("marvel-container4")
      var marvelContainer5 = document.getElementById("marvel-container5")
      $.ajax({
        url: url,
        type: "GET",
        
        success: function(data) {
          footer.innerHTML = data.attributionHTML;
          let string = "";
          string += "<div class='rows'>";
  
          for(let i = 0; i<data.data.results.length;i+=1) {
            let element = data.data.results[i];
            
            string += "<div class='col-md-5'>";
            string += " <img src='" +element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
            string += "<h6>" + element.name + "</h6>";
            string += "</div>";
  
            if((i+1) % 4 == 0) {
              string += "</div>";
              string += "<div class='rows'>";
            
              
            }
          }
  
          marvelContainer.innerHTML = string;
        },
        error: function() {
          message.innerHTML("Sorry!")
        }
      })
  
      $.ajax({
        url: url2,
        type: "GET",
        
        success: function(data) {
          footer.innerHTML = data.attributionHTML;
          let string = "";
          string += "<div class='rows'>";
  
          for(let i = 0; i<data.data.results.length;i+=1) {
            let element = data.data.results[i];
            
            string += "<div class='col-md-5'>";
            string += " <img src='" +element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
            string += "<h6>" + element.name + "</h6>";
            string += "</div>";
  
            if((i+1) % 3 == 0) {
              string += "</div>";
              string += "<div class='rows'>";
            }
          }
  
          marvelContainer2.innerHTML = string;
        },
        error: function() {
          message.innerHTML("Sorry!")
        }
      })
  
     
      $.ajax({
        url: url3,
        type: "GET",
        
        success: function(data) {
          footer.innerHTML = data.attributionHTML;
          let string = "";
          string += "<div class='rows'>";
  
          for(let i = 0; i<data.data.results.length;i+=1) {
            let element = data.data.results[i];
            
            string += "<div class='col-md-5'>";
            string += " <img src='" +element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
            string += "<h6>" + element.name + "</h6>";
            string += "</div>";
  
            if((i+1) % 3 == 0) {
              string += "</div>";
              string += "<div class='rows'>";
            }
          }
  
          marvelContainer3.innerHTML = string;
        },
        error: function() {
          message.innerHTML("Sorry!")
        }
      })
  
      $.ajax({
        url: url4,
        type: "GET",
        
        success: function(data) {
          footer.innerHTML = data.attributionHTML;
          let string = "";
          string += "<div class='rows'>";
  
          for(let i = 0; i<data.data.results.length;i+=1) {
            let element = data.data.results[i];
            
            string += "<div class='col-md-5'>";
            string += "<a href='" + element.urls[0].url+ "'target='_blank'>"
            string += " <img src='" +element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
            string += "</a>"
            string += "<h6>" + element.name + "</h6>";
            string += "</div>";
  
            if((i+1) % 3 == 0) {
              string += "</div>";
              string += "<div class='rows'>";
            }
          }
  
          marvelContainer4.innerHTML = string;
        },
        error: function() {
          message.innerHTML("Sorry!")
        }
      })
      
      $.ajax({
        url: url5,
        type: "GET",
        
        success: function(data) {
          footer.innerHTML = data.attributionHTML;
          let string = "";
          string += "<div class='rows'>";
  
          for(let i = 0; i<data.data.results.length;i+=1) {
            let element = data.data.results[i];
            
            string += "<div class='col-md-5'>";
            string += "<a href='" + element.urls[0].url+ "'target='_blank'>"
            string += " <img src='" +element.thumbnail.path +"/portrait_fantastic."+element.thumbnail.extension+"' />";
            string += "</a>"
            string += "<h6>" + element.name + "</h6>";
            string += "</div>";
  
            if((i+1) % 3 == 0) {
              string += "</div>";
              string += "<div class='rows'>";
            }
          }
  
          marvelContainer5.innerHTML = string;
        },
        error: function() {
          message.innerHTML("Sorry!")
        }
      }) 
  
  
      
    }
  };
  
  marvel.render();
  
  
  $(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 0){
        $('.scroll-top').show();
      }else{
        $('.scroll-top').hide();
      }
  
      // scroll spy 
  
      $('section').each(function(){
  
        let height = $(this).height();
        let offset = $(this).offset().top - 200;
        let id = $(this).attr('id');
        let top = $(window).scrollTop();
  
        if(top > offset && top < offset + height){
          $('.navbar ul li a').removeClass('active')
          $('.navbar').find(`[href="#${id}"]`).addClass('active');
        }
  
      });
  
    });
  
   
  
  });  