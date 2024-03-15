<?php
include "funktionen.php";
ist_eingeloggt();

$errors = array();

// Prüfen, ob das Formular abgeschickt wurde
if(!empty($_POST)){
    $sql_titel = escape($_POST["titel"]); // die DB wird geholt (siehe funktionen.php)

    if(empty($sql_titel)) { // darf nicht "titel" sein, weil hier ja die escape darauf liegt... oder so...
        $errors[]="Bitte geben Sie den Titel an."; // ab da fängt der selbstgestrickte Code an
    } else {
            $result = mysqli_query($db,"SELECT * FROM zutaten 
            WHERE titel = '{$sql_titel}'");
            // Datensatz aus mysqli in ein php Array umwandeln
            $row = mysqli_fetch_assoc($result); 
            //print_r($row);

            if($row){
                $errors[]="Diese Zutat existiert bereits";

            }
    }
}

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