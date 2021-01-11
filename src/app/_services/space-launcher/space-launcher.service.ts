import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

import {ProgramCardModel} from "../../program-card/program-card.model";
import {FilterModel} from "../../filters/filter.model";

@Injectable({
  providedIn: 'root'
})
export class SpaceLauncherService {

  constructor(private httpClient: HttpClient) {
  }

  getSpaceLauncher(filters: FilterModel): Observable<ProgramCardModel[]> {
    let params = new HttpParams();
    params = params.append('limit', '100');
    if (filters && filters.year && filters.year != 'All') {
      params = params.append('launch_year', filters.year);
    }
    if (filters && typeof filters.landing === "boolean") {
      params = params.append('land_success', filters.landing.toString());
    }
    if (filters && typeof filters.launching === "boolean") {
      params = params.append('launch_success', filters.launching.toString());
    }
    return this.httpClient.get<ProgramCardModel[]>('https://api.spacexdata.com/v3/launches', {params})
  }
}
