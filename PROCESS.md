# Process Document

## Story Creation

For the creation of our story as well as assigning issues to each group member, we ended up playing a game of “planning poker”. We went around our zoom call and asked each other about how difficult we found each issue, assigning personal story points and choosing our final answer based on the majority vote for points. If there were any unclear results, the highest and lowest scoring group members would discuss their reasoning and we would repeat the process from this new outlook. Through this, we were able to gauge the capabilities of each other’s skills as well as assign our story points to each of the issues we were about to tackle. 

## Development Process

So far, all the tasks that are assigned to the team members have been completed. However, we found some bugs that need to be fixed in the next iteration. For example: if the bot cannot find what the user is asking for, it will break instead of returning an error message; it also will react to user inputs even without the prefix. Though, these bugs do not affect the functionality heavily, and the team is still able to finish the use cases in plan.

## Task Status

So far, all the tasks that are assigned to the team members have been completed. However, we found some bugs that need to be fixed in the next iteration. For example: if the bot cannot find what the user is asking for, it will break instead of returning an error message; it also will react to user inputs even without the prefix. Though, these bugs do not affect the functionality heavily, and the team is still able to finish the use cases in plan.

Tasks:

- ?EXAMPLE command added ✅
- The bot sends a message as output ✅
- The bot accesses the StackOverflow API ✅
- The bot checks if the input is formatted correctly ✅
- User can enter text and the bot can access it ✅

Discovered tasks:

- Add integration tests with distest ✅
- Fix CI so that it checks for consistent code ✅
- Send error message if no results are found ❌
- Check only bot commands (beginning with ?EXAMPLE) for correct formatting ❌

![project board](https://github.com/BarlesCharkley75/ExampleBot/blob/main/process/process_proj_board.png)


## Reflection

When it comes to being able to complete tasks on time, individuals with more difficult tasks were not able to do so alone, and time needed to be allocated where other group members can meet with those individuals to do pair programming and solve the issues. This was expected for people with tasks that had points upwards of 5; however, one task that was given 3 story points (error message handling) proved to me more difficult than expected. We quickly realized that some other tasks were in fact easier than expected and completed quickly (like the Users can enter API name and library into command). As a result, since many of us did not have experience with creating discord bots, our story points allocation was a bit flawed. Something to keep in mind next time we work on things we haven’t had much experience with before is to do more research before allocating story points using the “planning poker” method. That way we all have some idea on how difficult/easy tasks actually are, and we’ll be able to anticipate better who needs more help early on.

Overall, dividing tasks into stories and use cases and assigning them to people helped a lot with understanding who was exactly working on what, and it helped make everything come together with not many holes left since things were planned very well. We were able to write our code so that any interferences with our code were nothing major, and we were able to see unique code pretty easily. Our next steps involve working more on handling errors, but we are very happy that we managed to successfully retrieve the top answers to a wide variety of topics.

## Demo

A demo can be found at `demo.mp4` in the `process` folder.
