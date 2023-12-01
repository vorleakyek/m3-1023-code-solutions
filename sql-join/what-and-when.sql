select "films"."releaseYear" as "Release Year",
        "genres"."name" as "Genres"
  from "films"
  join "filmGenre" using ("filmId")
  join "genres" using ("genreId")
  where "films"."title" = 'Boogie Amelie';
