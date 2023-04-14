import { Component, OnInit } from '@angular/core';
import { ExpenseEntry } from '../expensemodel';
import { ExpensentryService } from 'src/app/services/expensentry.service';

@Component({
  selector: 'app-expense-entry-list',
  templateUrl: './expense-entry-list.component.html',
  styleUrls: ['./expense-entry-list.component.css'],
})
export class ExpenseEntryListComponent implements OnInit {
  displayedColumns: string[] = [
    'item',
    'amount',
    'category',
    'location',
    'spendOn',
  ];
  title = 'Expense Entry List';
  expenseEntries: ExpenseEntry[] = [];

  constructor(private restService: ExpensentryService) {}

  ngOnInit() {
    this.getExpenseItems();
  }

  getExpenseItems() {
    this.restService.getExpenseEntries().subscribe((data: ExpenseEntry[]) => {
      this.expenseEntries = data;
    });
  }

  deleteExpenseEntry(evt: Event, id: number) {
    evt.preventDefault();
    if (confirm('Are you sure you want to delete the entry?')) {
      this.restService
        .deleteExpenseEntry(id)
        .subscribe((data: any) => console.log(data));
      this.getExpenseItems();
    }
  }
}
