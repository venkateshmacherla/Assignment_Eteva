// Given Input lists
const list1 = ['Arjun', 'Adwait', 'Swapnil', 'Amit', 'Vishal', 'Adnan'];
const list2 = ['Adwait', 'Laxman', 'Amit', 'Adnan', 'Nitin', 'Gaurav'];

// Three Empty Array's 
const uniqueUsersList1 = [];
const uniqueUsersList2 = [];
const intersectionUsers = [];

// Find unique users in List1 not in List2
for (const user of list1) {
    if (!list2.includes(user)) {
        uniqueUsersList1.push(user);
    }
}

// Find unique users in List2 not in List1
for (const user of list2) {
    if (!list1.includes(user)) {
        uniqueUsersList2.push(user);
    }
}

// Find same names present in both list1 and list2.
for (const user of list1) {
    if (list2.includes(user)) {
        intersectionUsers.push(user);
    }
}

// Output the results
console.log("Unique users in List1 not in List2:", uniqueUsersList1);
console.log("Unique users in List2 not in List1:", uniqueUsersList2);
console.log("Intersection of List1 and List2:", intersectionUsers); //Intersection of list1 & list2