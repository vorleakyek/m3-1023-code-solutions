select "countries"."name" as "country",
        count(*) as "totalCity"
  from "cities"
  join "countries" using("countryId")
  group by "countries"."name";
