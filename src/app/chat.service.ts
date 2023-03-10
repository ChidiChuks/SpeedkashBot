import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { ApiAiClient } from 'api-ai-javascript';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) {}
}


@Injectable(
  {
  providedIn: 'root'
}
)
export class ChatService {

  readonly token = environment.brainshop.SpeedkashBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  // Adds message to source
  update(msg: Message) {
    this.conversation.next([msg]);
  }

  // Sends and receives messages via brainshop
  converse(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);

    return this.client.textRequest(msg)
      .then(res => {
        const speech = res.result?.fulfillment?.speech;
        const botMessage = new Message(speech, 'bot');
        this.update(botMessage);
      });
  }
}
