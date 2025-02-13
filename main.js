

let height = 5;
for (let i = 1; i <= height; i++) {
    const spacecount = height - i;
    const linenumber = i;
    const starcount = (linenumber * 2) - 1;

    console.log(" ".repeat(spacecount) + "*".repeat(starcount));
}




