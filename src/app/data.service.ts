// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:5000/api/data'; // Your Flask API URL

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


  private uploadUrl = 'http://127.0.0.1:5000/upload';




  uploadFile(file: File) {
    const formData = new FormData();
    console.log(file)
    formData.append('image', file); // Ensure 'image' matches the key expected by Flask
    
    return this.http.post(this.uploadUrl, formData);
  }
}