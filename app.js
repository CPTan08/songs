const express = require("express");
const { reset } = require("nodemon");
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

app.get("/songs/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  const song = songs.find((song) => song.id === requestId);
  res.send(song);
});

//Modified Songs
app.put("/songs/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  const tobeModifiedsong = songs.find((song) => song.id === requestId);
  console.log(req.body);

  tobeModifiedsong.name = req.body.name;
  tobeModifiedsong.artist = req.body.artist;
  res.send(tobeModifiedsong);
});

//Delete Songs
app.delete("/songs/:id", (req, res) => {
  const songToDelete = songs.find(
    (song) => song.id === parseInt(req.params.id)
  );
  const indexToDelete = songs.indexOf(songToDelete);
  const songToDelete = songs.splice(indexToDelete, 1);
  res.status(200).send(songToDelete);
});

module.exports = app;
