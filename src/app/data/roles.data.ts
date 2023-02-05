import { DropdownOption } from '../dropdown/interface/dropdownoption.interface';

export const ROLES: DropdownOption<number>[] = [
  {
    value: 25,
    text: 'CEO',
  },
  {
    value: 20,
    text: 'Director',
  },
  {
    value: 15,
    text: 'Manager',
  },
  {
    value: 10,
    text: 'Lead Developer',
  },
  {
    value: 5,
    text: 'Senior Developer',
  },
  {
    value: 0,
    text: 'Developer',
  },
];
