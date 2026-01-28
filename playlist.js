/*This is the constructor function that creates the new Playlist object. 
`name` is passed in when the new Playlist is created.*/
function Playlist(name) {
  this.name = name;  //`this.name` stores the name of the playlist for this specific object
  this.songs = [];  //`this.song` is the array that will hold all the song titles that are added to the playlist
  this.currentSong = null; /* `this.currentSong` keeps track of the song that is currently playing.
                              It starts at null because there is nothing playing.*/
}

//This is the method that adds a new song to the playlist
Playlist.prototype.addSong = function(songTitle) {
  this.songs.push(songTitle);
};

//This is the method that plays the first song in the playlist
Playlist.prototype.playFirst = function() {
  if (this.songs.length > 0) {
    this.currentSong = this.songs[0];
    console.log("Now playing:", this.currentSong);
  }
};

//This is the method that skips to the next song in the playlist
Playlist.prototype.skipSong = function() {
  if (this.songs.length > 1) {
    this.songs.shift();
    this.currentSong = this.songs[0];
    console.log("Skipped! Now playing:", this.currentSong);
  } else {
    console.log("No more songs to skip.");
  }
};

//This is the method that lists all the songs in the playlist
Playlist.prototype.listSongs = function() {
  console.log("Playlist:", this.name);
  console.log("Songs:", this.songs.join(", "));
};

//NEW METHOD: Removes song by title
Playlist.prototype.removeSong = function(songTitle) {
  const index = this.songs.indexOf(songTitle);

  if(index !== -1) {
    this.songs.splice(index, 1);
    console.log(songTitle, "was removed from the playlist.");
  } else {
    console.log("Song not found.");
  }
};

//This creates a new Playlist object named "My Chill Mix"
let myMix = new Playlist("My Chill Mix");
//These are songs that are added to the playlist
myMix.addSong("Lofi Study");
myMix.addSong("Chillhop Beats");
myMix.addSong("Evening Jazz");

//Plays the first song
myMix.playFirst();
//Skips to the next song
myMix.skipSong();
//Shows all the songs in the playlist
myMix.listSongs();

/* Improvement Suggestion:
We can add a tool where we can remove a song from the playlist by the title of the song..*/
