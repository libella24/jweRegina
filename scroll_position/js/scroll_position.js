// Scroll libary (Info an TN)

let submitButtonPosition = $('button[type="submit"]').offset().top;

$(window).scroll(function () {

    // "Math.floor" – Abrunden der abgefragten Positionswerte um nur ganze Zahlen zu erhalten

    let scrollPos = Math.floor($(document).scrollTop());

    console.log(scrollPos);

    $('#scrollBox').html(scrollPos); //erzeugt scrollPos?

    if (scrollPos > 600) {
        $('#scrollBox').addClass('show');
    }

    else {
        $('#scrollBox').removeClass('show');

    }

    if (scrollPos > 800) {
        $('#scrollBox').css(
            {
                'background-color': 'green',
                'color': 'black',
            }
        );
    } else {
        $('#scrollBox').css(
            {
                'background-color': '',
                'color': ''
            }
        );
    }

    $('#scrollBox').css(
        {
            'transform': 'translateY(' + Math.floor(scrollPos * 0.6) + 'px)', // Wiederspricht das dem 'translateX im css (Class 'show')? (verschwindet nicht nach rechts)
        }
    );

    console.log(submitButtonPosition);

    if (scrollPos > submitButtonPosition) {
        console.log('Sie sehen den Submit Button');
    }


});

/*
let submitButtonPosition = $('button[type="submit"]').offset().top;

$(window).scroll(function(){
    


    // Abrunden der abgefragten Positionswerte um nur ganze Zahlen zu erhalten
    let scrollPos = Math.floor( $(document).scrollTop() );

    $('#scrollBox').html(scrollPos);


    if(scrollPos > 600) {
        $('#scrollBox').addClass('show');
    } else {
        $('#scrollBox').removeClass('show');
    }

    if(scrollPos > 800 ) {
        $('#scrollBox').css(
            {
                'background-color' : 'green',
                'color': 'black',
            }
        );
    } else {
        $('#scrollBox').css(
            {
                'background-color' : '',
                'color': ''
            }
        );
    }

    $('#scrollBox').css({
        'transform': 'translateY('+Math.floor(scrollPos*0.6)+'px)',
    });

    console.log(submitButtonPosition);

    if(scrollPos > submitButtonPosition) {
        console.log('sie sehen den Submit Button');
    }

});
*/


