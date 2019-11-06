# Class Notes 5 November 2019

## Observer Pattern

- A standardize design paradigm is CS
  - Something called a "subject" maintains a list of dependencies called "observers"
- Publisher / Subscriber:
  - An object that publishes events, and another object subscribes to those events
  - Neither object cares about the other objects context. Only the event subscribed and action made are important.

## Node Events Module

- Is a library that deals specifically with the Pub / Sub design pattern
  - We can define a list of events that other services can subscribe to

```js
'use strict';

// getting access to events library
const events = require('events');

// insatiating a variable as an instance of that library
const EventEmitter = new events();

EventEmmitter.on('Messages', handleMessages);
EventEmmitter.on('SignIn', handleMessages);
EventEmmitter.on('SignOut', handleMessages);
```
