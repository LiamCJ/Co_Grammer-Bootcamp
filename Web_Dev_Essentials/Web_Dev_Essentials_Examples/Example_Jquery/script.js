$(document).ready(function() {
    alert("This page has loaded!");

    //Below is code which hides each list item when clicked on
    $('li').click(function() {
        $(this).hide();
    });

    //Below is code which causes the elf character to move!
    $(document).keydown(function(key) {
        switch (parseInt(key.which, 10)) {
            // Left arrow key pressed
            case 37:
                $('img').animate({ left: "-=20px" }, 'fast');
                break;
                // Up Arrow Pressed
            case 38:
                $('img').animate({ top: '-=20px' }, 'fast');
                break;
                // Right Arrow Pressed
            case 39:
                $('img').animate({ left: '+=20px' }, 'fast');
                break;
                // Down Arrow Pressed
            case 40:
                $('img').animate({ top: '+=20px' }, 'fast');
                break;
        }
    });
});