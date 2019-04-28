import {Task} from '../models';

export const TASKS: Task [] = [
  {
    id: randomId(),
    title: 'got to the gym',
    description: 'go to the gym learn swimming'
  },
  {
    id: randomId(),
    title: 'got to the bar',
    description: 'go to the bar meet with friends'
  }
];
function randomId(): number {
  return Math.floor(Math.random() * 1000);
}
