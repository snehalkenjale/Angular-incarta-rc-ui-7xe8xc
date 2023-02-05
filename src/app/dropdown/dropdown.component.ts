import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownOption } from '../dropdown/interface/dropdownoption.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent<T> implements OnInit {
  @Input()
  options: DropdownOption<T>[];

  @Input()
  selectedValue: T;

  @Output()
  changeDropdown = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onChange(event): void {
    this.changeDropdown.emit(event.target.value);
  }
}
