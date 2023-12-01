select "actors"."firstName",
        "actors"."lastName"
  from "actors"
  join "castMembers" using ("actorId")
  join "films" using ("filmId")
  where "films"."title" = 'Jersey Sassy';
