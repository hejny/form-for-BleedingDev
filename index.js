#!/usr/bin/env node

import { wizzard } from '@promptbook/wizzard';

const result = await wizzard.execute('./books/form.book',{ answers:
    // { answer1: 'Absolutní pecka' }
    // { answer1: 'suprdupr workshop, na zacatku trochu pomaly rozjezd a potom naprosta bomba' }
     { answer1: 'Pěkný workshop, akorát bych trochu víc ukázal rozdíl mezi GPT-4 a Deepseek' }
    // { answer1: 'Naprosto na hovno' }
});

// console.info(result);

const { outputParameters: { email } } = result;

console.info('=============');
console.info(email);
console.info('=============');