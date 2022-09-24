import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { First } from '../../models/first.model';
import { FirstService } from '../../services/first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public first?: First;
  public isLoading: boolean = false;
  public isError: boolean = false;

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.getFirst();
  }

  getFirst() {
    this.isLoading = true;
    this.firstService.getFirst()
      .pipe(
        take(1)
      )
      .subscribe({
        next: (_first: First) => {
          this.first = _first;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
          this.isError = true;
        },
      })
  }
}
