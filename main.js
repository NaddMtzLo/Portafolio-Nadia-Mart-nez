let navbar = document.getElementById("navbar");
navbar.insertAdjacentHTML("beforeend" , `
<div class="menu-container">
<nav class="navbar navbar-expand-lg navbar-light bg-transparent">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="Index.html">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./pages/SobreMi.html">Sobre mí</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Habilidades</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="./pages/Proyectos.html">Proyectos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Mi CV</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contáctame</a>
            </li>
        </ul>
    </div>
</nav> 
</div>
`);