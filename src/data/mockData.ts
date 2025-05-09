import { Friend, Message } from '../types';

export const friends: Friend[] = [
  {
    id: '1',
    name: 'John Doe'
  },
  {
    id: '2',
    name: 'Jane Smith'
  },
  {
    id: '3',
    name: 'Mike Johnson'
  }
];

export const initialMessages: Record<string, Message[]> = {
  '1': [],
  '2': [],
  '3': []
}; 