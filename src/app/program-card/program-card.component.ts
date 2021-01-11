import {Component, Input, OnInit} from '@angular/core';

import {ProgramCardModel} from "./program-card.model";

@Component({
  selector: 'app-program-card',
  templateUrl: './program-card.component.html',
  styleUrls: ['./program-card.component.scss']
})
export class ProgramCardComponent implements OnInit {

  @Input() spaceLauncher: ProgramCardModel;

  constructor() {
  }

  ngOnInit() {
  }

}
