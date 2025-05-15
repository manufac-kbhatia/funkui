import color from 'chalk';
import { add } from './add';
 
export function printSum(a: number, b: number) {
	const answer = add(a, b);
 
	return console.log(`The answer is: ${color.cyan(answer.toString())}`);
}