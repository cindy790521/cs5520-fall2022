This is a mini gaming app for the user to guess a number (between 1020 and 1029) that I have chosen randomly.  
There are 3 screens in this app.  
1.Starting screen:  
![Alt text](./images/screenshots/start.png?raw=true "start")
![Alt text](./images/screenshots/start_invalid.png?raw=true "start_invalid")  
It shows a card (a view with rounded corner and shadow) with a TextInput and two buttons (Reset and Confirm). The user is only allowed to enter a number (choose a proper keyboard) up to 4 digits. The entered value should be between 1020 and 1029 (inclusive). If the input value is invalid (a number out of the accepted range or a pasted alphabetical value), an alert would be shown to the user with a button to reset the input.  
2.Game screen:  
![Alt text](./images/screenshots/game_correct.png?raw=true "game_correct")
![Alt text](./images/screenshots/game_incorrect.png?raw=true "game_incorrect")  
This screen is shown in a modal, which shows a message to the user notifying them if the number they entered matches what you have chosen (which means they have won the game) or if it's bigger or smaller. If they have won they will see another message congratulating them. If they haven't won, users can choose to continue the game (taken back to the starting game to guess again) or choose to end the game.  
Final screen:  
![Alt text](./images/screenshots/final_win.png?raw=true "final_win")
![Alt text](./images/screenshots/final_lose.png?raw=true "final_lose")  
When the user chooses to finish the game or if they have guessed the chosen number correctly, they will be shown the final screen. On this screen,  
(1)if they have correctly guessed the number they will see an image with a URL constructed based on the chosen value, e.g. if the chosen value is 1024 the URL should be https://picsum.photos/id/1024/100/100
(2)If they had chosen to finish the game without guessing correctly, show them a sad smiley face .  
there is a button to start the game again where all the game states (including the chosen number) are reset.