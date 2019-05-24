import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'kw-blog-item',
  templateUrl: './kw-blog-item.component.html',
  styleUrls: ['./kw-blog-item.component.css']
})
export class KWBlogItemComponent implements OnInit {
  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
