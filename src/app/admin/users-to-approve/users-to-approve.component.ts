import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-to-approve',
  templateUrl: './users-to-approve.component.html',
  styleUrls: ['./users-to-approve.component.css']
})
export class UsersToApproveComponent implements OnInit {
  users = [
    { id: 1, name: 'John Doe', status: 'pending' },
    { id: 2, name: 'Jane Doe', status: 'pending' },
    // Add more mock users as needed
  ];

  constructor() {}

  ngOnInit() {
    this.fetchUsersPendingApproval();
  }

  fetchUsersPendingApproval() {
    // In a real app, you'd fetch this data from a backend
    this.users = this.users.filter(user => user.status === 'pending');
  }

  approveUser(userId: number) {
    this.updateUserStatus(userId, 'approved');
  }

  rejectUser(userId: number) {
    this.updateUserStatus(userId, 'rejected');
  }

  updateUserStatus(userId: number, status: string) {
    const userIndex = this.users.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
      this.users[userIndex].status = status;
      // In a real scenario, after updating the mock data, you might want to filter out the approved/rejected users
      this.fetchUsersPendingApproval();
    }
  }
}