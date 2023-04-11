import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { ExpenseEntry } from './expensemodel';

@Injectable({
  providedIn: 'root'
})
export class ExpensentryService {
  private expenseRestUrl = 'http://localhost:8000/api/expense';
  private httpOptions = {
     headers: new HttpHeaders( { 'Content-Type': 'application/json' })
  };

  constructor(private httpClient : HttpClient) { } 

  getExpenseEntries() : Observable<any> {
     return this.httpClient.get(this.expenseRestUrl, this.httpOptions)
     .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
     );
  }

  getExpenseEntry(id: number) : Observable<any> {
     return this.httpClient.get(this.expenseRestUrl + "/" + id, this.httpOptions)
     .pipe(
        retry(3),
        catchError(this.httpErrorHandler)
     );
  }

  updateExpenseEntry(expenseEntry: ExpenseEntry): Observable<ExpenseEntry> {
    return this.httpClient.put<ExpenseEntry>(this.expenseRestUrl + "/" + expenseEntry.id, expenseEntry, this.httpOptions)
    .pipe(
       retry(3),
       catchError(this.httpErrorHandler)
    );
 }


 addExpenseEntry(expenseEntry: ExpenseEntry) : Observable<ExpenseEntry> {
   return this.httpClient.post<ExpenseEntry>(this.expenseRestUrl + "/", expenseEntry,this.httpOptions).pipe(
      retry(3),
      catchError(this.httpErrorHandler)
   );
    
 }

 deleteExpenseEntry(expenseEntry: ExpenseEntry | number) : Observable<ExpenseEntry> {
  const id = typeof expenseEntry == 'number' ? expenseEntry : expenseEntry.id
  const url = `${this.expenseRestUrl}/${id}`;

  return this.httpClient.delete<ExpenseEntry>(url, this.httpOptions)
  .pipe(
     retry(3),
     catchError(this.httpErrorHandler)
  );
}

  private httpErrorHandler (error: HttpErrorResponse) {
     if (error.error instanceof ErrorEvent) {
        console.error("A client side error occurs. The error message is " + error.message);
     } else {
        console.error(
           "An error happened in server. The HTTP status code is "  + error.status + " and the error returned is " + error.message);
     }

     return throwError("Error occurred. Pleas try again");
  }
}