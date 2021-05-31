import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() {
    this.value = 0;
    this.total = 0;
   }

  @Input()
  value: number;
  @Input()
  total: number;

  @Output()
  valueChange: EventEmitter<number> = new EventEmitter<number>();
  @Output()
  tope: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  downTime(): void{
    if (this.value > 0){
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  upTime(): void{
    if (this.total > this.value) {
      this.value++;
      this.valueChange.emit(this.value);
    }
    if (this.total === this.value) {
      this.tope.emit(this.total);
    }
  }
}
