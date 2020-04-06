import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public readonly MAX_VOLUME = 200;
  public readonly STEP = 10;
  constructor(private http: HttpClient) {}
}
