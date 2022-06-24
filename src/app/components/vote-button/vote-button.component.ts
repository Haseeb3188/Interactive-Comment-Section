import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { Vote } from 'src/app/models/vote';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-vote-button',
  templateUrl: './vote-button.component.html',
  styleUrls: ['./vote-button.component.scss']
})
export class VoteButtonComponent implements OnInit {
  @Input() vote: any;
  @Input() comment: Comment;
  @Input() currentUser: User;
  @Output() voted = new EventEmitter<Vote>();
  voteCount: any;


  constructor() { }

  ngOnInit(): void {   

  }


  voteUp() {

    this.countVote('up');
    this.voteCount.push(this.vote)

    this.countVote('up');

    this.voted.emit(this.vote)
  }

  voteDown() {
    

    this.countVote('down');
    this.voteCount.push(this.vote)

    this.countVote('down');

    this.voted.emit(this.vote)
  }


  private countVote(vote) {
    
    if (vote === 'up') {
      this.vote++;

    } else {
      this.vote--;

    }
  }

}
