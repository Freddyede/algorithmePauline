const scanAndFind = (array, objectToFind) => {
    let key = Object.keys(objectToFind).toString();
    for (let i = 0; i < array.length; i++) {
        if(
            Number.isInteger(array[i]['id']) ||
            Number.isInteger(array[i]['identification']) ||
            Number.isInteger(array[i]['code'])
        ) {
            if(array[i]['id']) {
                array[i]['id'] = objectToFind[key];
            } else if(array[i]['identification']) {
                array[i]['identification'] = objectToFind[key];
            } else {
                array[i]['code'] = objectToFind[key];
            }
        } else if(array[i][key]) {
            array[i][key] = objectToFind[key];
        }
    }
    return array;
}


console.log(
    scanAndFind(
        [
            { prenom: "Tom", nom: "Durand" },
            { prenom: "Juliette", nom: "Garcia" },
            { prenom: "Jean", nom: "Lafite" },
            { prenom: "Lucien", nom: "Lafite" },
            { prenom: "Lucien", abc: "Lafite" }
        ],
        { nom: "Lafite" }
    )
);
// Résultat -> [{ prenom: 'Jean', nom: 'Lafite' },{ prenom: 'Lucien', nom: 'Lafite' }]

console.log(
    scanAndFind(
        [
            { prenom: "Joe", code: 65421 },
            { prenom: "John", id: 556487 },
            { prenom: "Melinda", identification: 54834 },
            { prenom: "Rose", id: 68784 },
            { prenom: "Jack", id: 41244 }
        ],
        { id: 556487 }
    )
);