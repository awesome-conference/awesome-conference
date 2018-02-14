import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Conference } from '../conference.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConferenceService {

  private conferencesCollection: AngularFirestoreCollection<Conference>;

  public conferences$: Observable<Conference[]>;

  constructor(
    private afs: AngularFirestore,
  ) {
    this.conferencesCollection = afs.collection<Conference>('conferences');
    this.conferences$ = this.conferencesCollection.valueChanges();
  }

  public getConferenceBySlug(slug: string): Observable<Conference> {
    return this.conferencesCollection.doc<Conference>(slug).valueChanges();
  }
}
