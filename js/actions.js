
// Should have a script in js that based on the URL of the section to call in the follwing.
// Get current url, filter out to get sec_1 <-- ensure that all are hidden but this one value.
// This will allow section jumping. 
// if(window.location.href.indexOf("sec_3") != -1){
//     hide('sec_1');
//     show('sec_3');
// }

// Run secject
$id('sec_1_action').onclick = function() {

    hide('sec_1');
    show('sec_2');

};

// Prevent enter when typing in content box.
$id('bg_color_edit_1').addEventListener('keypress', function(e) {
    if (e.which === 13) {
        e.preventDefault();
        
        var color = $id('bg_color_edit_1').innerHTML;
        document.body.style.background = color;
    
        hide('sec_2');
        show('sec_3');

    }

});


$id('sec_3_ready_1').onclick = function() {
    hide('sec_3_ob_1');
    show('sec_3_ob_2');
}

