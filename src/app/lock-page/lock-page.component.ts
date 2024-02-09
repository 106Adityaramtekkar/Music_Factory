import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lock-page',
  standalone: true,
  imports: [],
  templateUrl: './lock-page.component.html',
  styleUrl: './lock-page.component.css'
})
export class LockPageComponent {
  constructor ( private router:Router){}
  direct_to_songs()
  {
    this.router.navigate(['songs'])
   }
}
