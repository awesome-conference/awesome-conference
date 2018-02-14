import { Component, Input, OnInit } from '@angular/core';
import { Conference } from '../../conference.interface';

@Component({
  selector: 'awc-conference-card',
  templateUrl: './conference-card.component.html',
  styleUrls: ['./conference-card.component.scss']
})
export class ConferenceCardComponent implements OnInit {

  @Input() conference: Conference;

  constructor() { }

  ngOnInit() {
  }

}
