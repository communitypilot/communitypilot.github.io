$(function(){
  
  //Fixes navigation when user resizes window 
  $(window).resize(function(){
    if(window.innerWidth > 960){
      $('nav').css('margin-left', '0')
      $('#navoverlay').css('display', 'none')
    }else{
      $('nav').css('margin-left', '-100%')
    }
  })
  
  //Mobile Menu Open
  var menuopen = false
  $('#hamburger').click(function(){
    if(!menuopen){
      $('nav').css('margin-left', '0')
      $('#navoverlay').css('display', 'block')
      menuopen = true
    }else{
      $('#navoverlay').click()
    }
  })
  
  //Mobile Menu Close
  $('#navoverlay').click(function(){
    $('nav').css('margin-left', '-100%')
    $('#navoverlay').css('display', 'none')
    menuopen = false
  })
  
  //iFrame Close
  $('#iframe-overlay').click(function(){
    $('#iframe-overlay').css('display', 'none')
    $('#iframe-holder').css('display', 'none')
    var myNode = document.getElementById("iframe-holder")
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild)
    }
  })
  
  
  //Navigation bar after scrolling past reel
  /*
   var scroll_pos = 0;
     $(document).scroll(function() { 
       scroll_pos = $(this).scrollTop()
       if(scroll_pos > 600 && window.innerWidth > 960){
         $("nav").css('background', 'rgba(0,0,0, .4)')
       }else if(scroll_pos < 600 && window.innerWidth > 960){
         $("nav").css('background', 'none')
      }
   })
*/
                         
})//Ready


//Lightbox
function getLightBox(url){
  $('#iframe-overlay').css('display', 'block')
  $('#iframe-holder').css('display', 'block')
  var videoHeight = Math.round((document.getElementById("iframe-holder").offsetWidth/16)*9)
  $('#iframe-holder').css('height', videoHeight)
  var marginTop = (window.innerHeight - videoHeight)/2
  $('#iframe-holder').css('margin-top', marginTop)
  
  if(~url.indexOf('youtube')){      
    var video = '<iframe src="'+url+'?rel=0&autoplay=1" frameborder="0" class="ytiframe" allowfullscreen></iframe>'
    $('#iframe-holder').append(video)
  }
  
  else if(~url.indexOf('vimeo')){
    var video = '<iframe src="'+url+'" frameborder="0" class="ytiframe" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    $('#iframe-holder').append(video)
  }
  else if(~url.indexOf('.swf')){
    var flash = '<iframe src="'+url+'" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>'
    $('#iframe-holder').append(flash)
  }
  else if(~url.indexOf('.jpg')){
    var flash = '<img src="'+url+'" width="100%" height="100%" allowfullscreen></img>'
    $('#iframe-holder').append(flash)
  }
  
  else{
    if(window.innerWidth < 1600){
      $('#iframe-overlay').css('display', 'none')
      $('#iframe-holder').css('display', 'none')
      window.open(url)
    }else{
      var content = '<iframe src="'+url+'" frameborder="0" class="ytiframe" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
      $('#iframe-holder').append(content)
    }
  }
  
}
$(function(){
  FastClick.attach(document.body)
  $('#window-size').html($(window).width()+'x'+$(window).height())
  //Fixes navigation when user resizes window 
  $(window).resize(function(){
    $('#navoverlay').click()
    if(window.innerWidth > 960){//Stretching back to desktop
      $('#navoverlay').css('display', 'none')
      $('nav').css('z-index', '12')
    }else{
      $('nav').css('z-index', '10')
    }
  })
  $(window).scroll(function(){
    if(menuopen){
      $('#navoverlay').click()
    }
  })
  //Mobile Menu Open
  var menuopen = false
  $('#hamburger').click(function(){
    if(!menuopen){
      $('#content').css('margin-left', '220px')
      $('#header-content').css('margin-left', '220px')
      $('#navoverlay').css('display', 'block')
      $('#hamburger i').html('&#xE5CD;')
      $('html').css('overflow-x', 'hidden')
      menuopen = true
    }else{
      $('#navoverlay').click()
    }
  })
  
  //Mobile Menu Close
  $('#navoverlay').click(function(){
    $('#content').css('margin-left', '0px')
    $('#header-content').css('margin-left', '0px')
    $('#navoverlay').css('display', 'none')
    $('#hamburger i').html('&#xE5D2;')
    $('html').css('overflow-x', 'visible')
    menuopen = false
  })
  
  //iFrame Close
  $('#iframe-overlay').click(function(){
    $('#iframe-overlay').css('background', 'rgba(0,0,0,0)')
    $('#iframe-holder').css('margin-top', '0')
    $('#iframe-holder').css('opacity', '0')  
    
    setTimeout(function(){
      $('#iframe-overlay').css('display', 'none')
      $('#iframe-holder').css('display', 'none')
      var myNode = document.getElementById("iframe-holder")
      while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild)
      }
    }, 200) 
  })

  //DEVELOPER MODE
  var devMode = false;
  $('#devmode').on("click", function() {
    
    if(devMode){
      $('*').css('border', 'initial')
      $('.module-hover p').css('border','solid 2px #FFF')
      devMode = false;
      window.alert("Dev Mode Off");
    }
    else{
      devMode = true;
      window.alert("Dev Mode On");
      $('*').css('border', 'solid 1px rgba(255,0,0,.5)')  
    }
  })
  
  
  //Navigation bar after scrolling past reel
  /*
   var scroll_pos = 0;
     $(document).scroll(function() { 
       scroll_pos = $(this).scrollTop()
       if(scroll_pos > 600 && window.innerWidth > 960){
         $("nav").css('background', 'rgba(0,0,0, .4)')
       }else if(scroll_pos < 600 && window.innerWidth > 960){
         $("nav").css('background', 'none')
      }
   })
*/
                         
})//Ready


