// 2. MULSTIPLICATION TABLES:

// ALLE TAFELS: NESTED FOR-LOOP:
for (numberTable=1; numberTable <= 10; numberTable++) {
    for (number=1; number <= 10; number++) {
        sum = number * (numberTable);
        console.log(number + " x " + numberTable + " = " + sum)
    }
}

// TAFEL VAN 9: // SINGLE-FOR-LOOP:
/* 
for (table=1; table <= 10; table++) {
    sum = table * 9
    console.log(table + " x 9 = " + sum)
};
*/