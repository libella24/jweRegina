/*

Die Funktion ermittelt mit den Eingabewerten ob 
die Temperatur innerhalb der Vorgaben liegt

currTemp: aktuelle Temperatur
minTemp: Mindesttemperatur
maxTemp: Maximaltemperatur

Rückgabewert (string): Text mit Meldung innerhalb der Vorgaben

*/


function termo(currTemp, minTemp, maxTemp) {
    if (currTemp >= minTemp && currTemp <= maxTemp) {
        // Temperatur ok
        // schalteHeizungAus();
        return 'OK';

    } else if (currTemp > maxTemp) {
        // temperatur zu haoch
        // schalteHeizungAus();
        // schalteKlimaEin();
        return 'HOT';

    } else if (currTemp < minTemp) {
        // temperatur zu niedrig
        // schalteKlimaAus();
        // schalteHeizungEin();
        return 'COLD';
    }
}