import { SettingsService } from './../settings.service';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ɵdetectChanges,
  ChangeDetectionStrategy,
  ɵmarkDirty,
  ChangeDetectorRef,
} from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VolumeComponent implements OnInit {
  @Input() public volume = 40;
  @Output() public volumeChange = new EventEmitter<number>();
  public maxVolume = this.settingsService.MAX_VOLUME;
  private step = this.settingsService.STEP;

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    const interval = setInterval(() => {
      this.volume += this.step;
      console.log('turn up');
      ɵmarkDirty(this);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
    }, 3000);
  }

  public turnUp(): void {
    const newVolume = this.volume + this.step;
    this.volume = newVolume > this.maxVolume ? this.maxVolume : newVolume;
    this.volumeChange.emit(this.volume);
    ɵmarkDirty(this);
  }

  public turnDown(): void {
    const newVolume = this.volume - this.step;
    this.volume = newVolume < 0 ? 0 : newVolume;
    this.volumeChange.emit(this.volume);
    ɵmarkDirty(this);
  }
}
