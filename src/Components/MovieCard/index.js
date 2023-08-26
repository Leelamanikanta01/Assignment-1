import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const MovieCard = ({ movie }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={movie.posterUrl}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="subtitle2">{movie.genre}</Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
