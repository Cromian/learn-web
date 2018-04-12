<!DOCTYPE html>
<html>
<head>
    <title>Learn the Web</title>
    <link rel="stylesheet" type="text/css" href="css/core.css">
    <script defer src="js/functions.js"></script>
    <script defer src="js/actions.js"></script>
</head>
<body>

<main>
<?php 

    // Scan through sections and include files.
    $section_files = array_slice(scandir('sections'), 2);

    foreach ($section_files as $file) {
        // Get section number.
        $sec_number = str_replace('sec_', '', $file);
        $sec_number = str_replace('.html', '', $sec_number);

        // Include section file, wrap in unique id.
        echo '<div id="sec_'.$sec_number.'" class="sec">';
        include 'sections/'.$file;
        echo '</div>';
    }

?>
</main>

</body>
</html>