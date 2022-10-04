import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Subject, Subscription, take, takeUntil } from 'rxjs';
import { First } from '../../models/first.model';
import { FirstService } from '../../services/first.service';
import { selectFirst } from '../../selectors/first.selector';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  private readonly destroy$ = new Subject<void>();
  private readonly subscriptions: Subscription[] = [];

  public first?: First;
  public isLoading: boolean = false;
  public isError: boolean = false;

  constructor(
    private firstService: FirstService,
    private store: Store) { }

  ngOnInit(): void {
    this.getFirst();
    this.initializeSubscriptions();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getFirst(): void {
    this.isLoading = true;
    this.firstService.getFirst()
      .pipe(
        take(1)
      )
      .subscribe({
        error: () => {
          this.isLoading = false;
          this.isError = true;
        },
      })
  }

  private initializeSubscriptions() {
    this.subscriptions.push(
      this.subscribeToFirst(),
    );
  }

  private subscribeToFirst(): Subscription {
    return this.store.select(selectFirst)
      .pipe(
        takeUntil(this.destroy$),
        filter((first: First) => first.firstPrimitive !== -1)
      )
      .subscribe(
        {
          next: (first: First) => {
            this.first = first;
            this.isLoading = false;
          }
        }
      )
  }
}
