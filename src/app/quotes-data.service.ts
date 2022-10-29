import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuotesDataService {
  private url: string = 'https://type.fit/api/quotes';

  async getData(): Promise<Response> {
    const response = await fetch(this.url);
    return this.handleErrors(response);
  }

  handleErrors(response: Response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
}
