/**** While Loops ****/
/*
Whilst counter is below 0, keep running the loop until the counter = 10.
Once the counter is at 10, break the loop

Even if the counter was 11, the 'While' loop would still run once
*/

let counter = 0;

while (counter <= 10){
    console.log('Counter is: '+counter);
    counter++;
}

/*
Do this loop whilst the counter value is below 10
If counter was 11, the 'Do' loop would not run at all
counter = 1;
*/

do{
    console.log('Counter value is: '+counter);
    counter++;
}
while (counter <= 10)