import {ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-a',
  templateUrl: './first-a.component.html',
  styleUrls: ['./first-a.component.css']
})
export class FirstAComponent implements OnInit, DoCheck {

  constructor(public changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    console.log('Checking the First-A-Component...');
  }

  public startChangeDetection(): void {
    console.log('Starting the Change Detection...');
    this.changeDetectorRef.detectChanges();
  }

}
