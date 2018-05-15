## 3.) Data Modeling
#### Additionally please explain what storage technologies you would use and why you chose that.

I chose to use a relational database because I saw many different relationships between all of the data. Between all the information necessary to store from just the game itself (game data, game information, game summary), and all the players that could accrue various stats in a given game, I felt that splitting up tables by state category was the best option. I also split team stats into their own tables, even though these could be found be aggregating player stats. Having them in separate tables felt easier to handle and easier to lookup without needing to go through player information as well.

I would use an Object Storage System to store all of this data. Since object stores are optimized for large amounts of data, I believed this would be the best solution for the hundreds and thousands of games, players, and teams that need to be stored. Object storage also lends itself to scalability, which is critical for this case.
