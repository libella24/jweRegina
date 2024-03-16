<?php

include "funktionen.php"; //Session wird gestartet, DB wird aufgerufen

//wurde das Formular abgeschickt
//print_r($_POST);
if(!empty($_POST)){
    //validieren, wenn Daten eingegeben wurden
    if(empty($_POST["benutzername"]) || empty($_POST["passwort"])){
        $error = "Benutzername oder Passwort ist leer.";
    } else {
        //Benutzername und Passwort werden übergeben
        // --> in der DB nachsehen, ob der Benutzer existiert
        
        $sql_benutzername = mysqli_real_escape_string($db, $_POST["benutzername"]); // bewahrt vor SQL Injections
        
        // Datenbankzugriff und -Abfrage
        $result = mysqli_query($db,"SELECT * FROM benutzer 
        WHERE benutzername = '{$sql_benutzername}'");
        //print_r($result);
        // Datensatz aus mysqli in ein php Array umwandeln
        $row = mysqli_fetch_assoc($result); 
        //print_r($row);
        if($row){
            //Benutzer existiert --> Passwort prüfen
            // if($_POST["passwort"] == $row["passwort"]) { -- würde nur das eingegebene Passwort prüfen, wir brauchen die "password_verify" funktion und geben das eingegebene PW und den Hash aus der DB. password_verify schaut dann, ob diese beiden Werte zusammenpassen.
                if(password_verify($_POST["passwort"], $row["passwort"])){
                //Passwort stimmt überein
                //echo "Sie sind eingeloggt.";

                $_SESSION["eingeloggt"] = true;
                $_SESSION["benutzername"] = $row["benutzername"];

                // Anzahl der Logins in DB speichern  
                // Im DB-Feld darf nicht NULL definiert sein, sonst kann keine Berechnung stattfinden.
                // Last login speichern: im DB Feld muss NULL erlaubt sein. 
                // 2 Prüfungen können in einem Statement erfasst werden
                query($db, "UPDATE benutzer SET 
                anzahl_logins = anzahl_logins + 1,
                last_login = NOW() 
                WHERE id ={$row["id"]}");


                //Switch in die Start-Seite
                header("Location: index.php");
            } else {
                //Passwort war falsch
                $error = "Benutzername oder Passwort sind falsch!";
                
            }
            } else {
                //Benutzername wurde nicht in der DB gefunden
                $error = "Benutzername oder Passwort sind falsch!";
            }
        }
    }



?>


<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h1>Loginbereich zur Rezepteverwaltung</h1>
    <?php
    if(!empty($error)){
        echo "<p>".$error."</p>";
    }
    ?>
    <form action="login.php" method="post">
        <div>
            <label for="benutzername">Benutzername:</label>
            <input type="text" name="benutzername" id= "benutzername">
        </div>
        <div>
            <label for="passwort">Passwort:</label>
            <input type="password" name="passwort" id="passwort">
        </div>
        <div>
            <button type="submit">Einloggen</button>
        </div>


    </form>
    
</body>
</html>