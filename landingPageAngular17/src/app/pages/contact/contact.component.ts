import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{
  
  contactForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
    
      email: ['',[Validators.required, Validators.email]],
      message: ['',[Validators.required, Validators.minLength(10)]]
    }); 
   
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  enviar(event: Event){
    event.preventDefault();
    console.log('Formulario enviado');
  }
}
