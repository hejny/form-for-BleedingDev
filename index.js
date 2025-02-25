#!/usr/bin/env node

import { wizzard } from '@promptbook/wizzard';

const result = await wizzard.execute('./books/form.book',{yourName: 'Paul'});

// console.info(result);

const { outputParameters: { greeting } } = result;

// console.info('---');
console.info(greeting);