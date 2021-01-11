export interface ProgramCardModel {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number;
  rocket: RocketDetails;
  ships: string[];
  telemetry: TelemetryDetails;
  launch_site: LaunchSiteDetails;
  launch_success: boolean;
  links: Links;
  details: any;
  crew: null | boolean;
}

export interface RocketDetails {
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
  first_stage: {
    cores: CoresDetails[]
  };
  second_stage: any;
  fairings: any;
}

export interface CoresDetails {
  core_serial: string;
  flight: number;
  land_success: boolean | null;
  landing_intent: boolean;
  landing_type: boolean | null;
  landing_vehicle: boolean | null;
}

export interface TelemetryDetails {
  flight_club: string | null;
}

export interface LaunchSiteDetails {
  site_id: string;
  site_name: string;
  site_name_long: string;
}

export interface Links {
  mission_patch: string;
  mission_patch_small: string;
}
