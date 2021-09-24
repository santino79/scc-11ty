const createCharactersTable =
    `CREATE TABLE IF NOT EXISTS
              characters(
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name VARCHAR(128) NOT NULL,
                alter_ego VARCHAR(128)
              );`;

const createCharactersNTable =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            alter_ego VARCHAR(128)
          );`;

const createCharacters2Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            eyes VARCHAR(128) NOT NULL
          );`;  
          
const createCharacters3Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            height INTEGER NOT NULL
          );`;    

const createCharacters4Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            gender VARCHAR(128) NOT NULL,
            hair VARCHAR(128) NOT NULL
          );`; 

const createCharacters5Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            nationality VARCHAR(128) NOT NULL
          );`;
          
const createCharacters6Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            partner_id INTEGER
          );`;

const createCharacters7Table =
`CREATE TABLE IF NOT EXISTS
          characters(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL,
            species VARCHAR(128)
          );`;
                
          
const createMovies1Table =
`CREATE TABLE IF NOT EXISTS
          movies(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(128) NOT NULL,
            release_date VARCHAR(10) NOT NULL
          );`; 

const createMovies2Table =
`CREATE TABLE IF NOT EXISTS
          movies(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(128) NOT NULL,
            release_year INTEGER NOT NULL,
            budget INTEGER NOT NULL
          );`;

const createMovies3Table =
`CREATE TABLE IF NOT EXISTS
          movies(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title VARCHAR(128) NOT NULL,
            lead_actor_id INTEGER NOT NULL
          );`;


const createActorsTable =
`CREATE TABLE IF NOT EXISTS
          actors(
            actor_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL
          );`;

const createMoviesActorsLinkTable =
`CREATE TABLE IF NOT EXISTS
          movie_actors_link(
            link_id INTEGER PRIMARY KEY AUTOINCREMENT,
            movie_id INTEGER NOT NULL,
            actor_id INTEGER NOT NULL
          );`;

const createCapCivTable =
`CREATE TABLE IF NOT EXISTS
          cap_actors(
            actor_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL
          );`;

const createAvengersTable =
`CREATE TABLE IF NOT EXISTS
          avengers_actors(
            actor_id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(128) NOT NULL
          );`;

const insertIntoCapActors = (name) => (
`INSERT INTO cap_actors (name) values ('${name}');`
); 

const insertIntoAvengersActors = (name) => (
`INSERT INTO avengers_actors (name) values ('${name}');`
); 
          
const insertIntoMoviesActorsLink = (movie_id, actor_id) => (
  `INSERT INTO movie_actors_link (movie_id, actor_id) values (${movie_id}, ${actor_id});`
  );

const insertIntoActors1 = (name) => (
  `INSERT INTO actors (name) values ('${name}');`
  );            
          
const insertIntoCharacters = (name, alter_ego) => (
`INSERT INTO characters (name, alter_ego) values ('${name}', '${alter_ego}');`
);

const insertIntoCharactersN = (name, alter_ego) => (
  `INSERT INTO characters (name, alter_ego) values ('${name}', ${alter_ego});`
  );

const insertIntoCharacters2 = (name, eyes) => (
  `INSERT INTO characters (name, eyes) values ('${name}', '${eyes}');`
  );

const insertIntoCharacters3 = (name, height) => (
  `INSERT INTO characters (name, height) values ('${name}', ${height});`
  );
    
const insertIntoCharacters4 = (name, gender, hair) => (
  `INSERT INTO characters (name, gender, hair) values ('${name}', '${gender}', '${hair}');`
  );

const insertIntoCharacters5 = (name, nationality) => (
  `INSERT INTO characters (name, nationality) values ('${name}', '${nationality}');`
  );

const insertIntoCharacters6 = (name, partner_id) => (
  `INSERT INTO characters (name, partner_id) values ('${name}', ${partner_id});`
  );

