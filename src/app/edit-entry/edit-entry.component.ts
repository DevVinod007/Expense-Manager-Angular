import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseEntry } from '../expensemodel';
import * as moment from 'moment';
import { ExpensentryService } from 'src/app/services/expensentry.service';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.component.html',
  styleUrls: ['./edit-entry.component.css'],
})
export class EditEntryComponent implements OnInit {
  formData!: FormGroup;
  expenseEntry!: ExpenseEntry;

  constructor(
    private expenseEntryService: ExpensentryService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formData = this.formBuilder.group({
      id: [null],
      item: ['', Validators.required],
      amount: ['', Validators.required],
      category: [''],
      location: [''],
      spendOn: [''],
    });

    const selectedId = Number(this.route.snapshot.paramMap.get('id'));

    if (selectedId) {
      this.expenseEntryService.getExpenseEntry(selectedId).subscribe((data) => {
        this.expenseEntry = data;
        this.formData.patchValue(this.expenseEntry);
        this.formData.controls['spendOn'].setValue(
          moment(this.expenseEntry.spendOn).format('YYYY-MM-DD')
        );
      });
    }
  }

  get itemValue() {
    return this.formData.get('item');
  }

  get amountValue() {
    return this.formData.get('amount');
  }

  onClickSubmit(data: any) {
    const expenseEntry: ExpenseEntry = {
      ...data,
      spendOn: moment(data.spendOn).toDate(),
      createdOn: new Date(2020, 5, 20),
    };

    console.log(expenseEntry);

    if (!expenseEntry.id) {
      this.expenseEntryService
        .addExpenseEntry(expenseEntry)
        .subscribe((data) => {
          this.router.navigate(['/expenses']);
        });
    } else {
      this.expenseEntryService
        .updateExpenseEntry(expenseEntry)
        .subscribe((data) => {
          this.router.navigate(['/expenses']);
        });
    }
  }
}
