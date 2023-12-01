select "c"."firstName",
        "c"."lastName",
        sum("p"."amount") as "totalAmount"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  group by "c"."customerId"
  order by "totalAmount" desc;
