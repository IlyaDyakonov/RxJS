import { faker } from '@faker-js/faker';


export function createRandomMessage() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    from: faker.internet.email(),
    subject: faker.lorem.words(3),
    body: faker.lorem.sentences(2),
    received: faker.finance.accountNumber(10)
  };
}

const MESSAGES = Array.from({ length: 5 }, () => createRandomMessage());

const incomingDiv = document.querySelector('.incoming');

MESSAGES.forEach(message => {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.innerHTML = `
    <p><strong>From:</strong> ${message.from}</p>
    <p><strong>Subject:</strong> ${message.subject}</p>
    <p><strong>Body:</strong> ${message.body}</p>
    <p><strong>Received:</strong> ${new Date(message.received)}</p>
    <p>________________________________________________</p>
  `;
  incomingDiv.appendChild(messageDiv);
});
