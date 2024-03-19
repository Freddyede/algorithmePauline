function abbreviation(fullname) {
  let namesArray = fullname.split(" ");
  let lastNameAbbreviation =
    namesArray[namesArray.length - 1][0].toUpperCase() + ".";
  return `${namesArray[0]} ${lastNameAbbreviation}`;
}
