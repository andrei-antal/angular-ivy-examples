import { SettingsService } from './../settings.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { tap } from 'rxjs/operators';
import { interval } from 'rxjs';
import { Unsubscriber } from '../unsubscriber';

@Unsubscriber()
@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css'],
})
export class VolumeComponent implements OnInit, OnDestroy {
  @Input() public volume = 40;
  @Output() public volumeChange = new EventEmitter<number>();
  public maxVolume = this.settingsService.MAX_VOLUME;
  private step = this.settingsService.STEP;
  public volume$ = interval(1000).pipe(tap(console.log)).subscribe();
  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {}

  public turnUp(): void {
    const newVolume = this.volume + this.step;
    this.volume = newVolume > this.maxVolume ? this.maxVolume : newVolume;
    this.volumeChange.emit(this.volume);
  }

  public turnDown(): void {
    const newVolume = this.volume - this.step;
    this.volume = newVolume < 0 ? 0 : newVolume;
    this.volumeChange.emit(this.volume);
  }
  ngOnDestroy() {
    console.log('Component on destroy');
  }
}
