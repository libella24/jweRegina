<?php
$erfolg = false; // Ausgangspunkt: Es wurde keine Anfrage abgeschickt.
$fehlermeldungen = array();

   if (!empty($_POST))
   {if(empty($_POST["benutzername"])) {
		$fehlermeldungen[] = "Bitte geben Sie den Benutzernamen ein.";
		
	} elseif (strlen($_POST["benutzername"]) <=3) {
		$fehlermeldungen[] = "Erfassen Sie mindestens 4 Zeichen.";
	} /*elseif (!preg_match("/^[a-zA-Z0-9]+$/", $_POST["username"]) <=4) {
		$fehlermeldungen[] = "Es sind nur Buchstaben und Zahlen erlaubt";
	}*/
	
	if(empty($_POST["password"])) {
		$fehlermeldungen[] = "Bitte geben Sie das Passwort ein.";  
	} elseif (strlen($_POST["password"]) <=6) {
		$fehlermeldungen[] = "Beachten Sie bitte die Mindestlänge von 6 Zeichen.";
	} elseif (!preg_match("/^(?=.*\d)(?=.*[^A-Za-z\d])(?=.*[a-z]).*$/", $_POST["password"])){
		$fehlermeldungen[] = "Bitte geben Sie eine gültiges Passwort ein. Beachten Sie die Mindestlänge von 6 Zeichen. Weiters muss mind. 1 Buchstabe, eine Zahl und ein Sonderzeichen enthalten sein."; 
	}

	if(empty($_POST["email"])) {
		$fehlermeldungen[] = "Bitte geben Sie die E-Mail Adresse an.";  
	}elseif(!preg_match("/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,15}$/", $_POST["email"])){
		$fehlermeldungen[] = "Bitte geben Sie eine gültige E-Mail Adresse an."; 
	}

	if(!empty($_POST["AGB"])){
		$fehlermeldungen[] = "Bitte bestätigen Sie die allgemeinen Geschäftsbedingungen.";

	}


	if (empty($fehlermeldungen)){
		$erfolg = true;

		$mail_inhalt = "Anfrage über Kontaktformular:
		Name:{$_POST["benutzername"]}
		E-Mail:{$_POST["email"]};
		Nachricht:{$_POST["benutzername"]}";

		// Anfrage in Server speichern (FILE_PUT_CONTENTS)
		// ================================================

		$dateiname = "mail_".date("Y-m-d_H-i-s");
		file_put_contents("mail_backup/{$dateiname}.txt", $mail_inhalt);

		// E-Mail versenden (MAIL)
		// ========================

		mail("r.fleckl@me.com", "Kontaktanfrage Website von {$_POST["benutzername"]}", $mail_inhalt);
		

		

// echo "<pre>"; // formatiert als Liste und mit Array-Bezeichnung
// print_r($mail_inhalt); 
// echo "</pre>";
	}
}
   
?>


<div class='wrapper'>
	<div class='row'>
		<div class='col-xs-12'>
			<h1>Registrierung</h1>
		</div>
	</div>
</div>

<!-- Formularbeginn -->
<form id='register-form' method="post" action="index.php?seite=registrieren"> 
<?php
 if(!empty($fehlermeldungen)){ 
    echo "<strong> Folgender Fehler ist aufgetreten:</strong><br>";
    //Fehlerart-Array anlegen:
    echo "<ul>";        
     foreach ($fehlermeldungen as $fehlermeldung) {
     echo "<li>". $fehlermeldung . "</li>";
     }
     echo "</ul>";
    }


   	if ($erfolg) {
   	echo "<h3>Vielen Dank für Ihre Anfrage!</h3>";
    }else {

    ?>
	<div class="wrapper">
		<div class='row'>
			<div class='col-xs-12 col-sm-12'>
				<label for='benutzername'>Benutzername</label>
				<input type='text' id='benutzername' name='benutzername' value="<?php if (!empty($_POST["benutzername"])){echo htmlspecialchars($_POST["benutzername"]);}
               ?>" placeholder="Benutzername"
				/>
			</div>
			<div class='col-xs-12 col-sm-12'>
				<label for='password'>Passwort</label>
				<input type='password' id='password' name='password' value="<?php
                 if (!empty($_POST["password"])){echo htmlspecialchars($_POST["password"]);}?>" placeholder="Passwort"/>
			</div>
			<div class='col-xs-12 col-sm-12'>
				<label for='email'>E-Mail</label>
				<input type='text' id='email' name='email' value="<?php
                if (!empty($_POST["email"])){echo htmlspecialchars($_POST["email"]);}?>" placeholder="E-Mail"/>
			</div>
			<div class='col-xs-12 col-sm-12'>
				<input type='checkbox' id='toc' name='agb' value="<?php
                if (!empty($_POST["agb"])){echo htmlspecialchars($_POST["agb"]);}?>"/>
				<label for='toc'>Ich akzeptiere die AGB.</label>
			</div>
			<div class='col-xs-12'>
				<input type='submit' value='Registrieren' />
			</div>
		</div>
	</div>
	<?php
    };?>
</form>
