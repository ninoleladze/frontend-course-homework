import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting: boolean = false;
  submitSuccess: boolean = false;
  submitError: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {
    this.createMagicalElements();
  }

  createMagicalElements(): void {
    // Add magical floating elements to the contact form
    const container = document.querySelector('.contact-container');
    if (container) {
      for (let i = 0; i < 5; i++) {
        const element = document.createElement('div');
        element.className = 'magical-element';
        element.style.left = `${Math.random() * 100}%`;
        element.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(element);
      }
    }
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      try {
        // Add your form submission logic here
        // For example, calling an API service
        await this.simulateFormSubmission();
        this.submitSuccess = true;
        this.contactForm.reset();
      } catch (error) {
        this.submitError = true;
        console.error('Form submission error:', error);
      } finally {
        this.isSubmitting = false;
      }
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  private simulateFormSubmission(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, 1500);
    });
  }

  // Form validation helpers
  get nameError(): string {
    const control = this.contactForm.get('name');
    if (control?.touched) {
      if (control.hasError('required')) return 'Name is required';
      if (control.hasError('minlength')) return 'Name must be at least 2 characters';
    }
    return '';
  }

  get emailError(): string {
    const control = this.contactForm.get('email');
    if (control?.touched) {
      if (control.hasError('required')) return 'Email is required';
      if (control.hasError('email')) return 'Please enter a valid email';
    }
    return '';
  }

  get messageError(): string {
    const control = this.contactForm.get('message');
    if (control?.touched) {
      if (control.hasError('required')) return 'Message is required';
      if (control.hasError('minlength')) return 'Message must be at least 10 characters';
    }
    return '';
  }
}
