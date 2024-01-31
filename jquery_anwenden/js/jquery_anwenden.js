//$('body').html('<div id="js-element"></div>');

// ANDERE SCHREIBWEISE – document.getElementsByTagName('body').innerHTML = '<div id="neues-js-element"></div>';

// console.log('die Seite ist geladen');



$('#calc').click(
    function () {
        console.log('button clicked');

        //console.log($('#input').val());

        //console.log(
        // eval
        //  ($('#input').val()
        //  )
        // );

        let eingabe = $('#input').val();
        let result = eval(eingabe);

        console.log(result);

        $('#result').val(result);

    }
);


$('#events').on(

    {
        'mouseenter': function () {
            $(this).css(

                {
                    'background-color': 'yellow',
                    'color': 'red'
                }
            );
        },  //this bezieht sich auf events

    'mouseleave': function () {
        $(this).css(

            {
                'background-color': 'blue',
                'color': 'white'
            }
        );
    }
    }

);

$('#events2').on({
    'mouseenter': function() {
        $(this).addClass('mouseover');
    },

    'mouseleave': function() {
        $(this).removeClass('mouseover');
    }
});

