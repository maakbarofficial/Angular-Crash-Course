import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-childtoparent',
  templateUrl: './childtoparent.component.html',
  styleUrl: './childtoparent.component.css',
})
export class ChildtoparentComponent {
  @Output() updateDataEvent = new EventEmitter<string>();
}
