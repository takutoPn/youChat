import { format } from 'date-fns';
import { User } from './user';

export class Comment {
  user: User;
  initial: string;
  message: string;
  date: string;
  key?: string;
  isEdit?: boolean;

  constructor(values: any) {
    this.user = values.user;
    this.initial = values.initial || values.user.displayName.slice(0, 1);
    this.message = values.message;
    this.date = values.date || format(new Date());
    if (values.key) { this.key = values.key; }
    this.isEdit = false;
  }
}
