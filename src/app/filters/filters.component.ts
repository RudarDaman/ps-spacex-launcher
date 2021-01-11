import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterModel} from "./filter.model";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  yearFilterCollection = [];
  @Input() currentFilterSelection: FilterModel;
  @Output() updateSelection: EventEmitter<FilterModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.yearFilterCollection = Array(this.getCurrentYear() - 2006 + 1).fill(0).map((_, index) => 2006  + index);
  }

  getCurrentYear() {
    return new Date().getFullYear();
  }

  onUpdateSelection(type, value) {
    let newFilters: FilterModel;
    if (type === 'year') {
      newFilters = this.setYearValue(value);
    } else if (type === 'launching') {
      newFilters = this.setLaunchValue(value);
    } else {
      newFilters = this.setLandValue(value);
    }
    this.updateSelection.emit(newFilters);
  }

  setYearValue(value) {
    if (this.currentFilterSelection && this.currentFilterSelection.hasOwnProperty('year') && this.currentFilterSelection.year === value) {
      let updatedFilter = {...this.currentFilterSelection};
      delete updatedFilter.year;
      return updatedFilter;
    } else {
      return {
        ...this.currentFilterSelection,
        year: value
      }
    }
  }

  setLaunchValue(value) {
    if (this.currentFilterSelection && this.currentFilterSelection.hasOwnProperty('launching') && this.currentFilterSelection.launching === value) {
      let updatedFilter = {...this.currentFilterSelection};
      delete updatedFilter.launching;
      return updatedFilter;
    } else {
      return {
        ...this.currentFilterSelection,
        launching: value
      }
    }
  }

  setLandValue(value) {
    if (this.currentFilterSelection && this.currentFilterSelection.hasOwnProperty('landing') && this.currentFilterSelection.landing === value) {
      let updatedFilter = {...this.currentFilterSelection};
      delete updatedFilter.landing;
      return updatedFilter;
    } else {
      return {
        ...this.currentFilterSelection,
        landing: value
      }
    }
  }
}
