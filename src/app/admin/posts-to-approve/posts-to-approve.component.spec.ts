import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsToApproveComponent } from './posts-to-approve.component';

describe('PostsToApproveComponent', () => {
  let component: PostsToApproveComponent;
  let fixture: ComponentFixture<PostsToApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsToApproveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsToApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
