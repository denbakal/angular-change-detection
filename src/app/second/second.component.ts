import {ApplicationRef, Component, DoCheck, NgZone, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, DoCheck, OnChanges {
  counter: number = 0;

  constructor(
      public applicationRef: ApplicationRef,
      public ngZone: NgZone
  ) {
    console.log('Initialization the constructor of SecondComponent...');
  }

  ngOnInit() {
    console.log('Initialization the SecondComponent...');
  }

  ngDoCheck(): void {
    this.counter++;
    console.log('Checking the SecondComponent... ${counter}');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes of the SecondComponent: ' + changes.toString());
  }

  public startChangeDetection(): void {
    console.log('Starting the Change Detection...');
    this.applicationRef.tick();
  }

  public startChangeDetectionWithZone(): void {
    console.log('Starting the Change Detection...');
    this.ngZone.run(() => {console.log('ngZone Done!') });
  }

}
