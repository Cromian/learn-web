// Get element by ID
function $id(val) {
    return document.getElementById(val);
}

// Get element by Class
function $class(val) {
    return document.getElementsByClassName(val);
}

// Show element by ID
function show(val) {

    var e = $id(val);
    e.style.display = "block";
}

// Hide element by ID
function hide(val) {

    var e = $id(val);
    e.style.display = "none";
}

// Toggle element by ID on click (show/hide).
function toggle(val) {

    var e = $id(val);
    var visable = e.style.display == "block";
    var hidden = e.style.display == "none";

    if (hidden) {
        
        show(val);

    } else {
        
        hide(val);
    }
}

// Add CSS File
function addCSS(filename) {

    var head = document.getElementsByTagName('head')[0];
    
    var style = document.createElement('link');
    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    
    head.append(style);
}

// Add JS file
function addJS(filename){
    var head = document.getElementsByTagName('head')[0];
   
    var script = document.createElement('script');
    script.src = filename;
    script.type = 'text/javascript';
   
    head.append(script);
}