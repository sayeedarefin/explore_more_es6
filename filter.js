const players = [12,34,55,53,41,22,67,88,50];

const selected = players.filter(n=> n>50)
console.log(selected);
const selected2 = players.filter(n=> n%2 ==0)
console.log(selected2);
const selected3 = players.filter(n=> n%2 !==0)
console.log(selected3);

const friends = ['tom', 'jerry', 'bulldog', 'oggy', 'hatori'];
const selected4 = friends.filter(n => n.length >4)
console.log(selected4)