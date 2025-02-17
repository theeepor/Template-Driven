import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet } from '@angular/router'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Corrected to styleUrls
})
export class AppComponent {
  title = 'template-form-app';
  anytext: string = "";
  email: string = "";
  age: number | null = null;
  address: string = "";
  submitted: boolean = false;

  onSubmit() {
    this.submitted = true;
  }
}