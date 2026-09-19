#Fancy Grep Head
Section 1 — Command Description
My Fancy Command is called fancyGrepHead.

It combines the basic ideas of grep and head. It searches a file for a specific word or pattern and displays only the first two matching lines.

How to Run
Use this command in the terminal:

node fancyGrepHead.js <Pattern> <FileName>

For example:

node fancyGrepHead.js "ERROR" server.log

The command will search the file for ERROR and display the first two lines that contain ERROR.

The commands I combined were grep and head.

Section 2 — AI-Assisted Programming
I asked AI questions about how the Linux commands work and how they could be implemented in Node.js.

AI helped me understand how process.argv is used to get command-line arguments and how fs.readFileSync() can be used to read a file. AI also helped me understand how to use arrays and loops to work with the lines in a file.

For testing, I asked AI to suggest test scenarios and possible edge cases. AI suggested testing the command with multiple matching lines, no matching lines, and only one matching line. I ran these tests myself.

I had to think independently when I modified my grep code to create the Fancy Command. I added a counter so that the program would only display the first two matching lines.

One thing AI got wrong during the process was initially suggesting code that used a variable i even though my loop did not define an i variable. I noticed the problem and changed the logic to use my count variable instead.

I was responsible for making the changes to my code and testing the final command myself.
