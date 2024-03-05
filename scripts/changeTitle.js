window.onload = function() {

    const pageTitle = document.title;
    const attentionMessage = 'Inju Michorius - frontend developer';
  
    document.addEventListener('visibilitychange', function(e) {
      const isPageActive = !document.hidden;
  
      if(!isPageActive){
        document.title = attentionMessage;
      }else {
        document.title = pageTitle;
      }
    });
  };