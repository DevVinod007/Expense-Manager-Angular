import { Component, OnInit } from '@angular/core';
import { DebugService } from '../debug.service';
import { ExpenseEntry } from '../expensemodel';
import { ExpensentryService } from '../expensentry.service';

@Component({
   selector: 'app-expense-entry-list',
   templateUrl: './expense-entry-list.component.html',
   styleUrls: ['./expense-entry-list.component.css'],
   providers: [DebugService]
})
export class ExpenseEntryListComponent implements OnInit {
  displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn' ];
   title!: string;
   expenseEntries!: ExpenseEntry[];
   constructor(private debugService: DebugService, private restService : ExpensentryService ) { }

   ngOnInit() {
      this.debugService.info("Expense Entry List component initialized");
      this.title = "Expense Entry List";

      this.getExpenseItems();
   }

   getExpenseItems() {
      this.restService.getExpenseEntries()
      .subscribe( data =>
        { 
          this.expenseEntries = data
         console.log(data)
         }
        );
   }

   deleteExpenseEntry(evt:any, id:any) {
      evt.preventDefault();
      if(confirm("Are you sure to delete the entry?")) {
         this.restService.deleteExpenseEntry(id)
            .subscribe( data => console.log(data) );
   
         this.getExpenseItems();
      }
   }

   
}