<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>While Schleifen</title>
</head>
<body>
    <h1>Schleifen</h1>
    <?php
    //Schleife, die 1-10 ausgibt

    set_time_limit(1);
    
    $zahl = 1;

    while ($zahl <= 10){
        echo $zahl++ . " ";
    }

    // do-while-Schleife - fügt einer Schleife ein weiteres Kriterium zu

    // for each - Schleife

    // Array der Reihe nach ausgeben
    $staedte = array("Bregenz", "Salzburg", "Klagenfurt", "Linz", "Graz", "St. Pölten", "Wien", "Eisenstadt");

    foreach ($staedte as $index => $stadt) {
        echo $index . " ";
        echo $stadt;
        echo "<br>";
    }


    



    ?>
    
</body>
</html>