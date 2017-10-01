   
     //(document).ready( function(){ 

        $.getJSON('gallery.json', function(data) {   
         
    $nimg.each(data.items, function(i,f) {
        ("ul").append("<li>URL: "+f.url+"</li><li>Caption: "+f.caption+"</li><br />");

    })
           

    
      //});
