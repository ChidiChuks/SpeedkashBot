import { ChatService, Message } from './../../chat.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/scan'

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.chat.talk();
  }

}
