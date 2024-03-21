<?php

function showProject(){
    $xml_file="./data/projects.xml";
    $xml=simplexml_load_file($xml_file);
    foreach ($xml->project as $project) {
        // Extract data from each project
        $image="./img/".$project->image["name"];
        echo "<div class='project block'>
        <div class='title'><h2>$project->name</h2></div>
        <div class='project-content'>
        <div class='block-text'>
        <div class='horizontal-list Picons'>";
        echo "<i class='grey'>Made with: </i>";
        foreach($project->codelist->code as $code){
            $name=$code['name'];
            $src="./logo/".$name.".svg";
            echo "<img class='prog_lang' src='$src' alt='$name'/>";
        }
        echo "</div>";
        echo "$project->description
        </div>
        <div class='block-logo'>
        <img src='$image' alt='Illustration of the project'/>
        </div>
        </div>
        </div>
        ";
    }
}
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <title>Projects</title>
    <!--<link rel="stylesheet" href="css/temp.css">-->
    <link rel="stylesheet" href="css/sgdf.css">
    <link rel="stylesheet" href="css/icon.css">
    <link rel="stylesheet" href="css/font.css">
    <link rel="stylesheet" href="css/project.css">
  </head>
  <body>
    <header class="flexer">
      <h1>My projects</h1>
    </header>
    <section class="main">
    <div class="project-container">
    <?=showProject()?>
    </div>
    </section>
    <footer class="flexer">
      Go back to main website&nbsp;<a href="https://mlgb.fr">here</a>
    </footer>
  </body>
  <script src="script/project.js"></script>
</html>
