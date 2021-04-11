import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss']
})
export class FootballComponent implements OnInit {

  constructor() { }

  
  @Input() footData2: Array<any> = [];
  
  ngOnInit(): void {
  }

}
