-- DANGER: this is NOT how to do it in the real world.
-- You should NEVER EVER check user data into Git!

insert into "users" ("userId", "username", "hashedPassword")
values (1, 'autodidact', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA'),
       (2, 'admin', '$argon2i$v=19$m=4096,t=3,p=1$h7icQD/xZr8akZsX+hNA0A$h68atJWyjvunAwNOpSpMfg9sPvoMQ6dKwoh0dJhurWA');

-- Some starting Code Journal entries

insert into "entries" ("userId", "title", "notes", "photoUrl")
values
  (1, 'Learn to Code!', 'Coding is fun!', 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/00-Blog_Thinkstock_Images/learning-to-code.jpg?width=595&height=400&name=learning-to-code.jpg'),
  (1, 'Register users with Argon2', 'Use Argon2 to hash passwords.', 'https://argon2.online/images/argon2-online-home-og.png'),
  (1, 'Authorize with JWT', 'JWT stands for Jason Web Token', 'https://3031339482-files.gitbook.io/~/files/v0/b/gitbook-legacy-files/o/assets%2F-LA-UVvPgjhMENW3Vxyw%2F-LpZZoszqNqEzfdT29s8%2F-LpZaLsJhjTiD7hZRuxv%2FWhy-Cant-I-Just-Send-JWTs-Without-OAuth-JWT.png?alt=media&token=1225e452-e1c1-4e16-8d12-94ca93f04633'),
  (2, 'Keep the site secure', 'Require authorization.', 'https://www.shutterstock.com/image-vector/authorized-stamp-sticker-seal-round-260nw-598824827.jpg'),
  (2, 'Manage the database', 'Keep the code clean and up to date.', 'https://cdn1.iconfinder.com/data/icons/big-data-59/64/data_cleaning_database_cleanup_sweep-512.png'),
  (2, 'Mange the users', 'Grant authorization to those who need it.', 'https://images.ctfassets.net/kbkgmx9upatd/4ahsyxBLrwLdhPuQ6dia8z/6ac8eed02315eb774b1dbd11d56e0737/authorization-process-diagram.png');
