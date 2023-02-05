import { Component, OnInit } from '@angular/core';

import { MONTHS } from './data/months.data';
import { ROLES } from './data/roles.data';
import { DropdownOption } from './dropdown/interface/dropdownoption.interface';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  days: DropdownOption<number>[];
  months: DropdownOption<number>[] = MONTHS;
  years: DropdownOption<number>[];
  roles: DropdownOption<number>[] = ROLES;
  experience: number = 0;

  ngOnInit(): void {
    this.days = this.getDays(0);
    this.years = this.getYears(30);
    this.experience = this.getDefaultRole();
  }

  /**
   * Modify Number of Days according to the selected Month
   */
  onMonthChange(month: string): void {
    this.days = this.getDays(Number(month));
  }

  /**
   * Modify Experience according to the selected Role
   */
  onRoleChange(experience: string): void {
    this.experience = Number(experience);
    console.log('Experience selected : ' + this.experience);
  }

  private getDays(currentMonth: number): DropdownOption<number>[] {
    const days = [];
    const currentYear = new Date().getFullYear();
    const numberofDays = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = 1; i <= numberofDays; i++) {
      days.push({
        text: i,
        value: i,
      });
    }

    return days;
  }

  private getYears(numberofYears: number): DropdownOption<number>[] {
    const years = [];
    const currentYear = new Date().getFullYear() - 1;

    for (let i = 0; i <= numberofYears; i++) {
      years.push({
        text: currentYear - i,
        value: currentYear - i,
      });
    }

    return years;
  }

  private getDefaultRole(): number {
    const role = ROLES.find((role) => role.text === 'Developer');
    return role?.value ?? 0;
  }
}
