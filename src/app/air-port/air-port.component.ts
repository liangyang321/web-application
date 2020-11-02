import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-air-port',
  templateUrl: './air-port.component.html',
  styleUrls: ['./air-port.component.css']
})
export class AirPortComponent implements OnInit {

  numppl = 0; // number of passanger
  result = 0; // total cost of passanger
  constructor() {}

  ngOnInit(): void {
  }


  // count total cost for passanger
  count(): void{
    if (this.numppl > 0){
    this.result = this.numppl * 150;
    }else
    {
      this.result = 0;
    }
  }

}
