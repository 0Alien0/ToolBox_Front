import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HomepageComponent } from './body/homepage/homepage.component';

@NgModule({
	declarations: [
		AppComponent,
		BodyComponent,
		HomepageComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
