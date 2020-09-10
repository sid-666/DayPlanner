# Homework Description
## Problem
To create a calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Solution
* WHEN I open the planner, THEN the current day is displayed at the top of the calendar
* * defined a variable date which uses the new Date() function to retrieve current dat. new Date() is an already pre installed function. The string value is set as text to be displayed at the top of the calnder
* WHEN I scroll down, THEN I am presented with timeblocks for standard business hours
* * Have used bootstrap to come up with a similar format for time blocks. text area to the left, content editable div in the middle, and button to the right.
* WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* * Used the getHour() function to retrieve hour from the current day. For eah div timeblock, set an attribute of value with a number from 9 - 17. Created a function which looks at whether the hour from the date variable is equal, less than or greater than the attribute value. depending on which one the background color will be accordingly changed
* WHEN I click into a timeblock, THEN I can enter an event
* * Simply utilized contenteditable divs to acheive this
* WHEN I click the save button for that timeblock, THEN the text for that event is saved in local storage
* * Click event sets the value (event field) in local storage, and triggers another function that gets the item from local storage and sets it as the new text inside the div.
* WHEN I refresh the page, THEN the saved events persist
* * In the global scope the text within the div is defined as the item from local storage, thus the text will persist even when the page is refreshed
## Outcome
### Image
![Website Screenshot](scrrenshot.PNG)
### Link