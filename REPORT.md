# Example Bot

## Bot Objective

People usually need to spend a lot of time researching for information on the internet when they want to know more about an API method from certain libraries. However, most of the time what people find online is not exactly what they are looking for: The official documentations are usually just explanations with plain text, which are not easy to understand due to lack of examples; meanwhile, information from other sources are not always trustworthy, and determining the correctness would be hard for people without a solid background knowledge.

This is the essential problem that our Example bot is trying to solve. We want our users to get an easily understandable explanation and example to the API method they want to know by simply calling our bot with the API method name and its library. Through the response from the bot, users will be able to see the most top-rated answer from StackOverflow that is related to the specific method they are looking for. By using our Example bot, instead of spending a lot of time doing research on the internet about unknown API methods and filtering out useless information, users will get a simple answer that is accepted by most people within a few seconds.

## Features

1. <strong>?EXAMPLE command</strong>

    Once the bot is invited to a server, users can activate the bot by sending the command that begins with “?EXAMPLE” bot. The team enabled this feature by setting the if statement in index.ts file so that the bot would return nothing when the user’s message does not start with the proper prefix, “?EXAMPLE”. If the message doesn’t get filtered out by an if statement, the bot will be continued to process the next lines of the code. 
        
2. <strong>User Input of API Method & Library Name</strong>

    Users can input an API method and a library name following the prefix such as “?EXAMPLE get python”. After taking both keywords, the bot will make asynchronous HTTP requests to Stack Overflow API. 
        
3. <strong>Answer from StackOverflow</strong>

    After entering the command with the desired API method and library name, users will receive a message containing the answer post from stackoverflow.com. The bot goes through two API fetch iterations. First, the bot retrieves posts that contain a default tag of “API” and two additional tags which are an API method and library name entered by users. The API response is sorted by the number of votes in order to use the most reliable answers. The bot goes through posts and looks for only those with answers that have been accepted by the creator of the posts, then it stores IDs of that post. With the stored IDs, the bot begins the second iteration of fetching the answer body, and again, API returns the answer body that has the most votes from users. The answer body formatted in HTML and a link to the post get returned to discord users.

## Reflection

In terms of the development process, many of our team members were overall satisfied with the flow, but did encounter some challenges. Notably, the class diagram posed to be more complex to some of the team as they had no prior experience with using Discord with a database, or even Discord.js overall; however, the other parts in the design phase, like creating use cases and such were very intuitive and served incredibly useful during the implementation phase. 

On that note, implementation, of course, was the most difficult for the team. It was over half of the team’s first time creating a Discord bot, and some tasks proved to be more difficult than expected. Because of this, more people were needed on various issues than just the person assigned to them, but work distribution overall was still kept very equal in the sense that the team would all meet up to look at challenges together, even if only one person is doing the commits. Something the team enjoyed was because we were making a Discord bot, we were able to create a Discord server and have channels for each person to test their version of the bot on. This made it very easy for people to see where other people are in their process as well, and allowed us to easily view errors as they were happening so we can assist each other where needed.

The development process was very much enjoyed by the team. The Kanban board made it simple to see where people were in the process, and assigning points to issues and delegating them to people helped keep us aware on who was taking more challenging issues and would likely need more help later on; however, we found that some issues that were given low points were more challenging than thought, and some higher point issues were in fact more simple than expected. Because of this, the team reflects that it may have been better to each do our research on making a Discord bot before giving points because since many team members did not know how to make one, it was uncertain how difficult things may actually be. 

The project in all was very creative and pushed the team forward. Many team members learned about project management better, and many were technically boosted as they were also exposed to new languages and created a bot for the first time. We find that while we currently have issues still with the bot (ex. Error messages not functioning properly, text being returned is in HTML format) the progress we have made in being able to use the Stackoverflow API to return the top answer to a question relevant to APIs and methods is a feat itself, and we believe we have made excellent progress in reaching our goal over the past several weeks. All team members contributed evenly, especially in pair programming, and we were all comfortable with what we were able to achieve.


## Limitations

By far our biggest limitation for this project was time concerns. While there is still much more we would have liked to add and allow our bot to do, there is only so much allotted time available for us to work on what we wanted. This combined with the struggle of work required for other classes further shortened our time that could have been spent working on this bot. Differences in our schedules also contributed to having less overall time to meet together and fully go over what we wanted from each other. Another limitation we faced was lack of knowledge pertaining to the project. While we all had a good idea of what we needed to get done, we still had much to learn in implementing our goals.

## Future Work

If this project were to be continued, it would be expanded in two main ways: fixing the bugs that are currently present, and enhancing the bot such that the features are more robust and easy to use.

Currently, the bot checks the formatting of all messages that are sent in a server where it is present. This is confusing as a user would only expect messages beginning with the bot command ?EXAMPLE to provoke some response from it. This would be rectified by ensuring that only messages beginning with the bot command are responded to by the bot. 

The bot becomes unresponsive when given a host library and method name that returns no results from the Stack Exchange API. This is because of a design flaw with the method that queries the API, as a loop is employed to find a valid result in an array of responses, but if that array is empty the loop can not be exited. In a future design, there would be a check present for an empty array of responses that causes the loop to be exited so that the bot remains responsive on future attempts to query it.

Additionally, features that are already present can be augmented. The first architectural change that can be made is deployment of the bot server onto a remote cloud host. This would enable the bot to be usable at all times. A continuous deployment pipeline could be established such that when any new changes were merged into the main branch in Github, the changes could be deployed onto the remote host, allowing users to always have access to the latest approved changes.

The design of the method that queries the Stack Exchange API uses tags in the question as the names of the host library and method names. However, these are unlikely to be the host library or method name as the tags on Stack Overflow are more often used for more general information about the question being asked, such as the language being asked about. A future iteration of the design of this method could investigate the text of Stack Overflow questions in a more robust manner, such as using text matching of the question and answer content, or using natural language processing.

Continuous testing is important to ensure that when new features are added old ones behave as expected. The project includes a trivial set of tests using the “distest” Python module. This could be expanded upon alongside continuous deployment to establish a continuous integration suite.
