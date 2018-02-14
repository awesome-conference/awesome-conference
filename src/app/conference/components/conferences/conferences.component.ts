import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { take } from 'rxjs/operators';
import { Conference } from '../../conference.interface';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'awc-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss']
})
export class ConferencesComponent {
  public conferences$: Observable<Conference[]>;
  public isConferencesLoading = true;

  constructor(private confService: ConferenceService) {
    this.conferences$ = confService.conferences$;

    this.conferences$.pipe(take(1)).subscribe(() => this.isConferencesLoading = false);
  }
}
