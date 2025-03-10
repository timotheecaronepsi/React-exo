/* const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); */

let title = <h1>Cours React</h1>;
console.log(title);


/* root.render(
    React.createElement("div", {},
        React.createElement("h1", {}, "Mon blog"),
        React.createElement("div", { className: "card" },
            React.createElement("h2", {}, "Article de blog1"),
            React.createElement("p", {}, ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat…")
        )
    )
) */


/* console.log("Hello world !"); */

/* const notes = [14, 11, 17];
const notes2 = [8, 14, 16];
const concatNotes = [...notes, ...notes2]
console.log(concatNotes); // OutPut : [14, 11, 17, 8, 14, 16]
const person = {
    firstname: "John",
    lastname: "DOE",
    age: 20
}
const concatPersonn = { ...person, age: 25 };
console.log(concatPersonn); // OutPut : {firstname: "John", lastname: "DOE", age: 25}

const msg = "Bonjour John DOE et bienvenue dans le cours REACTJS !"
const copyMsg = { ...msg };
console.log(copyMsg);
 */

/* function hello(firstname, lastname, ...others) {
    console.log(`Hello ${firstname} ${lastname} + ${others[0]} ${others[1]} !`);
}
const tab = ["John", "DOE"];
hello(...tab, "autre20", "autre2"); // OutPut : Hello John DOE + autre1 autre2 ! */
/* 
const person = {
    lastname: "DOE",
    firstname: "John",
    age: 25
}
const { lastname: prenom, firstname } = person;
console.log(`Hello ${prenom} ${firstname} !`); // OutPut : Hello John DOE ! */

/* console.log("Bonjour" && 42); */
/* console.log(0 || "Hello"); */

/* const fruits = ["Banane", "Fraise", "Orange", "Pomme"];
fruits.forEach((element, index) => console.log(element, index)); */

/* const notes = [10, 6, 13, 18];
const notesTab = notes.map((note) => note + 2);
console.log(notesTab); */

/* const notes = [10, 6, 13, 18];
const notesTab = notes.map((note) => note >= 10);
console.log(notesTab); */

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
 .then((response) => response.json())
 .then((json) => console.log(json))
 .catch((e) => console.log(e)); */