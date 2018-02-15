/*jslint browser: true*/
/*global $, jQuery*/  

$(document).ready(() => {
  "use strict"
        
  let entry = {
    removeRandom: () => {
      if(!this.centerRandomRemoved){
        $('.contain3').addClass("animated fadeOut")

        setTimeout(()=>{
          //$('.contain3').html('')
          $('h2').append('<a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"><span style="font-size: 65%"> (random)</span></a>')
        },1000)       
        this.centerRandomRemoved = true
      }
    },
    showSearch: () => {
      
         setTimeout(()=>{
           $('.contain3').html('')
           for(let i=0; i<10; i++){
           $('.contain3').removeClass("animated fadeOut")
          $('.contain3').append('<div class="row"><div class="col results"><h4>' + entry.searchFor + ' Now is that time for all good men.</h4></div></div>')
           }
        },1000)
        
    
  }
}                              

        $('#entry').keypress(x => {
            if(x.charCode == 13 && $('#entry').val()){
                keyEnterSubmit()
            }
        })
        
        $('#submit').on('click', () => {
            if($('#entry').val()){
                keyEnterSubmit()
            }
        })

        let keyEnterSubmit = () => {
         // if(entry.searchFor != $('#wikiEntry').val()){
            entry.searchFor = $('#entry').val()
            entry.removeRandom()
            //entry.search()
            entry.showSearch()
         // }
          
        }
    
        //1.Check wikipedia for search results.
        //2.Have JSON object in variable to work with.
        //3.Create divs where search results will go to for display.
        //4.Allow for the search the be completed again.
        //5.Style divisions.
        //6.
        
        
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
    






