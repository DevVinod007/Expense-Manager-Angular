import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ExpenseEntry } from '../expensemodel';

@Injectable({
  providedIn: 'root',
})
export class ExpensentryService {
  private expenseRestUrl = 'https://express-backend-7tak.onrender.com/api/expense';

  constructor(private httpClient: HttpClient) {}

  getExpenseEntries(): Observable<any> {
    return this.httpClient.get(this.expenseRestUrl);
  }

  getExpenseEntry(id: number): Observable<any> {
    return this.httpClient.get(`${this.expenseRestUrl}/${id}`);
  }

  updateExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.httpClient.put<ExpenseEntry>(
      `${this.expenseRestUrl}/${expenseEntry.id}`,
      expenseEntry
    );
  }

  addExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.httpClient.post<ExpenseEntry>(
      this.expenseRestUrl,
      expenseEntry
    );
  }

  deleteExpenseEntry(
    expenseEntry: ExpenseEntry | number
  ): Observable<ExpenseEntry> {
    const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id;
    const url = `${this.expenseRestUrl}/${id}`;
    return this.httpClient.delete<ExpenseEntry>(url);
  }
}
