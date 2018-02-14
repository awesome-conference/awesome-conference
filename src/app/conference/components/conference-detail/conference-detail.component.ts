import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { filter, switchMap, take } from 'rxjs/operators';
import { Conference } from '../../conference.interface';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'awc-conference-detail',
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.scss']
})
export class ConferenceDetailComponent {
  public conference$: Observable<Conference>;

  public isConferenceLoading = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private confService: ConferenceService,
  ) {
    const slug$: Observable<string | undefined> = activatedRoute.params.map(params => params.slug);

    this.conference$ = slug$.pipe(
      filter(slug => !!slug),
      switchMap(
      slug => this.confService.getConferenceBySlug(slug)
      ),
    );

    this.conference$.pipe(take(1)).subscribe(() => this.isConferenceLoading = false);
  }
}