const insertIntoCharacters7 = (name, species) => (
  `INSERT INTO characters (name, species) values ('${name}', '${species}');`
  );
    
    
const insertIntoMovies1 = (title, release_date) => (
  `INSERT INTO movies (title, release_date) values ('${title}', '${release_date}');`
  );

const insertIntoMovies2 = (title, release_year, budget) => (
  `INSERT INTO movies (title, release_year, budget) values ('${title}', ${release_year}, ${budget});`
  );

const insertIntoMovies3 = (title, lead_actor_id) => (
  `INSERT INTO movies (title, lead_actor_id) values ('${title}', ${lead_actor_id});`
  );

module.exports = {
    lessons: [

              {
              'lesson_id': 1,
              'name': 'What is SQL?',
              'short_name': 'what-is-sql',
              'dbsetup': '',
              'table_names': "",
              'answer': "",
              'prompt': '',
              'is_live': false
              },

              {
              'lesson_id': 2,
              'name': 'SELECT *',
              'short_name': 'sql-select',
              'dbsetup': createCharactersTable + insertIntoCharacters("Incredible Hulk","Bruce Banner") + insertIntoCharacters("Iron Man","Tony Stark")  + insertIntoCharacters("Captain America","Steve Rogers"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters;",
              'prompt': 'The database table below contains data about selected characters from the <strong>Marvel Cinematic Universe</strong>. If we wanted to grab ALL of the character data from the "characters" table, we would use the following query:<br /><br /><code>SELECT * FROM characters;</code><br /><br />Type that into the editor box below and click the Run SQL button.',
              'is_live': true
              },

              {
              'lesson_id': 3,
              'name': 'SELECT specific columns',
              'short_name': 'sql-select-columns',
              'dbsetup': createCharactersTable + insertIntoCharacters("Incredible Hulk","Bruce Banner") + insertIntoCharacters("Iron Man","Tony Stark")  + insertIntoCharacters("Captain America","Steve Rogers"),
              'table_names': "characters",
              'answer': "SELECT name FROM characters;",
              'prompt': 'SELECT * brings back too much data. But what would we query for if we only wanted to return the name of our superheroes? Type your SQL statement in the editor below and hit the Run SQL button to see how you get on.',
              'is_live': true
              },

              {
              'lesson_id': 4,
              'name': 'WHERE ... Equals',
              'short_name': 'sql-where-equals',
              'dbsetup': createCharacters2Table + insertIntoCharacters2("Thor","blue") + insertIntoCharacters2("Thanos","red")  + insertIntoCharacters2("Captain America","blue"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE eyes='red';",
              'prompt': 'When you want to get your hands/hand on the Infinity Stones, you can\'t be rolling around looking like a blue-eyed All-American hero. No, we want only rows where the character has red eyes.',
              'is_live': true
              },

              {
              'lesson_id': 5,
              'name': 'WHERE ... Greater than',
              'short_name': 'sql-where-greater-than',
              'dbsetup': createCharacters3Table + insertIntoCharacters3("Thanos",198) + insertIntoCharacters3("Peter Parker",175)  + insertIntoCharacters3("Tony Stark",182),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE height > 180;",
              'prompt': 'This mission is going to require a little lifting of things off the top shelf. That means we need characters with a little height to help us out (sorry Spidey).<br /><br />Write a SQL query that gets us all characters with height greater than 180cm.',
              'is_live': true
              },

              {
              'lesson_id': 6,
              'name': 'AND',
              'short_name': 'sql-and',
              'dbsetup': createCharacters4Table + insertIntoCharacters4("Thor","Male","Blond") + insertIntoCharacters4("The Wasp","Female","Brown") + insertIntoCharacters4("Jessica Jones","Female","Black") + insertIntoCharacters4("Hawkeye","Male","Brown"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE gender='Female' AND hair='Black'",
              'prompt': 'Sometimes we want to be very specific in what we return from our data table.<br /><br />Write a query that only brings back black-haired females from our character table.',
              'is_live': true
              },

              {
              'lesson_id': 7,
              'name': 'OR',
              'short_name': 'sql-or',
              'dbsetup': createCharacters4Table + insertIntoCharacters4("Thor","Male","Blond") + insertIntoCharacters4("The Wasp","Female","Brown") + insertIntoCharacters4("Jessica Jones","Female","Black") + insertIntoCharacters4("Hawkeye","Male","Brown"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE hair='Black' OR hair='Brown'",
              'prompt': 'We\'re not being picky on gender this time but Nick Fury has been specific about the hair colour he wants to see.<br /><br />Bring back all rows where the character has either black OR brown hair.',
              'is_live': true
              },

              {
              'lesson_id': 8,
              'name': 'IN',
              'short_name': 'sql-in',
              'dbsetup': createCharacters4Table + insertIntoCharacters4("Thor","Male","Blond") + insertIntoCharacters4("The Wasp","Female","Brown") + insertIntoCharacters4("Jessica Jones","Female","Black") + insertIntoCharacters4("Hawkeye","Male","Brown"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE hair IN ('Black','Brown');",
              'prompt': 'Let\'s tidy up the query from the last lesson. Use the IN keyword to bring back the same results i.e. everyone who has black OR brown hair.',
              'is_live': true
              },

              {
              'lesson_id': 9,
              'name': 'NOT',
              'short_name': 'sql-not',
              'dbsetup': createCharacters2Table + insertIntoCharacters2("Thor","blue") + insertIntoCharacters2("Thanos","red") + insertIntoCharacters2("Captain America","blue") + insertIntoCharacters2("Bruce Banner","brown"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE eyes NOT IN ('blue','brown');",
              'prompt': 'This time we won\'t specifically ask for an exact match on eye color. But we do know that we don\'t want to see any blue OR brown eyes in our character line-up.<br /><br />Use the NOT IN syntax to give that a try.',
              'is_live': true
              },

              {
              'lesson_id': 10,
              'name': 'LIKE',
              'short_name': 'sql-like',
              'dbsetup': createCharactersTable + insertIntoCharacters("Iron Man","Tony Stark") + insertIntoCharacters("Incredible Hulk","Bruce Banner") + insertIntoCharacters("Iron Fist","Danny Rand"),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE name LIKE '%IRON%';",
              'prompt': 'This particular mission requires a certain kind of \'steel\' to make sure the task is accomplished.<br /><br />We want all characters from the table with the word "Iron" in their name.',
              'is_live': true
              },

              {
              'lesson_id': 11,
              'name': 'DATE',
              'short_name': 'sql-date',
              'dbsetup': createMovies1Table + insertIntoMovies1("Iron Man","2008-05-02") + insertIntoMovies1("Iron Man 2","2010-05-07") + insertIntoMovies1("Iron Man 3","2013-05-03"),
              'table_names': "movies",
              'answer': "SELECT * FROM movies WHERE release_date < '2012-12-31'",
              'prompt': 'Let\'s imagine it\'s New Year\'s Eve 2012 and we want to watch a Robert Downey Jr. movie.<br /><br />Hit the database and bring back all Iron Man movies released BEFORE 31st December 2012.',
              'is_live': true
              },


              {
              'lesson_id': 12,
              'name': 'DISTINCT',
              'short_name': 'sql-distinct',
              'dbsetup': createCharacters5Table + insertIntoCharacters5("Thor","Asgardian") + insertIntoCharacters5("Loki","Asgardian") + insertIntoCharacters5("Captain America","American") + insertIntoCharacters5("Black Widow","Russian") + insertIntoCharacters5("Tony Stark","American") + insertIntoCharacters5("Peter Parker","American") + insertIntoCharacters5("Wong","Chinese"),
              'table_names': "characters",
              'answer': "SELECT DISTINCT nationality FROM characters;",
              'prompt': 'Oh oh. ICE are at the door of the Avengers Tower and they want to see some paperwork.<br /><br />How would we get a DISTINCT list of of the different nationalities of the characters in our table?',
              'is_live': true
              },

              {
              'lesson_id': 13,
              'name': 'ORDER BY',
              'short_name': 'sql-order-by',
              'dbsetup': createCharacters3Table + insertIntoCharacters3("Thanos",198) + insertIntoCharacters3("Peter Parker",175) + insertIntoCharacters3("Tony Stark",182) + insertIntoCharacters3("Rocket",120) + insertIntoCharacters3("Thor",195) + insertIntoCharacters3("Loki",188),
              'table_names': "characters",
              'answer': "SELECT * FROM characters ORDER BY height DESC;",
              'prompt': 'Squabbles are starting amongst the superhero crew over who is actually the tallest. Write a SQL query to order the characters by height in descending order.',
              'is_live': true
              },

              {
              'lesson_id': 14,
              'name': 'CASE',
              'short_name': 'sql-case',
              'dbsetup': createCharacters7Table + insertIntoCharacters7("Tony Stark","Human") + insertIntoCharacters7("Steve Rogers","Human") + insertIntoCharacters7("Howard The Duck","Duckworldian") + insertIntoCharacters7("Natasha Romanoff","Human") + insertIntoCharacters7("Rocket Raccoon","Halfworlder") + insertIntoCharacters7("Scott Lang","Human") + insertIntoCharacters7("Groot","Flora Colossus"),
              'table_names': "characters",
              'answer': "SELECT name, CASE WHEN species = 'Human' THEN 'HUMAN' ELSE 'ALIEN' END FROM characters;",
              'prompt': 'We love all of our superheroes the same regardless of where they come from. But if we wanted to get a list of their names and their species group in two groups: 1) HUMAN and 2) ALIEN, how would you use the CASE statement to do it?',
              'is_live': true
              },


              {
              'lesson_id': 15,
              'name': 'LIMIT # of returned rows',
              'short_name': 'sql-limit',
              'dbsetup': createCharacters3Table + insertIntoCharacters3("Thanos",198) + insertIntoCharacters3("Peter Parker",175) + insertIntoCharacters3("Tony Stark",182) + insertIntoCharacters3("Rocket",120) + insertIntoCharacters3("Thor",195) + insertIntoCharacters3("Loki",188),
              'table_names': "characters",
              'answer': "SELECT * FROM characters ORDER BY height ASC LIMIT 1;",
              'prompt': 'The height fight rumbles on amongst our heroes. This time we want to see who is the shortest of the group.<br /><br />You\'ll have to use an ORDER BY statement again along with the LIMIT to return just one diminutive superhero.',
              'is_live': true
              },

              {
              'lesson_id': 16,
              'name': 'COUNT(*)',
              'short_name': 'sql-count',
              'dbsetup': createCharacters5Table + insertIntoCharacters5("Thor","Asgardian") + insertIntoCharacters5("Loki","Asgardian") + insertIntoCharacters5("Captain America","American") + insertIntoCharacters5("Black Widow","Russian") + insertIntoCharacters5("Tony Stark","American") + insertIntoCharacters5("Peter Parker","American") + insertIntoCharacters5("Wong","Chinese"),
              'table_names': "characters",
              'answer': "SELECT COUNT(*) FROM characters;",
              'prompt': 'Sometimes doing a headcount in our superhero group isn\'t as easy as it sounds. So if we want to see just how many superheroes we have in our group, we use COUNT.<br /><br />Give it a go now.',
              'is_live': true
              },

              {
              'lesson_id': 17,
              'name': 'COUNT(*) ... WHERE',
              'short_name': 'sql-count-where',
              'dbsetup': createCharacters5Table + insertIntoCharacters5("Thor","Asgardian") + insertIntoCharacters5("Loki","Asgardian") + insertIntoCharacters5("Captain America","American") + insertIntoCharacters5("Black Widow","Russian") + insertIntoCharacters5("Tony Stark","American") + insertIntoCharacters5("Peter Parker","American") + insertIntoCharacters5("Wong","Chinese"),
              'table_names': "characters",
              'answer': "SELECT COUNT(*) FROM characters WHERE nationality='Asgardian';",
              'prompt': 'There is a census happening far away in Asgard. So we need to count how many Asgardian superheroes we have hanging out with us.<br /><br />Just the number of them, not all of their details. So use COUNT and the WHERE clause to filter out those pesky humans.',
              'is_live': true
              },

              {
              'lesson_id': 18,
              'name': 'SUM',
              'short_name': 'sql-sum',
              'dbsetup': createMovies2Table + insertIntoMovies2("The Avengers",2012,220) + insertIntoMovies2("Avengers: Age of Ultron",2015,250) + insertIntoMovies2("Avengers: Infinity War",2018,321) + insertIntoMovies2("Avengers: Endgame",2019,356),
              'table_names': "movies",
              'answer': "SELECT SUM(budget) FROM movies;",
              'prompt': 'It\'s not all about the price tag when it comes to making these movies. Not unless you are a studio executive looking to see how big of a cheque you are going to have to write to get one made.<br /><br />Let\'s pretend you are Marvel\'s accountant for a second. Get the total budget for all four Avengers movies (and remember these budget figures are in MILLIONS of US dollars).',
              'is_live': true
              },

              {
              'lesson_id': 19,
              'name': 'AVG',
              'short_name': 'sql-avg',
              'dbsetup': createMovies2Table + insertIntoMovies2("The Avengers",2012,220) + insertIntoMovies2("Avengers: Age of Ultron",2015,250) + insertIntoMovies2("Avengers: Infinity War",2018,321) + insertIntoMovies2("Avengers: Endgame",2019,356),
              'table_names': "movies",
              'answer': "SELECT AVG(budget) FROM movies;",
              'prompt': 'We can see by looking at the data table that the cost of making an Avengers movie went up quite dramatically over time.<br /><br /><strong>The price of success.</strong><br /><br />How much did an average Avengers movie cost to make though?',
              'is_live': true
              },

              {
              'lesson_id': 20,
              'name': 'MAX and MIN',
              'short_name': 'sql-max-min',
              'dbsetup': createMovies2Table + insertIntoMovies2("The Avengers",2012,220) + insertIntoMovies2("Avengers: Age of Ultron",2015,250) + insertIntoMovies2("Avengers: Infinity War",2018,321) + insertIntoMovies2("Avengers: Endgame",2019,356),
              'table_names': "movies",
              'answer': "SELECT MIN(budget), MAX(budget) FROM movies;",
              'prompt': 'We can use our new found MIN and MAX superpowers to get the answer to both of these questions in one query: 1) what was the lowest budget of the four Avengers movies AND 2) what was the highest budget of the four Avengers movies?',
              'is_live': true
              },

              {
              'lesson_id': 21,
              'name': 'GROUP BY',
              'short_name': 'sql-group-by',
              'dbsetup': createCharacters5Table + insertIntoCharacters5("Thor","Asgardian") + insertIntoCharacters5("Loki","Asgardian") + insertIntoCharacters5("Captain America","American") + insertIntoCharacters5("Black Widow","Russian") + insertIntoCharacters5("Tony Stark","American") + insertIntoCharacters5("Peter Parker","American") + insertIntoCharacters5("Wong","Chinese"),
              'table_names': "characters",
              'answer': "SELECT nationality, COUNT(*) FROM characters GROUP BY nationality;",
              'prompt': 'Just knowing how many superheroes we have in total is good. Knowing which different nationalities they represent is good.<br /><br />But we want to know how many superheroes of each nationality we have.<br /><br />So we\'ll be using both COUNT and GROUP BY. Give it a go and see how you get on.',
              'is_live': true
              },

              {
              'lesson_id': 22,
              'name': 'HAVING',
              'short_name': 'sql-having',
              'dbsetup': createCharacters5Table + insertIntoCharacters5("Thor","Asgardian") + insertIntoCharacters5("Loki","Asgardian") + insertIntoCharacters5("Captain America","American") + insertIntoCharacters5("Black Widow","Russian") + insertIntoCharacters5("Tony Stark","American") + insertIntoCharacters5("Peter Parker","American") + insertIntoCharacters5("Wong","Chinese"),
              'table_names': "characters",
              'answer': "SELECT nationality, COUNT(*) FROM characters GROUP BY nationality HAVING COUNT(id) > 1;",
              'prompt': 'We only want to count the number of superheroes by nationality when there are more than one of that nationality present. Make sense? No solos.<br /><br />You\'ll use COUNT, GROUP BY and HAVING to make this work.',
              'is_live': true
              },

              {
              'lesson_id': 23,
              'name': 'NULL',
              'short_name': 'sql-null',
              'dbsetup': createCharactersNTable + insertIntoCharactersN("Incredible Hulk","'Bruce Banner'") + insertIntoCharactersN("Iron Man","'Tony Stark'") + insertIntoCharactersN("Captain America","'Steve Rogers'") + insertIntoCharactersN("Howard The Duck", null),
              'table_names': "characters",
              'answer': "SELECT * FROM characters WHERE alter_ego IS NOT NULL;",
              'prompt': 'We like Alter Egos. We only want characters who HAVE an alter ego. So use the NULL value to eliminate any characters from our table who don\'t have an alter ego.',
              'is_live': true
              },

              {
              'lesson_id': 24,
              'name': 'COALESCE',
              'short_name': 'sql-coalesce',
              'dbsetup': createCharactersNTable + insertIntoCharactersN("Incredible Hulk","'Bruce Banner'") + insertIntoCharactersN("Iron Man","'Tony Stark'") + insertIntoCharactersN("Captain America","'Steve Rogers'") + insertIntoCharactersN("Howard The Duck", null),
              'table_names': "characters",
              'answer': "SELECT COALESCE(alter_ego, name) FROM characters;",
              'prompt': 'NULLs really are a pain in the ass. Use COALESCE to substitute in the character\'s name if they have a NULL value for their Alter Ego name.',
              'is_live': true
              },

              {
              'lesson_id': 25,
              'name': 'Nested queries',
              'short_name': 'sql-nested',
              'dbsetup': createMovies2Table + insertIntoMovies2("The Avengers",2012,220) + insertIntoMovies2("Avengers: Age of Ultron",2015,250) + insertIntoMovies2("Avengers: Infinity War",2018,321) + insertIntoMovies2("Avengers: Endgame",2019,356),
              'table_names': "movies",
              'answer': "SELECT * FROM movies WHERE budget = (SELECT MIN(budget) FROM movies);",
              'prompt': 'Remember how we use the MIN and MAX functions to find the lowest and highest budgets from our Avengers movies?<br /><br />Now I want you to use one of those again in a NESTED QUERY to bring back all details of the Avengers movie with the LOWEST budget.',
              'is_live': true
              },

              {
              'lesson_id': 26,
              'name': 'Inner joins',
              'short_name': 'sql-joins',
              'dbsetup': createMovies3Table + insertIntoMovies3("Iron Man",1) + insertIntoMovies3("Guardians of the Galaxy",2) + insertIntoMovies3("Iron Man 3",1) + insertIntoMovies3("Thor",4)
              + createActorsTable + insertIntoActors1('Robert Downey Jr.') + insertIntoActors1('Chris Pratt') + insertIntoActors1('Brie Larson'),
              'table_names': "movies, actors",
              'answer': "SELECT * FROM movies INNER JOIN actors ON movies.lead_actor_id = actors.actor_id",
              'prompt': 'Let\'s put together some of our favourite Marvel movies with the name of the actor who played the lead role in them.<br /><br />We only want connections where there is a matching connection in both tables though so it\'ll be the INNER JOIN we are using.',
              'is_live': true
              },


              {
              'lesson_id': 27,
              'name': 'Left joins',
              'short_name': 'sql-left-joins',
              'dbsetup': createMovies3Table + insertIntoMovies3("Iron Man",1) + insertIntoMovies3("Guardians of the Galaxy",2) + insertIntoMovies3("Iron Man 3",1) + insertIntoMovies3("Thor",4)
              + createActorsTable + insertIntoActors1('Robert Downey Jr.') + insertIntoActors1('Chris Pratt') + insertIntoActors1('Brie Larson'),
              'table_names': "movies, actors",
              'answer': "SELECT * FROM movies LEFT JOIN actors ON movies.lead_actor_id = actors.actor_id",
              'prompt': 'In the previous exercise, we used an inner join to connect our movies with their lead actors.<br /><br />This time we don\'t care if there is a match between the \'movies\' table and the \'actors\' table. We want all of the movies and their lead actor, even if the actor isn\'t present in the actors table.',
              'is_live': true
              },

              {
              'lesson_id': 28,
              'name': 'Multiple joins',
              'short_name': 'sql-multiple-joins',
              'dbsetup': createMovies1Table + insertIntoMovies1("Iron Man","2008-05-02") + insertIntoMovies1("Captain America: Civil War","2016-05-06") + insertIntoMovies1("Ant Man","2015-07-17")
              + createActorsTable + insertIntoActors1('Robert Downey Jr.') + insertIntoActors1('Chris Evans') + insertIntoActors1('Paul Rudd')
              + createMoviesActorsLinkTable + insertIntoMoviesActorsLink(1,1) + insertIntoMoviesActorsLink(2,1) + insertIntoMoviesActorsLink(2,2) + insertIntoMoviesActorsLink(2,3) + insertIntoMoviesActorsLink(3,3),
              'table_names': "movies, actors, movie_actors_link",
              'answer': "SELECT * FROM movies INNER JOIN movie_actors_link ON movies.id=movie_actors_link.movie_id INNER JOIN actors ON movie_actors_link.actor_id = actors.actor_id",
              'prompt': 'As the years have went on, we have more and more Marvel movies to enjoy. And more of our favourite characters (and therefore actors) keep showing up in different movies.<br /><br />Write a SQL query to bring together the movies and the actors who appeared in them - using the link table in the middle.',
              'is_live': true
              },

              {
              'lesson_id': 29,
              'name': 'Union joins',
              'short_name': 'sql-union-joins',
              'dbsetup': createCapCivTable + insertIntoCapActors("Chris Evans") + insertIntoCapActors("Robert Downey Jr") + insertIntoCapActors("Scarlett Johansson") + insertIntoCapActors("Elizabeth Olsen")
              + createAvengersTable + insertIntoAvengersActors("Chris Evans") + insertIntoAvengersActors("Robert Downey Jr") + insertIntoAvengersActors("Scarlett Johansson") + insertIntoAvengersActors("Karen Gillan"),
              'table_names': "cap_actors, avengers_actors",
              'answer': "SELECT name FROM cap_actors UNION SELECT name FROM avengers_actors",
              'prompt': 'Ignore the terrible database design but we have two tables - one has actors who appeared in the Captain America: Civil War movie and another table containing a list of actors who appeared in the Avengers: Endgame movie.<br /><br />Your task is to get a list of the names of all actors who appeared in either movie - with no duplicate records.',
              'is_live': true
              },

              {
              'lesson_id': 30,
              'name': 'Table alias',
              'short_name': 'sql-table-alias',
              'dbsetup': createMovies1Table + insertIntoMovies1("Iron Man","2008-05-02") + insertIntoMovies1("Captain America: Civil War","2016-05-06") + insertIntoMovies1("Ant Man","2015-07-17")
              + createActorsTable + insertIntoActors1('Robert Downey Jr.') + insertIntoActors1('Chris Evans') + insertIntoActors1('Paul Rudd')
              + createMoviesActorsLinkTable + insertIntoMoviesActorsLink(1,1) + insertIntoMoviesActorsLink(2,1) + insertIntoMoviesActorsLink(2,2) + insertIntoMoviesActorsLink(2,3) + insertIntoMoviesActorsLink(3,3),
              'table_names': "movies, actors, movie_actors_link",
              'answer': "SELECT * FROM movies a INNER JOIN movie_actors_link b ON a.id=b.movie_id INNER JOIN actors c ON b.actor_id = c.actor_id",
              'prompt': 'We\'re going to take another run at the three table join we did in the Multiple Joins Quiz.<br /><br />Writing out the full table names is tedious, looks messy and is fraught with the dangers of mis-typing something and borking your whole query.<br /><br />Use a TABLE ALIAS for each table to get a dataset back for each movie with their actors that appeared in them.',
              'is_live': true
              },

              {
              'lesson_id': 31,
              'name': 'Column alias',
              'short_name': 'sql-column-alias',
              'dbsetup': createMovies1Table + insertIntoMovies1("Iron Man","2008-05-02") + insertIntoMovies1("Captain America: Civil War","2016-05-06") + insertIntoMovies1("Ant Man","2015-07-17")
              + createActorsTable + insertIntoActors1('Robert Downey Jr.') + insertIntoActors1('Chris Evans') + insertIntoActors1('Paul Rudd')
              + createMoviesActorsLinkTable + insertIntoMoviesActorsLink(1,1) + insertIntoMoviesActorsLink(2,1) + insertIntoMoviesActorsLink(2,2) + insertIntoMoviesActorsLink(2,3) + insertIntoMoviesActorsLink(3,3),
              'table_names': "movies, actors, movie_actors_link",
              'answer': "SELECT a.title as movie_name, c.name as actor_name FROM movies a INNER JOIN movie_actors_link b ON a.id=b.movie_id INNER JOIN actors c ON b.actor_id = c.actor_id",
              'prompt': 'Let\'s link our movies and actors back together but this time we only want to see two columns returned - 1) movie_name (which is the title of the movie) and 2) actor_name (which is the actor\'s name).',
              'is_live': true
              },

              {
              'lesson_id': 32,
              'name': 'Self joins',
              'short_name': 'sql-self-join',
              'dbsetup': createCharacters6Table + insertIntoCharacters6("Iron Man",2) + insertIntoCharacters6("Pepper Potts",1) + insertIntoCharacters6("Scarlet Witch",4) + insertIntoCharacters6("Vision",3) + insertIntoCharacters6("Ant Man",6) + insertIntoCharacters6("The Wasp",5),
              'table_names': "characters",
              'answer': "SELECT a.name as character_name, b.name as partner_name FROM characters a INNER JOIN characters b ON a.partner_id=b.id;",
              'prompt': 'Relationships are as important to superheroes as they are to the rest of us mere mortals.<br /><br />Use your TABLE ALIAS and COLUMN ALIAS knowledge to SELF JOIN the \'characters\' table to itself and return two columns called \'character_name\' and \'partner_name\'.',
              'is_live': true
              },

              {
              'lesson_id': 33,
              'name': 'INSERT INTO',
              'short_name': 'sql-insert-into',
              'dbsetup': '',
              'answer': "",
              'prompt': '',
              'is_live': false
              },

              {
              'lesson_id': 34,
              'name': 'UPDATE',
              'short_name': 'sql-update',
              'dbsetup': '',
              'answer': "",
              'prompt': '',
              'is_live': false
              },

              {
              'lesson_id': 35,
              'name': 'DELETE',
              'short_name': 'sql-delete',
              'dbsetup': '',
              'answer': "",
              'prompt': '',
              'is_live': false
              }
    
    ]
    }