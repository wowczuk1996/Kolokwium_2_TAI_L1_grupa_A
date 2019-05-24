import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KWBlogItemComponent } from './kw-blog-item.component';

describe('KWBlogItemComponent', () => {
  let component: KWBlogItemComponent;
  let fixture: ComponentFixture<KWBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KWBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KWBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
