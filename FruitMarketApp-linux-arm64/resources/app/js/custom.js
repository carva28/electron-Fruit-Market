
$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '1323544047',
        limit: 30,
        resolution: 'standard_resolution',
        accessToken: '1323544047.1677ed0.712bf9c59b1a4aecb16215857f00ae6a',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});