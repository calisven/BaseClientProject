import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material/material.module';
import { ModalDialogComponent } from './components/modal-dialog/modal-dialog.component';

@NgModule({
  declarations: [
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
