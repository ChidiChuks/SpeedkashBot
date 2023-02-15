import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

import { ApiAiClient } from 'api-ai-javascript';

import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor() {}
}


@Injectable(
  {
  providedIn: 'root'
}
)
export class ChatService {

  readonly token = environment.brainshop.SpeedkashBot;
  readonly client = new ApiAiClient({accessToken: this.token});

  constructor() { }

  talk() {
    this.client.textRequest('Who are you?')
      .then(res => console.log(res) );
  }
}
