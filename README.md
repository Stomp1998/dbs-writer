New update *1.0.8*

Features added:

Now you can do an client to write your messages in console.

You need nodejs to make this package running.

How to download and create message:

1-Download the package by using this command 
```
npm install dbs-writer --save
```



2-Insert the package to your script by this code 
```
const write = require("dbs-writer");
```



3-Create the client by this code 
```
const Client = new write.Client();
```



4-To add message to console by this code 
```
Client.writeMsg("message here");
```

The stacked code: 
```
const writer = require("dbs-writer");

const Client = new writer.Client();

Client.writeMsg("your message here");

```
And you done.

DBSwriter
=============
new Features 
This is new featuers :
---
.Added Client events like
```
1-onReady
2-on('msg') or on('ready');
```
How to use them? this is a example of how to use it
```
const writer = require("dbs-writer");

const Client = new writer.Client();

Client.on('msg', Client.writeMsg("Here you message"));
Client.on('ready', Client.writeMsg('I am ready!'));
```

Author
-----------
stomp1998

dbsteam
-----------
