import { DateTime } from 'aws-sdk/clients/devicefarm';

export class Category {
  id: number;
  category_name: string;
  isAvailable: boolean;
  created_at: DateTime;
  updated_at: DateTime;
}
