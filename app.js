const express = require("express");
const app = express();
app.use(express.json());

const songs = [
  {
    id: 1,
    name: "someSongName",
    artist: "someSongArtist",
  },
  {
    id: 2,
    name: "anotherSongName",
    artist: "anotherArtist",
  },
];

console.log("hello");

app.get("/songs", (req, res) => {
  res.send(songs);
  //   res.send([]);
});

app.post("/songs", (req, res) => {
  let newSong = {
    id: songs.length + 1,
    name: req.body.name,
    artist: req.body.artist,
  };

  songs.push(newSong);
  res.status(201).send(newSong);
});

// app.get("/songs/:id", (req, res) => {
//   const requestId = parseInt(req.params.id);
//   console.log(requestId);
//   //   const song = songs.find((song) => song.id === requestId);
//   //   res.send(song);
// });

module.exports = app;
