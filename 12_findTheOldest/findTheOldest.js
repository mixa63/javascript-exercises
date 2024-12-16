const findTheOldest = function(people) {
    let oldestPerson = people.reduce((oldest, currentPerson) => {
        let currentPersonAge;
        let oldestAge;
        if (oldest.yearOfDeath == undefined) { 
            oldestAge = new Date().getFullYear() - oldest.yearOfBirth;
        }
        else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }
        if (currentPerson.yearOfDeath == undefined) {
            currentPersonAge = new Date().getFullYear() - currentPerson.yearOfBirth;
        }
        else {
            currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        }
        if (currentPersonAge > oldestAge) return currentPerson;
        return oldest;
    });
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
