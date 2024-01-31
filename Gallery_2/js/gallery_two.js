let images = [
    '01_po_karnak19_800x1200',
    '02_ls_karnak02_1200x1000',
    '03_po_karnak09_1200x1200',
    '04_ls_karnak18_1200x1000',
    '05_ls_karnak10_1200x1200',
    '06_po_karnak04_800x1200',
    '07_ls_hatschep03_1200x800',
    '08_ls_karnak12_1200x800',
];

let gallery = $('#gallery');


let lightboxContainer = $('<div id="lightbox" class="hide">   <span class="close">X</span>   <div class="lightbox-inner"></div></div>');
$('body > .wrapper').append(lightboxContainer);


$(images).each(
    function (index, element) {

        let htmlImageTag = `<img src="img/thumbs/${element}.jpg" alt="" class="thumb">`;

        htmlImageTag = `<a href="img/original/${element}.jpg"> ${htmlImageTag} <a/>`;

        gallery.append(htmlImageTag);
    }
);

$('#gallery a').click(
    function (e) {
        e.preventDefault();

        let urlToMyOrigImg = $(this).attr('href');
        //console.log(urlToMyOrigImg);

        lightboxContainer.find('.lightbox-inner').html(`<img src="${urlToMyOrigImg}" alt="">`);

        lightboxContainer.removeClass('hide');

    }
    );

    lightboxContainer.find('span.close').click(function(){
        lightboxContainer.addClass('hide');
    });

    $(document).keyup (function(e) {
        if(e.keyCode == 27) { // 27 = ESCAPE-Taste
            console.log('ESC wurde gedrückt');
            lightboxContainer.addClass('hide');
        }
    }); // Blendet Bild mit ESC aus