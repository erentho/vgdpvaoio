const matrix = [
    ['Id', 'Title', 'Description'],
    [1, 'Title-1', 'Description-1'],
    [2, 'Title-2', 'Description-2'],
    [3, 'Title-3', 'Description-3', 'Поле с багом'],
    [4, 'Title-4', 'Description-4'],
    [5, 'Title-5', 'Description-5'],
    [6, 'Title-6', 'Description-6', 'Поле с багом'],
];
for (let i = 0; i < matrix.length; i++) {
  const arr = matrix[i];
  let text = ``
    for (let j = 0; j < arr.length; j++) {
        const element = arr[j];
        text += element + ` `;

    }

    console.log(text);


}