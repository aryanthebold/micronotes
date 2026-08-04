// Question 1:

const title = "HELLOO PEOPLEEEE, this is my first note hehe :D";
const isPinned = true;
const tags = ["private", "fir karte hain"];

console.log(title, typeof title);
console.log(isPinned, typeof isPinned);
console.log(tags, typeof tags);

// console.log(new Date());

// Question 2:

function makeNote(title, content) {
    return { title, content, createdAt: new Date() };
}
console.log(makeNote("Fav drinks: ", "Cold Coffee, Latte, Espresso"));


//Question 3:

const notes = [
    { title: "Coffee", content: "Espresso, Latte" },
    { title: "Games", content: "Minecraft, TLOU Pt. 1" },
    { title: "Songs", content: "Wildflower, We are the People" },

];

const titles = notes.map(note => note.title);
console.log(titles);
console.log(typeof titles);

//Question 4:

const {title: Title, content}= notes[2];
let a= 1;
console.log(Title);
console.log(`My No.${a} choice for songs are ${content}`);


// Question 5:

async function getSampleData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}
 
getSampleData();

// Okay, I js copy-pasted this whole code as it was written on the doc file.


//Question 5 again after today's class.. lemme do it with using try keywords and response attributes.



async function getSampleData1() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/2");
        const data1 = await response.json();
        if(!response.ok){
            throw new Error(`HTTP error booooommm! Status: ${response.status}`);
        }
        console.log(data1);
}
    catch (error) {
        console.log("This is what Error you got Noob:", error);
    }
}

getSampleData1();

// NO AI is Used in doing all this warmup... but i have used it to understand few things like A4 and .map 
// My internet connection is bad so im having UND_ERR_CONNECT_TIMEOUT Error in A5 but at 2 am it was working fine.
