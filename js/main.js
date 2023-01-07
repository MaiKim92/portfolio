$('document').ready(function(){
  $('[id^=prj-img-]').hover(function(){
    let str = $(this).attr('src');
    $(this).attr('src', str.substring(0, str.length - 4) + ".gif");
  });

  $('[id^=prj-img-]').mouseout(function(){
      let str = $(this).attr('src');
      $(this).attr('src', str.substring(0, str.length - 4) + ".png");
    });

  $('#production-all').click(function(event){
    event.preventDefault();
    if(!$('#production-all').hasClass("active")){
      $('#production-all').addClass("active");
      $('#production-professional').removeClass("active");
      $('#production-casual').removeClass("active");
    }
    $('.production-professional').show();
    $('.production-casual').show();
  });

  $('#production-professional').click(function(event){
    event.preventDefault();
    if(!$('#production-professional').hasClass("active")){
      $('#production-all').removeClass("active");
      $('#production-professional').addClass("active");
      $('#production-casual').removeClass("active");
    }
    $('.production-professional').show();
    $('.production-casual').hide();
  });

  $('#production-casual').click(function(event){
    event.preventDefault();
    if(!$('#production-casual').hasClass("active")){
      $('#production-all').removeClass("active");
      $('#production-professional').removeClass("active");
      $('#production-casual').addClass("active");
    }
    $('.production-professional').hide();
    $('.production-casual').show();
  });

  $('#language-all').click(function(event){
      event.preventDefault();
      if(!$('#language-all').hasClass("active")){
        $('#language-all').addClass("active");
        $('#language-csharp').removeClass("active");
        $('#language-java').removeClass("active");
        $('#language-js').removeClass("active");
        $('#language-python').removeClass("active");
      }
      $('.language-csharp').show();
      $('.language-java').show();
      $('.language-js').show();
      $('.language-python').show();
    });

    $('#language-csharp').click(function(event){
      event.preventDefault();
      if(!$('#language-csharp').hasClass("active")){
        $('#language-all').removeClass("active");
        $('#language-csharp').addClass("active");
        $('#language-java').removeClass("active");
        $('#language-js').removeClass("active");
        $('#language-python').removeClass("active");
      }
      $('.language-csharp').show();
      $('.language-java').hide();
      $('.language-js').hide();
      $('.language-python').hide();
    });

    $('#language-java').click(function(event){
      event.preventDefault();
      if(!$('#language-java').hasClass("active")){
        $('#language-all').removeClass("active");
        $('#language-csharp').removeClass("active");
        $('#language-java').addClass("active");
        $('#language-js').removeClass("active");
        $('#language-python').removeClass("active");
      }
      $('.language-csharp').hide();
      $('.language-java').show();
      $('.language-js').hide();
      $('.language-python').hide();
    });

    $('#language-js').click(function(event){
      event.preventDefault();
      if(!$('#language-js').hasClass("active")){
        $('#language-all').removeClass("active");
        $('#language-csharp').removeClass("active");
        $('#language-java').removeClass("active");
        $('#language-js').addClass("active");
        $('#language-python').removeClass("active");
      }
      $('.language-csharp').hide();
      $('.language-java').hide();
      $('.language-js').show();
      $('.language-python').hide();
    });

    $('#language-python').click(function(event){
      event.preventDefault();
      if(!$('#language-python').hasClass("active")){
        $('#language-all').removeClass("active");
        $('#language-csharp').removeClass("active");
        $('#language-java').removeClass("active");
        $('#language-js').removeClass("active");
        $('#language-python').addClass("active");
      }
      $('.language-csharp').hide();
      $('.language-java').hide();
      $('.language-js').hide();
      $('.language-python').show();
    });

    $('#status-all').click(function(event){
      event.preventDefault();
      if(!$('#status-all').hasClass("active")){
        $('#status-all').addClass("active");
        $('#status-ongoing').removeClass("active");
        $('#status-complete').removeClass("active");
      }
      $('.status-ongoing').show();
      $('.status-complete').show();
    });

    $('#status-ongoing').click(function(event){
      event.preventDefault();
      if(!$('#status-ongoing').hasClass("active")){
        $('#status-all').removeClass("active");
        $('#status-ongoing').addClass("active");
        $('#status-complete').removeClass("active");
      }
      $('.status-ongoing').show();
      $('.status-complete').hide();
    });

    $('#status-complete').click(function(event){
      event.preventDefault();
      if(!$('#status-complete').hasClass("active")){
        $('#status-all').removeClass("active");
        $('#status-ongoing').removeClass("active");
        $('#status-complete').addClass("active");
      }
      $('.status-ongoing').hide();
      $('.status-complete').show();
    });
});
