<?php
// Passwort-Generator
// ===================
$db_passwort = "81dc9bdb52d04dc20036dbd8313ed055";
$passwort = "Passwort3";
$salt = "köakkälk";

// md5
// =====
// Fixer Encryption Wert --> es kommt immer ein gleichbleibender Wert heraus. Nur ein Baustein steht in der DB ($passwort), nicht das gesamte PWD, Der Ursprung kann zurückgerechnet werden

if ($db_passwort == md5($passwort)){
    echo "Passwort ist richtig";
    echo "<br>";
};

echo $passwort;
echo "<br>";
echo md5($passwort);
echo "<br>";
echo md5($passwort.$salt);
//parameter 1 = PW des Benutzers
//parameter 2 = zufälliger String, um das PW vergleichen zu können, diesen Teil weiß der User nicht.
echo "<br>";
echo md5($passwort.$salt);

// password_hash
// ==============
// ACHTUNG: PW soll 255 Zeichen in der DB erlauben
// liefert jedes Mal ein anderes Ergebnis, 
echo "<br>";
$pw_hash = password_hash($passwort, PASSWORD_DEFAULT);
echo $pw_hash;
echo "Dieses Passwort wurde mit PASSWORD_DEFAULT erstellt";
// Prüfen, ob das Passwort stimmt:
if (password_verify($passwort,$pw_hash)){
    echo "<br>";
    echo "Password stimmt überein";
};
// Der User gibt sein Passwort ein, der Hash in der DB wird verglichen 
// In der Funktion $pw_hash ist die Variante gespeichert (PW_DEFAULT)
// beim Aufruf password_verify wird $passwort mit der Variante PASSWORD_DEFAULT erzeugt und mit dem Hash-Wert, der in der DB steht, verglichen. Ist der Wert kompatibel, dann kommt der User rein. 


?>