import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { User } from 'src/app/models/user';
import { Reply } from 'src/app/models/reply';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() comment: Comment;
  @Input() currentUser: User;
  @Output() update = new EventEmitter<Comment>();
  @Output() delete = new EventEmitter<Comment | Reply>();
  @Output() vote = new EventEmitter<Comment>();

  commentToUpdate: string = "";
  onEditMode = false;
  createdAt: string;
  showForm = false;

  constructor() { }

  ngOnInit(): void {       
    this.commentToUpdate = this.comment.content;
  }


  onDelete(comment: Reply | Comment) {
  
    this.delete.emit(comment);
  }

  onEdit() {
    this.onEditMode = !this.onEditMode;
  }

  onCancel() {
    this.commentToUpdate = this.comment.content;
    this.onEditMode = false;
  }


  updateComment(comment: Comment) {

    if (this.commentToUpdate == "" || this.commentToUpdate == undefined) {
      return;
    }

    comment.content = this.commentToUpdate.trim();
  
    this.update.emit(comment);
    this.onEditMode = false;
  }

  onVote(vote) {
  
    this.comment.score = vote;
    this.vote.emit(this.comment);
  }

  onReply(e) {
    this.showForm = !this.showForm;
  }

  ngOnDestroy() {
    clearInterval();
  }

}
