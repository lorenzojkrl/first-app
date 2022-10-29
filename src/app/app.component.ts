import { Component, OnInit } from '@angular/core';
import { QuotesDataService } from './quotes-data.service';
import { Quote } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'HTTP using native fetch API';
  status: string = 'loading';
  data!: Quote[];

  constructor(private quoteDataService: QuotesDataService) {}

  ngOnInit(): void {
    this.quoteDataService
      .getData()
      .then(async (quotesData: Response) => {
        this.data = await quotesData.json();
        this.status = 'ready';
      })
      .catch((error: Error) => {
        this.status = 'error';
        console.error('There was an error!', error);
      });
  }
}
