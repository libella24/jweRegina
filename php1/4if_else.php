<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>If und Else in PHP</title>
</head>
<body>
    <h1>If und Else in PHP</h1>
    <?php
    // Man stellt eine Frage, ob etwas wahr ist, wenn ja, dann...

    // Vergleichen 5 == 5 

    // Beispiel:
    // 0-5 Schlaf gut
    // 6-9 Guten Morgen
    // 12 und 18 Mahlzeit
    // 19-23 Gute Nacht
    // sonst Hallo
    // $time = 13; <-- brauchen wir nicht mehr, weil es die Funktion "date" (siehe php) gib

    $time = date("G"); //die Zeitzone richtet sich nach dem Server, liefert einen Wert von 0-24

    if ($time <=5) {
        echo "Schlaf gut!";
    } else if ($time >= 6 && $time <= 9){ 
        echo "Guten Morgen!";
    } else if ($time == 12 || $time == 18){ //Vergleich --> nicht zuweisen (das wäre =), sondern vergleichen (==)
        echo "Mahlzeit!";
    } else if ($time >= 19 && $time <= 23){ // Gilt "Gute Nacht" zwischen 19 und 5 Uhr (wir haben durch die Funktion 
        //"date" ohnehin nur 24 Stunden), dann braucht man nur die Einschränkung "$time >= 19"
        echo "Gute Nacht!";
    } else {
        echo "Hallo!";
    }

    //0-5 Schlaf gut
    //6-9 Guten Morgen
    //12 und 18 Mahlzeit
    //19-23 Gute Nacht
    //sonst Hallo

    //php.net = DOKUMENTATION

    ?>
    
</body>
</html>