-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

insert into "users" ("username", "hashedPassword")
values ('autodidact', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA'),
       ('admin', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

-- Some starting Code Journal entries

insert into "entries" ("title", "notes", "photoUrl")
values ('Learn to Code!', 'Coding is fun!', 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/00-Blog_Thinkstock_Images/learning-to-code.jpg?width=595&height=400&name=learning-to-code.jpg'),
       ('Register users with Argon2', 'Use Argon2 to hash passwords.', 'https://argon2.online/images/argon2-online-home-og.png');
