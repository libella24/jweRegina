<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Funktionen für Arrays</title>
</head>
<body>
    <h1>Funktionen für Arrays</h1>
    <?php
    //==========================
    // Funktionen für Arrays
    //===========================

    $namen = array("Peter", "Sonja", "Klara", "Klaus", "Franziska", "Mario", "Christian", "Mario", "Peter");

    //Elemente in einem Array zählen (count)

    echo count($namen);
    echo "<br>";

    //Zufälligen Namen ausgeben (array_rand)

    $index = array_rand($namen); // gibt nur den Index aus
    echo $index;
    echo "<br>";
    
    echo $namen[$index];
    echo "<br><br>";
    echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
    print_r($namen); //nur für den internen Gebrauch
    echo "</pre>";
    echo "<br><br>";

    //Doppelte Werte entfernen

    array_unique($namen); //bestehendes Array bleibt bestehen, 
    //generiert neues Array mit uniquen Werten
    echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
    print_r($namen); //nur für den internen Gebrauch
    echo "</pre>";
    echo count ($namen);
    echo "<br><br>";

    //Prüfen, ob ein Wert im Array existiert (in_array)

    // liefert nur ja oder nein retour, deshalb if-else

    if (in_array("Mario", $namen)){
        echo "Diese Person ist registriert";
    } else {
        echo "Diese Person gibt's bei uns NICHT!";
    };
    echo "<br><br>";

    // Alphabetisch aufsteigend nach Namen sortieren (asort)

    // behält den Index

    asort($namen);
    echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
    print_r($namen); //nur für den internen Gebrauch
    echo "</pre>";

    // Wert im Nachhinein hinzufügen
    $namen[] = "Herbert";
    array_push($namen, "Gerhard", "Regina");
    echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
    print_r($namen); //nur für den internen Gebrauch
    echo "</pre>";

    // Sortieren und Indizes neu zuweisen

    // ACHTUNG! Der Index wird dadurch neu vergeben. In der Datenbank bleibt aber der bisherige Index!!!

    sort($namen);
    echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
    print_r($namen); //nur für den internen Gebrauch
    echo "</pre>";

   





    


    ?>

</body>
</html>