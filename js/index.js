/// <reference types="../@types/jquery/"/>



//! ====================== Logic Of Nav Side Bar ============================

$(function(){

    $('.navContainer').hide();
    $('.barIcon').css({'margin-left': '0'});
    $('#duration .durationContainer .firstSinger').show();
    $('#duration .durationContainer').children('div').not('.firstSinger').hide()
    
})

$('.barIcon span').on('click',function(){
    let barIconMargin =$('.barIcon').css('margin-left');
   console.log(barIconMargin)
    if(barIconMargin == '0px'){

    $('.barIcon').animate({'margin-left': '240px'},1000)
    $('.navContainer').animate({width:'toggle'},1000);
    
    }
    
})

$('.closeIcon').on('click',function(){
    $('.navContainer').animate({width:'toggle'}, 1000);
    $('.barIcon').animate({'margin-left': '0'},1000)
   
})

//! ======================************* Logic of Section Scroll *************============================

$('.navbar .nav-link' ).on('click',function(e){

    const currentHref = $(e.target).attr('href');
  
    const sectionOffset =  $(currentHref).offset().top;
   
  
    $('html,body').animate({'scrollTop':sectionOffset} , 1500)
  })
  


//! =========================== Logic of duration Section of Slide Toggle =================================


$('#duration .durationContainer .first').on('click',function(){
    $('#duration .durationContainer .firstSinger').slideToggle(1000)
});

$('#duration .durationContainer .second').on('click',function(){
    $('#duration .durationContainer .secondSinger').slideToggle(1000)
});

$('#duration .durationContainer .third').on('click',function(){
    $('#duration .durationContainer .thirdSinger').slideToggle(1000)
});

$('#duration .durationContainer .fourth').on('click',function(){
    $('#duration .durationContainer .fourthSinger').slideToggle(1000)
});


//! =========================== Logic of Seconds & Minutes & days Counter =================================

let countDownDate = new Date("Dec 31, 2024 23:59:59").getTime();

let counter = setInterval( () =>{

    let dateNow = new Date().getTime();

    let dateDiffrence = countDownDate - dateNow ;
     
    let days =Math.floor(dateDiffrence / (1000 * 60 * 60* 24)) ;
   

   let hours = Math.floor(dateDiffrence % (1000 * 60 * 60* 24) /(1000 * 60 * 60)) ;
  
   
   let minutes = Math.floor( dateDiffrence % (1000 * 60 * 60) / (1000 * 60));

   let seconds =Math.floor(dateDiffrence % (1000 * 60 ) / (1000) )


   document.querySelector('.days').innerHTML = days;
   document.querySelector('.hours').innerHTML = hours;
   document.querySelector('.minutes').innerHTML = minutes;
   document.querySelector('.seconds').innerHTML = seconds;

   if (dateDiffrence <0){
    clearInterval()
   }
}, 1000)



 //! =================  Logic of Textarea in contact form ========================


 const textareaMessage = document.getElementById('textareaMessage');
 const characterCounterRemaining =   document.querySelector('.characterCounter')

 textareaMessage.addEventListener('keyup',function(e){
    keyback =  e.key

    characterCounterRemaining.innerHTML = 100 - this.value.length ;
  

   if( keyback == 'Backspace'){
    characterCounterRemaining.innerHTML = Number (characterCounterRemaining.innerHTML -1 ) +1 ;
    console.log(characterCounterRemaining.innerHTML)
   }

   if(Number (characterCounterRemaining.innerHTML) < 1 ){

    characterCounterRemaining.innerHTML= "your available character finished";
   }

  })



