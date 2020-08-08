$(document).ready(function() {
  var mins = 0;
  var secs = 0;
  var timer;
  var timer2;
  
  $('#plus').on('click' , function() {
    var value = $('#startTimer').html();
    value = parseInt(value) + 1;
    $('#startTimer').html(value);
    $('#timer').html(value);
    
  });
    
    $('#minus').on('click' , function() {
    var value = $('#startTimer').html();
      if (parseInt(value) == 1) {
      $('#startTimer').html(1);
      $('#timer').html(1);
    }
      else {
    value = parseInt(value) - 1;
    $('#startTimer').html(value);
      $('#timer').html(value);
      }
  });
    
    $('#plusB').on('click' , function() {
    var value = $('#breakTime').html();
    value = parseInt(value) + 1;
    $('#breakTime').html(value);
  });
    
    $('#minusB').on('click' , function() {
    var value = $('#breakTime').html();
          if (parseInt(value) == 1) {
      $('#breakTime').html(1);
    }
      else {
    value = parseInt(value) - 1;
    $('#breakTime').html(value);
      }
  });
    
  $('#start').on('click' , session);
    
   function session(){
    $('#status').html("Session!");   
  $('#start').prop('disabled', true);  
  mins = $('#startTimer').html();
   timer = setInterval(function(){ 
    if(secs == 0){
      if(mins == 0){	
        clearInterval(timer);
        pause();
      }
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        if(secs<10){
  
    $('#timer').html( mins + ':0' + secs);
        } else {
    $('#timer').html(mins + ':' + secs);
        }	
     }, 1000);
    }  
      
    function pause(){
   $('#status').html("Break!");   
  $('#start').prop('disabled', true);  
  mins = $('#breakTime').html();
   timer2 = setInterval(function(){ 
    if(secs == 0){
      if(mins == 0){
        clearInterval(timer2);
       session();
      }
          mins--;
          secs = 59;
        } else {
          secs--;
        }
        if(secs<10){
  
    $('#timer').html( mins + ':0' + secs);
        } else {
    $('#timer').html(mins + ':' + secs);
        }	
     }, 1000);
    }
    
      $('#reset').on('click' , function() {
          clearInterval(timer);
          clearInterval(timer2);
          $('#timer').html(25 + ':' + '00');
          $('button').prop('disabled', false);
          secs = 0;
          $('#startTimer').html(25);
          $('#breakTime').html(5);
      });
  
        });