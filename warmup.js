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





