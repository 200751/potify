var audio = document.getElementById("audio");
var title = document.getElementById("title");
var album_cover = document.getElementById("album_cover");
var repeat = document.getElementById("repeat");
var playAudioElement = document.getElementById("play");
var tablerow = document.querySelectorAll(".song");


repeat.addEventListener("click", function(){
  if (audio.hasAttribute("loop")){
    audio.removeAttribute("loop");
    repeat.style.color = "#8d8d8d";
  } else {
    audio.setAttribute("loop", "");
    repeat.style.color = "#2A4B9B";
  }
});

audio.addEventListener('playing', function(){
  album_cover.classList.add("animation");
});

// audio.addEventListener('ended', nextSong());

function menu() {
  var menu = document.getElementById("menu");
  var menu_button = document.getElementById("menu_button");
  var playlist = document.getElementById("playlist");
  var audioplayer = document.getElementById("audioplayer");

  // Zorgt ervoor dat audioplayer hidden is als playlist zichtbaar is, en andersom (mobile & tablet view).
  if (audioplayer.style.display === "none") {
    audioplayer.style.display = "flex";
    playlist.classList.remove("show");
    menu.style.backgroundColor = "#353535";
    menu_button.style.backgroundColor = "#353535";
  } else {
    audioplayer.style.display = "none";
    playlist.classList.add("show");
    menu.style.backgroundColor = "#181818";
    menu_button.style.backgroundColor = "#181818";
  }

  // Zorgt ervoor dat audioplayer & playlist display: flex; krijgen zodra je uit mobile/tablet view gaat.
  window.addEventListener("resize", function () {
    if (window.matchMedia("(min-width: 1025px)").matches) {
      audioplayer.style.display = "flex";
      playlist.style.display = "flex;";
    }
  });
}

// Zorgt ervoor dat de song, cover art en title veranderen naar het gene wat je in de playlist aanklikt.
document.getElementById("song_playlist").addEventListener("click", function (item) {
    // To get tr tag
    // In the row where we click
    var row = item.path[1];
    var row_value = "";
    var lower = "";
    
    for (var j = 0; j < row.cells.length; j++) {
      row_value = row.cells[0].innerHTML;
    }

    var song_title = row_value;
    song_title = song_title.replace(/\s+/g, "");
    lower = song_title.toLowerCase();

    title.innerHTML = row_value;
    album_cover.src = "assets/img/albums/" + lower + ".jpg";
    audio.src = "http://u200751.gluweb.nl/potify/assets/audio/" + lower + ".mp3";
    playAudioElement.innerHTML = "<i class='far fa-pause-circle fa-3x'></i>";
    setTimeout(playAudio, 0);

    
    // Haalt alle active classes van alle tablerows af
    tablerow.forEach(function(e) {
      e.classList.remove('active');
    });

    // console.log(row.cells[0]);  
    // console.log(tablerow[0]);

    // console.log($(this).closest('tr').next('tr').innerText);

    // Voegt de class active toe aan de row waar op dat moment op geklikt wordt.
    row.classList.add("active");
    

    if(lower == "pumpedupkicks"){
      setTimeout(tongo, 5000);
    }

    console.log(audio.getAttribute("src"));

  });

  // Veranderd Volume
  slider = document.querySelector("#volume");
  slider.oninput = () => {
    audio.volume = Math.floor(slider.value) * 0.01
  }

  function playAudio(){ 
    if (audio.paused) {
      audio.play();
      playAudioElement.innerHTML = "<i class='far fa-pause-circle fa-3x'></i>";
      album_cover.classList.add("animation");
    }
    else {
      audio.pause(); 
      playAudioElement.innerHTML = "<i class='far fa-play-circle fa-3x'></i>";
      album_cover.classList.remove("animation");
    } 
  }
  function tongo(){
    album_cover.src = "assets/img/albums/tongo.jpg";
  }

  // function nextSong(){
  //   // console.log("Done");
  //   // audio.setAttribute("src", "assets/audio/don'tworry.mp3");
  //   album_cover.classList.remove("animation");
  // }

