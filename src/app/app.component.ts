import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

import { MainSongComponent } from './main-song/main-song.component';
import { LockPageComponent } from './lock-page/lock-page.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainSongComponent, RouterOutlet , LockPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user_interface-angular';



  constructor ( private router:Router){}

  direct_to_songs()
{
  this.router.navigate(['/songs'])
 }
}
