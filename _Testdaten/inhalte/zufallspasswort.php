		<div id='journal'>
			<div class='wrapper'>
					<div class='row'>
						<div class='col-xs-12'>
								<h1>Zufallspasswort</h1>
						</div>
					</div>
					<?php
					function zufallsstring($laenge) {
						//Mögliche Zeichen für den String
						$zeichen = '0123456789';
						$zeichen .= 'abcdefghijklmnopqrstuvwxyz';
						$zeichen .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
						$zeichen .= '()!.:=';
					  
						//String wird generiert
						$str = '';
						$anz = strlen($zeichen);
						for ($i=0; $i<$laenge; $i++) {
						   $str .= $zeichen[rand(0,$anz-1)];
						}
						return $str;
					 }

					 
					 ?> 
					 

					<div class='row'>
						<div class='col-xs-12'>
							Hier finden Sie die generierten Passwörter:
							<?php
							echo zufallsstring(8);
							?>
							

						</div>
					</div>

			</div>
		</div>
