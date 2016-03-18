<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <title>Тестирование ExtJS5</title>
    <link rel="stylesheet" type="text/css" href="css/preloader.css">
    <link rel="stylesheet" type="text/css" href="css/ext-theme-crisp/build/resources/ext-theme-crisp-all.css">
    <link rel="stylesheet" type="text/css" href="fonts/fontawesome/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
<span class="loader"><span class="loader-inner"></span></span>
<script>
    window.onload = function(){
        document.getElementsByClassName("loader")[0].remove();
    }
</script>

<script type="text/javascript" src="constants/config.js"></script>
<script type="text/javascript" src="lib/ext/ext-all-debug.js"></script>
<script type="text/javascript" src="lib/ext/ext-theme-crisp.js"></script>
<script type ="text/javascript" src="app.js"></script>
</body>
</html>