import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {

  @Input() counter = 0

  increment() {
    this.counter += 1
  }

  decrement() {
    this.counter -= 1
  }

}
