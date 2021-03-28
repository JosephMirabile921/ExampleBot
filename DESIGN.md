# Design Document

## Problem Statement

Oftentimes, when learning new APIs and how to use them, it can take people hours of research to fully understand it, especially if they are a novice developer. With tons of information on the internet that are found with one click, it is easy for a user to experience information overload and get lost on how to actually get started with an API and how to implement it, despite how critical it is to learn to implement APIs, especially if someone is learning about web development. This can cause a lot of frustration as well as development setbacks. This presents a need for highly technical concepts like APIs to be presented condensely with clear examples of usage that get to the point and provide sufficient explanation without overwhelming someone.

## Bot Description

ExampleBot provides users in a Discord server with examples of API calls.

Discord is a chat messaging service. It includes a feature called “servers” which essentially are group chats that also allow people to call in them at the same time. In servers, there is the ability to add bots to it that enable people in the server to interact with them. For instance, some popular bots include trivia bots that can start a trivia game in the server when it is called for, and show trivia questions in the server’s chatbox that players can respond to the questions with their answers, where then the bot will then say whether they were right or wrong. The ability to have users interact with a bot directly in a server is why we are building ExampleBot as a Discord bot. We will be using the chatbox space as well, where ExampleBot will display examples in the chatbox when it is called for.

The reason that example bot is a good solution is because usually people need to spend a lot of time doing research on the internet, and they cannot make sure what they find is exactly what they want, since there are so many examples online mixed with other information. With the ExampleBot, users don’t have to research online anymore because the bot will provide simple, straightforward and trusted examples of the APIs that users are asking questions about.

The bot will have a conversation with the users, since they need users to input the API that they need examples for, and then return the examples. But it won’t have conversations with the volunteers who submit examples to the bot. It is not likely to provide an analytical result for a specific inquiry, because it will just return an example to the users about the API they are asking about and it is supposed to be simple, and it will just respond to volunteers' submission events.
Tagline: Search and get examples for any API method clearly and concisely.

## Use Cases


Use Case 1: Enter a method

1 Preconditions

  Must have a Discord account, have Discord open and opened to where ExampleBot is located.

2 Main Flow

  User enters the name of the method and its host library in order to learn about its usage [S1]. Bot will display the API method with simple inputs and example outputs submitted by another volunteer [S2].
 
3 Subflows

  [S1] User enters the example they’d like to learn about in the format of ?EXAMPLE followed by the method that the user would like to learn more about and its host library, separated by spaces e.g. ?EXAMPLE methodName hostLibrary (these fields will be substituted with the actual method name and host library the user is interested in).

  [S2] ExampleBot will display the API details.

4 Alternative Flows

  [E1] There is no example inputted for the specified API method.

Use Case 2: Enter an example

1 Preconditions
  Must have a separate system to test inputs/outputs before submitting to ExampleBot, must have a Discord account, have Discord open and opened to where ExampleBot is located.
 
2 Main Flow

  Volunteer runs API method with simple inputs and gets output [S1]. Volunteer then enters the API method name, host library, and input and outputs [S2]. ExampleBot then stores the input and outputs to be queried for later [S3].

3 Subflows

  [S1] Volunteer runs this in their own Terminal or someplace else to test their inputs/outputs to make sure they work.


  [S2] Volunteer enters fields for the example separated by spaces, starting the submission using the command ?SUBMIT e.g. ?SUBMIT methodName hostLibrary “input” “output” (these would be substituted with the actual method name, library, input, and output corresponding to what the volunteer wants to submit). Input and output fields must be enclosed in quotes to indicate a block of text will be inputted, and the volunteer must escape quotes and backslashes in their code prior to submitting as a result. 

  [S3] ExampleBot stores all inputs in database.

4 Alternative Flows

  [E1] There are already 5 examples for a specific API method, and ExampleBot prevents a Volunteer from moving forward with submission past the name.

## Design Sketches

### Sequence Flow Diagram

User

![Sequence diagram](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/main/design/sequence_diagram.png)

### Storyboards

User Storyboard

![User storyboard](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/main/design/storyboard-user.png)

Volunteer Storyboard

![Volunteer storyboard](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/main/design/storyboard-volunteer.png)

## Architecture Design

![Services diagram](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/main/design/services_diagram.png)

ExampleBot would rely on four technologies. Node.js has server-creating functionality included by default. ExampleBot would rely on this to have a server to receive requests from Discord servers. (In the context of Discord, a server is what a chat room is called.) Typescript will be used in place of Javascript where possible to keep code easier to understand and type-safe. Discord.js, a package that can be installed with npm, will allow the code to more neatly access Discord’s API endpoints. Finally, all storage will be handled by a MySQL database.

![Class diagram](https://github.com/BarlesCharkley75/SSW345-Design-Workshop/blob/main/design/class_diagram.png)

One class we will need to implement is the MethodExample class. This is the more user-facing class, and through the server it will retrieve the fields necessary to be able to display an API method example to a user, or retrieve an example from a Volunteer who wants to contribute to the database. The fields as such will be String input (to retrieve data necessary to get/post the example) and String output (to show the user the example, and in the case of the volunteer, to show how their inputs would look like if a user calls for it). Specifically, getExample is the method that allows the user to view an example. Since the user needs to enter the API method’s name and its host library to see an example, those are the two String parameters (String methodName, String hostLibrary) necessary to retrieve the example, MethodExample. postExample on the other hand is the method that allows a volunteer to add an API method example. Since the volunteer needs to explicitly specify the method’s name, host library, sample input, and sample output, those are the String parameters (String methodName, String hostLibrary, String input, String output) required to add an example. Nothing is returned in postExample, which is why it is void.

The MethodExample class will rely on the DatabaseManager class. This class will be responsible for querying the database to store and retrieve data. The fields of this manager class will allow it to authenticate with the database. Adding to the database will store each field of the MethodExample, and retrieving from the database will return an already constructed MethodExample.

