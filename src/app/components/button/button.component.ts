import { Component, Input, output, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() color: string = 'defaultColor';
  @Input() text: string = 'defaultText';
  @Output() btnClick = new EventEmitter();


  onClick() {
    this.btnClick.emit();
  }

}
