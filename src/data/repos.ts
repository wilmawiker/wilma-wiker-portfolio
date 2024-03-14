import { Repo } from "./models/Repo";

export const repos: Repo[] = [
  new Repo(
    1,
    "Todo list",
    "One of our JavaScript assignments from school, making a todo-list that allows the user to create tasks and being able to mark them as done, undone or delete them. The tasks are stored in local storage and the user can also sort them by the date they were made.",
    "https://dl.dropboxusercontent.com/s/gtnbctkytxoqaij/todo.png?dl=0",
    "https://dl.dropboxusercontent.com/s/mgrfq8xbh82wg81/todomo.png?dl=0",
    "https://github.com/wilmawiker/to-do-list",
    ["JavaScript", "SCSS", "HTML"]
  ),
  new Repo(
    2,
    "Copy the design",
    "At the end of the course 'HTML & CSS', we recievied images and videos of a finished website and got the challenge to recreate it and really pay attention to the details. The website is responsive for both mobile and desktop.",
    "https://dl.dropboxusercontent.com/s/g9sppor2wk656fm/design.png?dl=0",
    "https://dl.dropboxusercontent.com/s/8pfwtqoj5dryqsn/designmo.png?dl=0",
    "https://github.com/wilmawiker/fardig-design",
    ["SCSS", "HTML"]
  ),
  new Repo(
    3,
    "Group assignment",
    `The last challenge of the 'Introduction to JavaScript' course, was a group assigment where we made a webshop. This project were made together with Angelica Reuterswärd and Barbora Miklosovicova.`,
    "https://dl.dropboxusercontent.com/s/b7xmjy963rk6ton/dukafint.png?dl=0",
    "https://dl.dropboxusercontent.com/s/o9z827l78s4qvhn/dukafintmo.png?dl=0",
    "https://github.com/Ayngie/assignment-typescript-Webshop-DukafintAB",
    ["TypeScript", "CSS", "HTML"]
  ),
  new Repo(
    4,
    "Tic Tac Toe",
    `Assignment in the course 'JavaScript Extended', a tic tac toe game made with Vue.`,
    "https://dl.dropboxusercontent.com/scl/fi/foivctuvwvoy0bhty5tjf/tictactoe.png?rlkey=yr3ebfcm6a9cxyc4dzv7gy641&dl=0",
    "",
    "https://github.com/wilmawiker/tictactoe-vue-assignment",
    ["TypeScript", "CSS", "HTML", "Vue.js"]
  ),
  new Repo(
    5,
    "The Zoo",
    `Another assignment in the course 'JavaScript Extended', made with React. A web page where you can take care of the animals at the zoo. Animals will be hungry if they have not been fed within the last 4 hours. In that case they will show up with a red card, when fed they will have a green card.`,
    "https://dl.dropboxusercontent.com/scl/fi/4gtqgcyaadx9t593t5gdl/thezoo.png?rlkey=id9wocbtek9tme1eazx2ojrdv&dl=0",
    "",
    "https://github.com/wilmawiker/thezoo-react-assignment",
    ["TypeScript", "SCSS", "HTML", "ReactJS", "CSS"]
  ),
  new Repo(
    6,
    "Code smells",
    `Assignment done in the course Work methodology for developers. Code was delivered with a lot of bugs which we were to fix. Checklist of fixes and improvements done is in the read me file.`,
    "https://dl.dropboxusercontent.com/scl/fi/t1inovzql9aeoze60mkws/codesmells.png?rlkey=2uiyrmtjgpo16alqjvl7mh9kn&dl=0",
    "",
    "https://github.com/wilmawiker/codesmells-assignment",
    ["TypeScript", "JavaScript", "CSS", "HTML"]
  ),
];
