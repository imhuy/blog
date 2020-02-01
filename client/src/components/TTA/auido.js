window.Formaweb = window.Formaweb || {};

window.Formaweb.Player = function() {
  'use strict';
  
  var audio;
  var playlist;
  var len;
  var current;

  init();
  function init(){
    current = 0;
    audio = $('audio')[0];
    
    playlist = [
      {name: 'Neon', path: 'http://hiperload.com/s/jm4i99w4f/s.mp3', id: 'neon'},
      {name: 'Modern', path: 'http://hiperload.com/s/kn0h81b5p/s.mp3', id: 'modern'},
      {name: 'iReport', path: 'http://hiperload.com/s/ke2h15z3y/s.mp3', id: 'ireport'},
      {name: 'Bright', path: 'http://hiperload.com/s/vb8q20z8u/s.mp3', id: 'bright'}
    ];
    
    len = playlist.length - 1;

    // audio.volume = 0.10;
    run(playlist[0], audio);

    audio.addEventListener('ended', function(e){
      next();
      run(playlist[current], audio);
    });
    
    $('.audio.next').on('click', function(){
      next();
      run(playlist[current], audio);
      
      return false;
    });
    
    $('.audio.prev').on('click', function(){
      prev();
      run(playlist[current], audio);
      
      return false;
    });
    
    $('.audio.play').on('click', function(){
      var music_id = $(this).attr('data-music-id');
      
      if(music_id != undefined){
        playById(music_id);
      }
      
      return false;
    });
  }

 
  
}

$(document).ready(function(){
  var player = window.Formaweb.Player();
});