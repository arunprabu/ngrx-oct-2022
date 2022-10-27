import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <p>Counter Value: 0</p>
      <button type="button" (click)="handleIncrement()">Increment</button>
      <button type="button" (click)="handleDecrement()">Decrement</button>
      <button type="button" (click)="handleReset()">RESET</button>
    </div>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  handleIncrement(){
    
  }

  handleDecrement(){

  }

  handleReset() {

  }
}
