import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.css']
})
export class VolumeComponent implements OnInit {
  @Input() public volume = 40;
  @Output() public volumeChange = new EventEmitter<number>();
  public maxVolume = 200;
  private step = 20;

  constructor() {}

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
}
