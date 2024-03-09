<?php

// Session eröffnen (SESSION_START)
// ================================
// Funktion ist notwendig, um  die $_SESSION zur Verfügung zu haben.
session_start();

// Verbindung zur DB herstellen (MSQLI_CONNECT)
// ============================================
// Parameter: Server, Username, Passwort, DB-Bezeichnung

$db = mysqli_connect("localhost", "root", "", "php2");
// MySQLI mitteilen, in welchem Zeichenformat die Daten kommen:
mysqli_set_charset($db, "utf8");


?>