import React from 'react'
import './Main.css'
import AreYaWinningSon from "./Sources/are-ya-winning-son.jpg";
import Heisenberg from "./Sources/Heisenberg-meme-face.png";
import SaulGoodman from "./Sources/Saul-goodman-3d.mp4";


export const Main = () =>{
    return(
        <div>
        <body>
    <nav class="navbar-navbar-default">
        <div class="container-fluid">
            <div class="text1" >
              <img class="Heisenberg" src={Heisenberg} id="Heisenberg" width="200" height="200"></img> 
            </div>
        </div>
        <div class="text1">
            <video controls width="500" height="300">
                <source src={SaulGoodman} type="video/mp4"/>
          </video>
        </div>
    </nav>
</body>

    <script src="code.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js" ></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script>
        $('#myModal').modal("toggle");
    </script>
        </div>
        )
        }