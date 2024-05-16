import { createRandomMessage } from './faker.js';
import { ajax } from 'rxjs/ajax';
import { interval } from 'rxjs';
import { mergeMap } from 'rxjs/operators';


export function fetchMessages() {
  return ajax.getJSON('https://ilyadyakonov.github.io/RxJS/');
}

const updates$ = interval(5000);

updates$
  .pipe(
    mergeMap(() => fetchMessages())
  )
  .subscribe({
    next: () => {
        const messageElement = createMessage();
        document.querySelector('.messages').prepend(messageElement);
    }
  });

export function createMessage() {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  const emailDiv = document.createElement('div');
  emailDiv.classList.add('email');

  const subjectDiv = document.createElement('div');
  subjectDiv.classList.add('subject');
  
  const dateDiv = document.createElement('div');
  dateDiv.classList.add('date');

  const randomMessage = createRandomMessage();

  emailDiv.textContent = randomMessage.from;
  subjectDiv.textContent = randomMessage.subject.length > 15 ? randomMessage.subject.slice(0, 15) + '...' : randomMessage.subject;
  dateDiv.textContent = randomMessage.received;

  messageDiv.appendChild(emailDiv);
  messageDiv.appendChild(subjectDiv);
  messageDiv.appendChild(dateDiv);

  // messagesDiv.appendChild(messageDiv)
  return messageDiv;
}

