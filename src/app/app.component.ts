import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

import {SpaceLauncherService} from "./_services/space-launcher/space-launcher.service";
import {ProgramCardModel} from "./program-card/program-card.model";
import {FilterModel} from "./filters/filter.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  spaceLauncherData: Observable<ProgramCardModel[]>;
  currentFilterSelection: FilterModel;

  constructor(private spaceLauncherService: SpaceLauncherService) {
  }

  ngOnInit() {
    this.fetchSpaceLauncherData()
  }

  applyFilter(filters: FilterModel) {
    this.currentFilterSelection = filters;
    this.fetchSpaceLauncherData();
  }

  fetchSpaceLauncherData() {
    this.spaceLauncherData = this.spaceLauncherService.getSpaceLauncher(this.currentFilterSelection);
  }
}
