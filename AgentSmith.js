function Agent(n, m, a, b) {
    let c = a.filter(element => !b.includes(element));
    console.log(c.join(', '));
}

Agent(5, 6, [10, 20, -1, 3, 4], [10,45, 11, -1, 7, ]);

// function Agent(n, m, a, b) {
//     let c = [];

//     for (let i = 0; i < a.length; i++) {
//         let found = false;

//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) {
//             c.push(a[i]);
//         }
//     }

//     console.log(c.join(', '));
// }

// Agent(5, 6, [10, 20, -1, 3, 4], [45, 11, -1, 7, 3]);
