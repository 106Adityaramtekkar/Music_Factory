import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main-song',
  standalone: true,
  imports: [],
  templateUrl: './main-song.component.html',
  styleUrl: './main-song.component.css'
})
export class MainSongComponent {
  constructor ( private router:Router){}

  direct_to_songs()
{
  this.router.navigate(['/songs'])
 }
}
