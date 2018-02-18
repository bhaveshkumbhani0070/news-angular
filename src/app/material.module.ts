import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule ,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatPaginatorModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  imports: [
      MatButtonModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatTableModule,
      MatPaginatorModule
    ],
  exports: [
      MatButtonModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatCardModule,
      MatTableModule,
      MatPaginatorModule
    ],
})
export class MaterialModule { }