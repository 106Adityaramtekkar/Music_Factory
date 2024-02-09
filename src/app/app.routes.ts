import { RouterModule, RouterOutlet, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MainSongComponent } from './main-song/main-song.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LockPageComponent } from './lock-page/lock-page.component';




export const routes: Routes = [
{
    path : 'songs' ,
    component : MainSongComponent
}, {
    path : '' ,
    component : LockPageComponent
}
];

// @NgModule({
//     declarations:[
//         // MainSongComponent
//     ],
//     imports : [ MainSongComponent ,BrowserModule ,FormsModule ,ReactiveFormsModule ,RouterModule.forRoot(routes) , HttpClientModule ] ,
//     providers :[] 
// })
// export class AppModule {}
