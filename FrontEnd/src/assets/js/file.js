function _(el){
    return $(''+ el +'');
  }
  
  _('#upload-field').focusout(function(){
    _('#upload-btn').addClass("focus-out"); 
    console.log('Hi!')
  });
  _('#upload-field').focusin(function(){
    _('#upload-btn').removeClass("focus-out")
  });