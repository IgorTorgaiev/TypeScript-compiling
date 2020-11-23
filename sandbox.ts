// All the work is done in the current file sandbox.ts
// To have duplicated in the sandbox.js you should use the Node.js command prompt
// In node.js we give the command tsc sandbox.ts

const sentence = 'Hello world';
console.log(sentence);

const example = "Though the sentence is put in double commas, there's no mistake";
console.log(example);


// Now, let's work with HTML

const labels = document.querySelectorAll('label');
console.log(labels);

labels.forEach(label => {
    console.log(label);
});