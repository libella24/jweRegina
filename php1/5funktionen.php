<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funktionen</title>
</head>
<body>
    <h1>Funktionen</h1>
    <?php
    //String in Kleinbuchstaben umwandeln
    $text = "Herzlich Willkommen!";
    echo strtolower($text);
    echo "<br>"; 
    //mb_strtolower --> kann auch Sonderzeichen klein schreiben

    //Leerzeichen vor/nach einem Text entfernen
    $text = "     Herzlich    Willkommen   ";
    echo trim($text, "n e"); //entfernt von außen nach innen
    ?>
    
</body>
</html>