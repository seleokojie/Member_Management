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

@NgModule({
  declarations: [		
    AppComponent,
      MemberManagementComponent,
      MokjangSelectComponent,
      SarangbangComponent,
      UserComponent,
      FamilyComponent,
      UserEditorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule//for double binding
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
