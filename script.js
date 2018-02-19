/*jslint browser: true*/
/*global $, jQuery*/  

$(document).ready(() => {
  "use strict"
        
  let entry = {
    removeRandom: () => {
      if(!this.centerRandomRemoved){
        $('.contain3').addClass("animated fadeOut")

        setTimeout(() => {
          $('h2').append('<span style="font-size: 65%"><a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"> (random)</a></span>')
        },1000)       
        this.centerRandomRemoved = true
      }
    },

    showSearch: () => {
         setTimeout(() => {
           $('.contain3').html('')
           $('.contain3').removeClass("animated fadeOut")
           $('.contain3').css("padding","20px 0px 0px 30px")
           $('.contain3').html('<div class="col wikiResults"></div>') 
           
           for(let i = 0; i < 10; i++){
                $('.wikiResults').append('<div class="eachResult"><span class="title">' + 
                    'Title</span><span class="desc"> : Wiki information for ' +
                    'one of the search results.</span></div>')
           }
        },1000)
  }
}                              
        // Section handles Enter keypress and Search button click
        $('#entry').keypress( x => {
            if(x.charCode == 13 && $('#entry').val()){
                keyEnterSubmit()
            }
        })
        
        $('#submit').on('click', () => {
            if($('#entry').val()){
                keyEnterSubmit()
            }
        })

        // Section handles the main manipulation of the html and script work after entry.
        let keyEnterSubmit = () => {
         // if(entry.searchFor != $('#wikiEntry').val()){
            entry.searchFor = $('#entry').val()
            entry.removeRandom()
            //entry.search()
            entry.showSearch()
         // }
          
        }
        
 /* $.ajax( {
    url: 'https://en.wikipedia.org/w/api.php?',
    data: 'action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2',
    dataType: 'jsonp',
    type: 'GET',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    success: function(data) {
         $(".wik").html(JSON.stringify(data));
    }
} )
.fail(function(){
  $(".wik").html('No work.');
  console.log('Error');
})
.always( function(){
  console.log('Done');
});*/
    
})

/*

"search" data:
'action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2'

"random" data: 'action=query&generator=random&grnnamespace=0&grnlimit=2&prop=info&format=json&formatversion=2'

$(document).ready(function(){
  $.getJSON("https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=dog&prop=revisions&rvprop=content&format=json&formatversion=2", function(a){
  $(".wik").html(JSON.stringify(a));
}, 'jsonp')
  .fail( function(){
    $(".wik").html("No workie.");
  })
  .always( function(){
    console.log('Done');
  });
});
*/

