function abreviation(fullname) {
  let namesArray = fullname.split(" ");
  let lastNameAbbreviation =
    namesArray[namesArray.length - 1][0].toUpperCase() + ".";
  return `${namesArray[0]} ${lastNameAbbreviation}`;
}
console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("Alfred Hitchcock")); // Alfred H.
