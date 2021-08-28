import {Component, OnInit} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.scss']
})
export class CreateNewsComponent implements OnInit {
 public Editor = ClassicEditor;
  articleForm: FormGroup;

  constructor() {
  }



  ngOnInit(): void {
  //  this.Editor.replace
    this.articleForm = new FormGroup({
      rmDescription: new FormControl('abc')
    });
  }

  onReady(eventData) {
    console.log(eventData);
  }

  createArticle() {
    console.log(this.articleForm.get('rmDescription').value);
  }
}