//Lightbox
function getLightBox(url, title, description){
  $('#iframe-overlay').css('display', 'block')
  $('#iframe-holder').css('display', 'block')
  $('#iframe-holder').css('opacity', '1')
  //$('#iframe-holder').css('overflow', 'hidden')
  var videoHeight = Math.round((document.getElementById("iframe-holder").offsetWidth/16)*9)
  $('#iframe-holder').css('height', videoHeight)
  var marginTop = ((window.innerHeight - videoHeight)/2)-20 //
  $('#iframe-holder').css('margin-top', marginTop)  
  var more = '<div id="more" onclick="getDescription(\'' + title + '\',\'' + description + '\')"><h2></h2><p><p><h5>Learn More ...</h5></div>'
  
  if(~url.indexOf('youtube')){      
    var video = '<iframe src="'+url+'?rel=0&autoplay=1" frameborder="0" class="ytiframe" allowfullscreen></iframe>'
    $('#iframe-holder').append(video)
    $('#iframe-holder').append(more)
  }
  else if(~url.indexOf('vimeo')){
    var video = '<iframe src="'+url+'" frameborder="0" class="ytiframe" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    $('#iframe-holder').append(video)
    $('#iframe-holder').append(more)
  }
  else if(~url.indexOf('embed')){
    var flash = '<iframe src="'+url+'" frameborder="0" width="100%" height="100%" scrolling="no" style="overflow: hidden" allowfullscreen></iframe>'
    $('#iframe-holder').append(flash)
    $('#iframe-holder').append(more)
  }
  else if(~url.indexOf('.jpg')){
    var image = '<img src="'+url+'" width="100%" height="100%" allowfullscreen></img>'
    $('#iframe-holder').append(image)
    $('#iframe-holder').append(more)
  }
  
  else{
    if(window.innerWidth < 1200){
      $('#iframe-overlay').css('display', 'none')
      $('#iframe-holder').css('display', 'none')
      window.open(url)
    }
    else{
      var content = '<iframe src="'+url+'" frameborder="0" class="ytiframe" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
      $('#iframe-holder').append(content)
      $('#iframe-holder').append(more)
    } 
  }
  $('#iframe-overlay').css('background', 'rgba(0,0,0,.8)')
   
}

function getDescription(title, description) {
  $('#more').css({
    'width': '100%',
    'max-height': '45px',
    'padding': '6px 16px 16px 16px',
    'background': '#FFF'
  })
  $('#more h5').html('')
  $('#more h5').css('display','none')
  $('#more').append('<h2>' + title + '</h2><p>' + description + '</p>')
  $('#more h2').css('display','block')
  $('#more p').css('display','block')

  setTimeout(function() {
    $('#more').css('max-height', '400px')
    setTimeout(function() {
      //Reposition vertically centered
      var descHeight = $('#more').height()
      var marginTop = $('#iframe-holder').css('margin-top')
      marginTop = marginTop.slice(0, -2) //Removes 'px'
      var resetMargin = descHeight/2
      $('#iframe-holder').css('margin-top', Math.round(marginTop - resetMargin) + 'px')
      $('#more').attr('onclick','closeDescription(\''+title+'\',\''+description+'\',\''+resetMargin+'\')')
      //Fade in text
      $('#more h2').css('color', '#555')
      $('#more p').css('color', '#555')
    }, 200)
  }, 250)
}

function closeDescription(title, description, resetMargin){
  /*$('#more').css({
    'width': '100px',
    'max-height': '45px',
    'background': '#222',
    'padding': '14px',
    'font-size':'.8em',
    'font-weight':'500',
    'color': '#FFF'
  })*/
  $('#more').css({
    'width': '100px',
    'max-height': '45px',
    'background': '#222',
    'padding': '12px 14px'
  })
  var marginTop = $('#iframe-holder').css('margin-top')
  marginTop = marginTop.slice(0, -2) //Removes 'px'
  $('#iframe-holder').css('margin-top',parseInt(marginTop)+parseInt(resetMargin))
  $('#more h5').css('display','block')
  $('#more h5').html('Learn More...')
  $('#more h2').css('display','none')
  $('#more p').css('display','none')
  //$('#more h2').css('color', 'rgba(0,0,0,0)')
  //$('#more p').css('color', 'rgba(0,0,0,0)')
  setTimeout(function() {
    $('#more h2').html('')
    $('#more p').html('')
    $('#more').attr('onclick','getDescription(\''+title+'\',\''+description+'\')')
  },200)
}


function getDefinition(title, description){
  $("#definition-title").html(title);
  $("#definition-title").css('opacity','1')
  $("#definition-title").css('margin-bottom','.8em')
  $("#definition-description").html(description);
  $("#definition-description").css('opacity','1')
  $("#definition-description").css('margin-bottom','10px')
}

function closeDefinition(){
  $("#definition-title").css('margin-bottom','-1em')
  $("#definition-title").css('opacity','0')
  $("#definition-description").css('opacity','0')
  $("#definition-description").css('margin-bottom','-10px')
}

$(window).scroll(function() {
  var vertical = $(window).scrollTop()
  var docHeight = $(document).height()
  var windowHeight = $(window).height()
  var end = docHeight-windowHeight
  var width = vertical/end*100
  if(width < 95){
    $('#fixed-bar').css('background','rgba(255,255,255,.1')
    $('#fixed-bar').css('width',width+'%')
  }  
  else if(width > 95){
    $('#fixed-bar').css('background','rgba(255,255,255,0')
  }
  $('#window-scroll').html($(window).scrollLeft()+'.'+vertical);
})
$(window).resize(function() {
  $('#window-size').html($(window).width()+'x'+$(window).height())
})

