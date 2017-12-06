# HTTP vs HTTPS
With http or Hyper Text Transfer Protocol two computers (the client and the server) communicates without any encryption. However https means Hyper Text Transfer Protocol Secure and with this protocol the client and the server passes messages with encryption.

Today, more than 50% of all websites are HTTPS. That number has been growing radically in the last few years since Edward Snowden revealed that the NSA is spying on everyone’s internet traffic.

The idea, as stated by many, is to migrate the entire internet into a completely HTTPS environment, where all website traffic is encrypted by default.





## How does HTTPS work? What are TLS/SSL certificates?
Netscape Communications enhanced HTTP with some encryption. Essentially, they married a new encryption protocol named Secure Socket Layer (SSL) to the original HTTP. This became known as “HTTP over SSL” or “HTTP Secure”. Otherwise known as HTTPS.
Secure Sockets Layer (SSL) is a cryptographic protocol that enables secure communications over the Internet. SSL was originally developed by Netscape and released as SSL 2.0 in 1995. 
Transport Layer Security (TLS) is the successor to SSL. TLS 1.0 was defined in RFC 2246 in January 1999. 
Since TLS has succeeded SSL, logic dictates that we should be using the term TLS instead of SSL. However, SSL is by far most common on the Internet, so SSL will continue to be my default acronym of choice when making non-application specific references. 

#### How HTTPS Works

HTTPS keeps your stuff secret by encrypting it as it moves between your browser and the website’s server. This ensures that anyone listening in on the conversation can’t read anything. This could include your ISP, a hacker, snooping governments, or anyone else who manages to position themselves between you and the web server.

Essentially, you need three things to encrypt data:

The data you want to encrypt
A unique encryption key (just a long string of random text)
An encryption algorithm (a math function that “garbles” the data)

![](https://tiptopsecurity.com/wp-content/uploads/2017/06/How-HTTPS-Works.png)

## Why is this important to implement in your projects?

The data sent over HTTP connections can be intercepted and read by anyone with access to the wires the data uses to get from you to the server. 

It’s as if you were talking to someone standing on the opposite side of a room; if neither of you wanted to move any closer to each other, anyone sitting in between you two would be able to hear what you were saying.

This can be problematic when people have to deal with sensitive information online, such as credit cards for online purchases or Social Security numbers when e-filing taxes.

The solution to this comes in the form of HTTPS — hypertext transfer protocol secure — which operates on the same basic framework as HTTP. However, the data in an HTTPS connection travel are scrambled in a special way, encrypted with Transport Layer Security (TLS).

Essentially, in this model, the data your browser sends is scrambled during transportation, and then decoded once it reaches the server. Data received from the server is also transmitted in this way — so even if a third party was able to intercept the data, they’d have no way of reading it. This way, sensitive information, such as credit card numbers, runs a lower risk of being compromised as decryption happens only after the information has been received by the intended party.

## Demo how to generate certificates and use them in a node project

## Interesting links
https://medium.com/berkman-klein-center/http-vs-https-what-it-means-for-internet-censorship-36a3ea4cfe80

https://robertheaton.com/2014/03/27/how-does-https-actually-work/

https://www.sitepoint.com/how-to-use-ssltls-with-node-js/

https://tiptopsecurity.com/how-does-https-work-ssl-tls-explained/