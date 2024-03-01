<!-- 
           
           <nav>
        
                <ul>
                    <li class="active"><a href="index.html">Home</a></li>
                    <li><a href="leistungen.html">Leistungen</a></li>
                    <li><a href="oeffnungszeiten.html">Öffnungszeiten</a></li>
                    <li><a href="kontakt.html">Kontakt</a></li>
                </ul>
            </nav>
          -->
          
          <?php

          // Unveränderlichen Code übergeben - assoziatives Array
          // =====================================================

          $nav_punkte = array(
            "home" => "Startseite",
            "leistungen" => "Leistungen",
            "oeffnungszeiten" => "Öffnungszeiten",
            "kontakt" => "Kontakt"
          );
          echo "<nav><ul>";

          // Struktur 

          // foreach ($nav_punkte as $key => $value) {
          //   href... 
          // }

          // Listeneintrag dynamisch erstellen (bezieht sich auf Site-Namen in der index.php)

          foreach ($nav_punkte as $href => $nav_punkt) {
            echo '<li ';
            if ($site == $href) echo 'class="active"';
            echo '><a href="?seite=';
            echo $href . '">' . $nav_punkt;
            echo "</a></li>";
          }

          echo "</ul></nav>";


         
          
      
