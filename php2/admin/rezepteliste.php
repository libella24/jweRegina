<?php
    include "funktionen.php"; // DB-Zugriff ermöglichen:
      // ist_eingeloggt(); // Prüfung, ob der User eingeloggt ist, wenn nein, dann wird er zur Login-Seite weitergeleitet.
    include "kopf.php";
?>
<h1>Zutaten</h1>
<p><a href="rezepte_neu.php">Neues Rezept anlegen</a></p>

<?php
// (1) Alle Rezepte selektieren
// =============================

$result = mysqli_query($db, "SELECT * FROM rezepte ORDER BY titel ASC");

// Zwischenzeitlich das Array anschauen, das mit der Abfrage herauskommt
//print_r($result);

echo "<table border='1'>";
    echo "<thread>";
        echo "<tr>";
            echo "<th> Titel</th>";
            echo "<th> Beschreibung</th>";
            echo "<th> Benutzer ID</th>";
            echo "<th> Aktionen</th>";
        echo "</tr>";
    echo "</thread>";
echo "<tbody>";

// (2) Jede Zeile durchiterieren und in ein Array packen
// ======================================================

while ($row = mysqli_fetch_assoc($result)){
    echo "<tr>";
    echo "<td>". $row["titel"] . "</td>";
    echo "<td>". $row["beschreibung"] . "</td>";
    echo "<td>". $row["benutzer_id"] . "</td>";
    echo "<td>". "<a href='zutaten_bearbeiten.php?id={$row["id"]}'>Bearbeiten</a>". "</td>"; // dieser Link ist die URL beim Aufruf der Seite "zutaten_bearbeiten"
    echo "<td>". "<a href='zutaten_entfernen.php?id={$row["id"]}'>Entfernen</a>". "</td>"; // dieser Link ist die URL beim Aufruf der Seite "zutaten_bearbeiten"
    echo "</tr>";
    }
echo "</tbody>";
echo "</table>";
?>

<?php
include "fuss.php";


?>