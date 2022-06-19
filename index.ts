import './style.css';

import { of, map, Observable } from 'rxjs';

// NOTE: BASIC RXJS WITH NEXT, ERROR, COMPLETE
// const observe = new Observable((subscriber) => {
//   subscriber.next('test 1');
//   subscriber.next('test 2');
//   setTimeout(() => {
//     subscriber.next('Test 3 with delay');
//   }, 2000);
//   setTimeout(() => {
//     subscriber.error(new Error('Failed'));
//   }, 4000);

//   return () => {
//     console.log('TEARDOWN');
//   };
// }).subscribe({
//   next: (res) => console.log(res),
//   error: (err) => console.log({ err }),
//   complete: () => console.log('completed'),
// });

// NOTE: UNSUBSCRIBE SAMPLE
// const interval$ = new Observable<number>((subscriber) => {
//   let counter = 1;

//   const intervalId = setInterval(() => {
//     console.log('Emitted', counter);
//     subscriber.next(counter++);
//   }, 2000);

//   // teardown logic
//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval$.subscribe((res) => console.log(res));

// // if you dont' have this unsubscription, the teardown logic will not run, thus you have a leak.
// setTimeout(() => {
//   console.log('Unsubscribe');
//   subscription.unsubscribe();
// }, 8000);

// ------------- cold observable ---------------
// import { ajax } from 'rxjs/ajax';

// const ajax$ = ajax<any>('https://random-data-api.com/api/name/random_name');
// ajax$.subscribe((data) => console.log('Sub 1', data.response.first_name));
// ajax$.subscribe((data) => console.log('Sub 2', data.response.first_name));
// ajax$.subscribe((data) => console.log('Sub 3', data.response.first_name));

// ------------- hot observable ---------------
// const helloBtn = document.querySelector('.hello-button');

// const helloBtnObs$ = new Observable<MouseEvent>((subscriber) => {
//   helloBtn.addEventListener('click', (event) => {
//     subscriber.next(event);
//   });
// });

// helloBtnObs$.subscribe((event) =>
//   console.log('Sub 1: ', event.type, event.x, event.y)
// );
// helloBtnObs$.subscribe((event) =>
//   console.log('Sub 2: ', event.type, event.x, event.y)
// );
