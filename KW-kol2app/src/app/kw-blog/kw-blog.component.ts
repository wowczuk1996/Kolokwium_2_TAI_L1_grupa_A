import {Component, Input, OnInit} from '@angular/core';
import {KWDataService} from "../service/kw-data.service";

@Component({
  selector: 'kw-blog',
  templateUrl: './kw-blog.component.html',
  styleUrls: ['./kw-blog.component.css']
})
export class KWBlogComponent implements OnInit {
  constructor(private dataService: KWDataService) { }
  public items$: any;
  data: any;

  ngOnInit() {
    this.dataService.getBlogPost().subscribe(data => this.data = data);

  }
  getAll() {
    this.dataService.getBlogPost().subscribe(response => {
      this.items$ = response;
    });
  }


  }
