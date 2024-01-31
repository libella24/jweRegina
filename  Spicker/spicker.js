// Begriffe

// integer – ganze Zahl

// parse - analysieren / prüfen
// parseInt(was soll geparsed werden) – gibt einen String als ganze Zahl aus
// parseFloat(was soll geparsed werden) – gibt einen String als Kommazahl aus(Funktion)

// scope – Gültigkeitsbereich

// random – zufällig
// Math.random – zufällige Zahl

// eval – evaluieren ? = nicht empfohlen ?



// EVENT
// event - API - Schnittstelle zw. Javascript und HTML od. SVG
// Event-Handling – Überwachung und Behandlung von Ereignissen (z.B.: Mausklicks, Wischgesten, ankommende Daten usw.)
//     1. Das Dokument wird geladen
//     2. JavaScript fügt Event-Handler an Elementknoten an (z.B.: <button> mit 'id button')?.
//     3. Der Anwender bedient das Dokument und das Script reagiert darauf.

// Phase Eins: Das Dokument wird empfangen und geparst
//     Dabei wird das JavaScript erstmals ausgeführt.
//     Objekte und Funktionen werden dabei definiert, sodass sie für die spätere Nutzung zur Verfügung stehen.
//     Nicht alle notierten Funktionen werden dabei bereits aufgerufen.
//     Zu diesem Zeitpunkt hat das Script noch keinen vollständigen Zugriff auf das Dokument.

// Phase Zwei: Das Dokument ist fertig geladen
//     Der vollständige Zugriff auf das Dokument über das DOM ist erst jetzt möglich.
//     Registrieren von Event-Handlern: Das Script spricht vorhandene Elementknoten an und fügt ihnen sogenannte Event-Handler mit Handler-Funktionen hinzu.
//     Inhalt oder Darstellung bestehender Elemente können verändert und dem Dokument neue Elemente hinzugefügt werden (siehe DOM-Manipulation).

// Phase Drei: Der Anwender bedient das Dokument und das Script reagiert darauf
//     Wenn die überwachten Ereignisse an den entsprechenden Elementen im Dokument passieren, werden die entsprechenden Handler-Funktionen ausgeführt.

// Empfehlung: Eventhandler sollte man in der Regel nicht im HTML selbst notieren, sondern mittels Javascript dynamisch an Elemente binden.
// HTML "onclick" überschreibt alle anderen Event-Handler dieses Elementes



// DOM – Document Object Model
// Event.preventDefault() – Browsereigenes Standardverhalten unterbinden (z.B. Link verlinkt)
// element.classList – stellt die Klassen die einem Element zugeordnet sind zur Verfügung
// .add – fügt Liste eine weitere Klasse hinzu
// .remove – entfernt eine Klasse aus Liste
// .length – ermittelt wieviele Klassennamen die Liste enthält
// .contains – prüft auf bestimmte Klassen
// .toggle – schaltet Klassen ein bzw. aus


// document
// .getElementById('id')
// .getElementByClass('class')
// .querySelector('#id /.class') 1. Element
// .querySelectorAll (.class) – alle Elemente mit dieser Klasse (class)

// .addEventListener('click', funktionsname)  (Methode)
// .addEventHandler = gleich wie Listener


// document.createElement – erzeugt ein neues HTML-Element (Methode)
// .append
// .appendChild – erzeugt ein neues Kind-Element im ausgewälten Element

// .textContent – gibt ausgewälten Text (z.B. aus API) aus / (.textContent = xy)


// output.textContent

// performance
// .now() – Anzahl Millisekunden die vergangen sind

// let start = performance.now();
// const countTime = performance.now() - start; (von - bis?)

// .count() ??


// showDataStructure – 



// Vordefinierte Funktionen / Methoden / Eigenschaften

// Number
// .parseInt() – gibt einen String als ganze Zahl aus(Funktion)
// .parseFloat() – gibt einen String als Kommazahl aus(Funktion)
// .eval – ??

// String
// .indexOf() – Position einer Zeichenkette(Methode)
// .slice() – Teil aus Zeichenkette extrahieren(Methode)
// .toLowerCase() – alles klein schreiben(Methode)
// .toUpperCase() – alles groß schreiben(Methode)
// .trim() – Leerzeichen entfernen(Methode)
// .length – Anzahl Zeichen(Eigenschaft)

// Array 
// (erste Position ist 0 !!!!)
// .length() – Array.length = länge des Arrays 
// .push() – hängt Elemente an ENDE eines Arrays (Methode)
// .unshift() – hängt Elemente an ANFANG eines Arrays (Methode)
// .pop() – entfernt das LETZTE Element eines Arrays (Methode)
// .shift() – entfernt das ERSTE Element eines Arrays (Methode)
// .slice() – extrahiert einen Teil des Arrays (Methode) 
//     Array.slice(anfang [, ende]) (-1 = letzter Eintrag, -2 Vorletzter usw.)
// .forEach() – 
// .indexOf() – durchsucht Array nach gesuchten Begriff
// .join() – verbindet alle Elemente eines Arrays zu einer Zeichenkette (Methode)
// .sort – sortieren



// Vordefinierte Objekte

// Math
// Math.random – zufällige Zahl(Kommazahl!)
// Math.floor – nächstniedrigere GANZE ZAHL(eliminiert Kommastellen)!
// Math.round – kaufmännische Rundung
// Math.min – kleinste Zahl aus einer Zahlenmenge
// Math.max – größte Zahl aus einer Zahlenmenge
// Math.sqrt – Quadratwurzel
// Math.PI – 3,14


// APIs (AJAX – Asynchrones Javascript (Seite muss nicht neu geladen werden))

// fetch – Daten vom Server holen (method 'GET' = Standard und wird NICHT extra angegeben)
// fetch – Daten auf Server schreiben (method 'POST' = MUSS angegeben werden!!)

// Konstruktorfunktion "Promise" (Methoden: .then, .catch .finally)
// steuert und koordiniert asynchrone Abläufe
// .then
// .catch – Fehlerbehandlung (immer)


// oder mittels jQuery
// XMLHttpRequest – alte Methode

// .textContent – gibt ausgewälten Text (z.B. aus API) aus / (.textContent = xy)

// Methoden
// GET – lesen
// POST – schreiben
// DELETE – löschen

// Fehlerklassen
// 200 - 299 = OK
// 400 – 499 = Client Fehler (404 - not found)
// 500 – 599 = Server Fehler

// JSON – Datenformat für Datenaustausch mit Server
// JSON.stringify – Daten werden in JSON umgewandelt

// URLSearchParams – Konstruktor erzeugt ein URLSearchParams Objekt von einem Query-String.
// https://developer.mozilla.org/de/docs/Web/API/URLSearchParams

