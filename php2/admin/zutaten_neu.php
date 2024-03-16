<?php
include "funktionen.php";
ist_eingeloggt();

$errors = array();
$erfolg = false;

// Prüfen, ob das Formular abgeschickt wurde
// ===========================================

if(!empty($_POST)){
    $sql_titel = escape($_POST["titel"]); // die DB wird geholt (siehe funktionen.php)
    $sql_kcal_pro_100 = escape($_POST["kcal_pro_100"]);
    $sql_menge = escape($_POST["menge"]);
    $sql_einheit = escape($_POST["einheit"]);

    // Nur der Titel wird geprüft, ob er da ist...
    // ===========================================

    if(empty($sql_titel)) { // darf nicht "titel" sein, weil hier ja die escape darauf liegt... oder so...
        $errors[]="Bitte geben Sie den Titel an."; 
    } else {
        // (1) Query absetzen
        // ==================
            $result = query("SELECT * FROM zutaten 
            WHERE titel = '{$sql_titel}'");
            // (2) Ergebnis in ein Array packen
            // =================================
            // Datensatz aus mysqli in ein php Array umwandeln
            
            $row = mysqli_fetch_assoc($result); 
            //print_r($row);

            // Prüfen, ob es diesen Titel schon gibt 
            // ======================================
            // case-sensitiv, wenn das nicht extra abgefangen wird

            if($row){
                $errors[]="Diese Zutat existiert bereits"; // fragt die gesamte Row ab, ob in der Spalte Titel der exakte Titel besteht, oder nicht

            }
    }
    if(empty($sql_menge)){
        $errors[]="Bitte geben Sie die Menge ein.";
    }
    // Wenn keine Fehler existieren.....
    if(empty($errors)){ /// Werte deren Wert NOCH nicht feststeht, sollen in der DB nicht mit 0 gespeichert werden, sondern mit NULL. Erst wenn der Wert 0 feststeht, dann soll 0 drinnen stehen.
        if($sql_kcal_pro_100 == ""){
            $sql_kcal_pro_100 = "NULL"; // wird dann leer angezeigt.
        }
        if($sql_menge == ""){
            $sql_menge = "NULL"; // wird dann leer angezeigt.
        }
        if($sql_einheit == ""){
            $sql_einheit = "NULL"; // wird dann leer angezeigt.
        }
        // dann können wir die Zutat in die DB schreiben...
        query("INSERT INTO zutaten SET 
        titel = '{$sql_titel}', 
        kcal_pro_100 = {$sql_kcal_pro_100}, 
        menge = {$sql_menge}, 
        einheit = {$sql_einheit}"
        );
        $erfolg = true;

    }
}

/// Werte deren Wert NOCH nicht feststeht, sollen in der DB nicht mit 0 gespeichert werden, sondern mit NULL. Erst wenn der Wert 0 feststeht, dann soll 0 drinnen stehen.
// die single quotes müssen in der INSERT Query weg, damit die NULL-Regel angewendet 

include "kopf.php";

?>
    <title>Neue Zutat anlegen</title>
</head>
<body>

<h1>Neue Zutat anlegen</h1>

<?php
// Fehler werden hier ausgegeben 
if(!empty($errors)){
    foreach($errors as $key => $error){
        echo "<li>".$error."</li>";
    }
    echo "<ul>";
    
}
// Erfolgsmeldung
if($erfolg){
    echo "<p>Die Zutat wurde erfolgreich bearbeitet.<br>
    <a href='zutatenliste.php'>Zurück zur Liste</a>
    </p>";
}
?>



<form action="zutaten_neu.php" method="post">
    <div>
        <label for="titel">Zutat:</label>
        <input type="text" name="titel" id="titel">
    </div>
    <div>
        <label for="kcal_pro_100">KCal/100:</label>
        <input type="number" name="kcal_pro_100">
    </div>
    <div>
        <label for="menge">Menge:</label>
        <input type="number" name="menge" id="menge">
    </div>
    <div>
        <label for="einheit">Einheit:</label>
        <input type="text" name="einheit" id="einheit">
    </div>
    <div>
        <button type="submit">Zutat anlegen</button>
    </div>




</form>
    
</body>
</html>