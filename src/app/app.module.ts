import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { MokjangSelectComponent } from './mokjang-select/mokjang-select.component';
import { SarangbangComponent } from './Sarangbang/Sarangbang.component';
import { FormsModule } from '@angular/forms';//for double binding
import { FamilyComponent } from './family/family.component';
import { UserEditorComponent } from './user-editor/user-editor.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

// Add Angular Material Things here?
import { MatButtonModule } from '@angular/material/button';

//For the auto fill search bar text
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from "@angular/material/input"
import {MatSelect, MatSelectModule} from '@angular/material/select'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
      MemberManagementComponent,
      MokjangSelectComponent,
      SarangbangComponent,
      UserComponent,
      FamilyComponent,
      UserEditorComponent,
      NavigationBarComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//for double binding,

    ReactiveFormsModule,

    //Add angular Material Modules here as well
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatCardModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
