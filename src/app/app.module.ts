import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { ProComponent } from './components/pro/pro.component';
import { ProListComponent } from './components/pro/pro-list/pro-list.component';
import { ProItemComponent } from './components/pro/pro-item/pro-item.component';
import { ConListComponent } from './components/cons/con-list/con-list.component';
import { ConItemComponent } from './components/cons/con-item/con-item.component';
import { ConsComponent } from './components/cons/cons.component';
import { HttpClientModule } from '@angular/common/http';
import { ProsConsService } from './services/pros-cons.service';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/user.effects';
import { UserService } from './services/user.service';
import { ProsConsEffects } from './store/effects/pros-cons.effects';
import { RemoveItemDialogComponent } from './components/remove-item-dialog/remove-item-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ProComponent,
    ProListComponent,
    ProItemComponent,
    ConsComponent,
    ConListComponent,
    ConItemComponent,
    RemoveItemDialogComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([UserEffects, ProsConsEffects])
  ],
  providers: [
    ProsConsService,
    UserService
  ],
  entryComponents: [RemoveItemDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
