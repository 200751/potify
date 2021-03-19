var song = document.querySelectorAll("tr.song");
var audio = document.getElementById("audio");
var title = document.getElementById("title");
var album_cover = document.getElementById("album_cover");
var firstValue = 0;

function menu() {
  var menu = document.getElementById("menu");
  var menu_button = document.getElementById("menu_button");
  var playlist = document.getElementById("playlist");
  var audioplayer = document.getElementById("audioplayer");

  // Zorgt ervoor dat audioplayer hidden is als playlist zichtbaar is, en andersom (mobile & tablet view).
  if (audioplayer.style.display === "none") {
    audioplayer.style.display = "flex";
    playlist.style.display = "none";
    menu.style.backgroundColor = "#353535";
    menu_button.style.backgroundColor = "#353535";
  } else {
    audioplayer.style.display = "none";
    playlist.style.display = "flex";
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

    for (var j = 0; j < row.cells.length; j++) {
      row_value = row.cells[0].innerHTML;
    }
    var song_title = row_value;
    song_title = song_title.replace(/\s+/g, "");
    var lower = song_title.toLowerCase();

    title.innerHTML = row_value;
    album_cover.src = "assets/img/" + lower + ".jpg";
    audio.src = "assets/audio/" + lower + ".mp3";
    audio.volume = 0.1;

    // Toggle the highlight
    if (row.classList.contains("highlight")) row.classList.remove("highlight");
    else row.classList.add("highlight");
  });
