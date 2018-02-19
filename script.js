/*jslint browser: true*/
/*global $, jQuery*/  

$(document).ready(() => {
  "use strict"
        
  let entry = {
    searchResults: '',
    removeRandom: () => {
      if(!this.centerRandomRemoved){
        $('.contain3').addClass("animated fadeOut")

        setTimeout( () => {
          $('h2').append('<span style="font-size: 65%"><a href="https://en.wikipedia.org/wiki/Special:Random"' +
                          'target="_blank"> (random)</a></span>')
        },1000)       
        this.centerRandomRemoved = true
      }
    },
    
    search: () => {
      $.ajax( {
        url: 'https://en.wikipedia.org/w/api.php?',
        data: 'action=query&list=search&srsearch=' + entry.searchFor + 
                '&prop=revisions&rvprop=content&format=json&formatversion=2',
        dataType: 'jsonp',
        type: 'GET',
        headers: { 'Api-User-Agent': 'Example/1.0' },
        success: function(data) {
             //alert(data.query.search[0].title + '<br/><br/>' + data.query.search[0].snippet)
                entry.searchResults = data.query
                debugger
        }
    } )
      .fail( function() {
        alert('No workie.')
      })
      .always( function() {
        console.log('Done')
      });
    },

    showSearch: () => {
      setTimeout( () => {
        $('.contain3').html('')
        $('.contain3').removeClass("animated fadeOut")
        $('.contain3').css("padding","20px 0px 0px 30px")
        $('.contain3').html('<div class="col wikiResults"></div>') 
        
        for(let i = 0; i < 10; i++){
            $('.wikiResults').append('<div class="eachResult"><span class="title">' + 
                    entry.searchResults.search[i].title + '</span><span class="desc"> : ' +
                    entry.searchResults.search[i].snippet +'</span></div>')
                    debugger
        }
    },1000)
  }
}                              
        // Section handles Enter keypress and Search button click
        $('#entry').keypress( x => {
            if ( x.charCode == 13 && $('#entry').val() ) {
                keyEnterSubmit()
            }
        })
        
        $('#submit').on('click', () => {
            if ( $('#entry').val() ) {
                keyEnterSubmit()
            }
        })

        // Section handles the main manipulation of the html and script work after entry.
        let keyEnterSubmit = () => {
            entry.searchFor = $('#entry').val()
            entry.removeRandom()
            entry.search()
            entry.showSearch()
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

let exampleData 
// = 
// {
//  "batchcomplete":true,
//  "continue":{"sroffset":10,"continue":"-||revisions"},
//  "query":{"searchinfo":{"totalhits":224474},
//          "search":[{"ns":0,"title":"Car","pageid":13673345,"size":67051,"wordcount":7245,
//             "snippet":"A <span class=\"searchmatch\">car</span> (or automobile) is" +
//             "a wheeled motor vehicle used for transportation. Most definitions of" +
//             "<span class=\"searchmatch\">car</span> say they run primarily on roads," + 
//             "seat one to eight people","timestamp":"2018-02-11T18:23:41Z"},
//      {"ns":0,"title":"Central African Republic","pageid":5478,"size":71631,"wordcount":7018,"snippet":"Coordinates: 7°N 21°E﻿ / ﻿7°N 21°E﻿ / 7; 21 The Central African Republic (<span class=\"searchmatch\">CAR</span>; Sango: Ködörösêse tî Bêafrîka; French: République centrafricaine  pronounced [ʁepyblik","timestamp":"2018-02-15T22:37:43Z"},{"ns":0,"title":"The Car","pageid":2938431,"size":11103,"wordcount":1360,"snippet":"The <span class=\"searchmatch\">Car</span> is a 1977 American thriller film directed by Elliot Silverstein and written by Michael Butler, Dennis Shryack and Lane Slate. The film stars James","timestamp":"2018-02-16T01:53:56Z"},{"ns":0,"title":"Car classification","pageid":381336,"size":53002,"wordcount":5408,"snippet":"Governments and private organizations have developed <span class=\"searchmatch\">car</span> classification schemes that are used for innumerable purposes including regulation, description","timestamp":"2018-02-09T03:49:27Z"},{"ns":0,"title":"Elon Musk's Tesla Roadster","pageid":55947330,"size":47446,"wordcount":3932,"snippet":"electric sports <span class=\"searchmatch\">car</span> that served as the dummy payload for the Falcon Heavy test flight on February 6,"}]
// }
// }