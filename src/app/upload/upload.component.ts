import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {


  imageUrl: string | ArrayBuffer | null = null;
  selectedFile: File | null = null;
  message='';
  finaloutput!: string[] 

  constructor(private http: HttpClient,private data:DataService) {
    
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      // Preview image
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

    uploadImage(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      console.log(this.selectedFile)

      this.http.post<any>('http://127.0.0.1:5000/upload', formData).subscribe(
        (response) => {
          // Handle response from server
        
          console.log('Image uploaded successfully!', response);
          this.message=response.text
       
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

 
   multilineString = 'Line 1\nLine 2\nLine 3';

  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.message = data.message;
      console.log(this.message)
    });
  }
}