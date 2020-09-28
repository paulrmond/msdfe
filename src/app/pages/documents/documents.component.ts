import { Component, OnInit } from '@angular/core';
import { HttpClient} from '../../services/http.services'

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  subfolderIndex = null;
  fileToUpload: File = null;
  documentList: any = [];
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.getDocumentsPage().subscribe((data:any) =>{
      if(data && data.length > 0){
        this.documentList = Object.assign(data);
      }

    },error=> console.log(error))


    
  }

  showSubFolder(index){
    if(this.subfolderIndex == index){
      this.subfolderIndex = null;
      return;
    }
    this.subfolderIndex = index;
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);

    console.log(this.fileToUpload)
  }

  uploadFileToActivity() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const dateString = dateLocal.toISOString().slice(0, 10).replace(/-/g, "-").replace("T", " ");
    console.log(dateString)
    // let fullPath = document.getElementById('file-upload')
    // this.fileToUpload = fullPath['value'];
    if(this.fileToUpload){
      this.http.postFile(this.fileToUpload , dateString).subscribe(data => {
          // do something, if upload success
          }, error => {
            console.log(error);
          });
    }
    
  }

  downloadFile(file){
    console.log(file)
    if(file){
      this.http.getDownloadFile(file.timeCreated,file.fileName,file.contentType)
      // .subscribe((data:any) =>{
        // console.log(data)
        // // var downloadURL = URL.createObjectURL(data);
        // // let blob:any = new Blob([data.blob()], { type: 'jpg; charset=utf-8' });
        // // window.location.href = data
        // window.open(data);
      // },error=> console.log(error))
    }
   
  }

}
