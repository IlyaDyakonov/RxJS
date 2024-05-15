import { faker } from '@faker-js/faker';


export function createRandomMessage() {
  const receivedTimestamp = faker.date.recent();
  const receivedDate = new Date(receivedTimestamp);

  const hours = receivedDate.getHours().toString().padStart(2, '0');
  const minutes = receivedDate.getMinutes().toString().padStart(2, '0');
  const day = receivedDate.getDate().toString().padStart(2, '0');
  const month = (receivedDate.getMonth() + 1).toString().padStart(2, '0'); // 
  const year = receivedDate.getFullYear();
  const formattedReceived = `${hours}:${minutes} ${day}.${month}.${year}`;
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    from: faker.internet.email(),
    subject: faker.lorem.words(2),
    body: faker.lorem.sentences(2),
    received: formattedReceived
  };
}
