import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KWBlogComponent } from './kw-blog.component';

describe('KWBlogComponent', () => {
  let component: KWBlogComponent;
  let fixture: ComponentFixture<KWBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KWBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KWBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
