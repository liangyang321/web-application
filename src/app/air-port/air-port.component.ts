import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-port',
  templateUrl: './air-port.component.html',
  styleUrls: ['./air-port.component.css']
})
export class AirPortComponent implements OnInit {

  numppl: number = 0; // number of passanger
  result: number = 0; // total cost of passanger
  constructor() {}

  ngOnInit(): void {
  }


  // count total cost for passanger
  count(): void{
    this.result = this.numppl * 150;
  }

}
