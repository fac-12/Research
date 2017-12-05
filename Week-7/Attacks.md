# Attacks

## What are the following types of attack?
### Man In The Middle (MITM)

(also known as Janus attack, or bucket brigade attack)

> "Active eavesdropping" is the best way to describe a man in the middle (MITM) attack"

Man-in-the-middle is a type of eavesdropping attack that occurs where a malicious actor inserts himself as a relay/proxy into a communication session (the real-time processing of transactions, conversations or transfer of other data) between people or systems.

A MITM attack can happen in any form of online communication, such as email, social media, web surfing, etc. 

In the most common MITM attacks, attacker mostly uses a WiFi router to intercept user's communication. This technique can be work out by exploiting a router with some malicious programs to intercept user's sessions on the router. Here, the attacker first configures his laptop as a WiFi hotspot, choosing a name commonly used in a public area, such as an airport or coffee shop. Once user connects to that malicious router to reach websites such as online banking sites or commerce sites, attacker then logs user's credentials for later use.

![](https://i.imgur.com/3sTV9CF.gif)

**Wi-Fi Eavesdropping**

Most MITM attacks thrive on Wi-Fi connections. In one approach, hackers will set up a Wi-Fi connection with a legitimate-sounding name. All the hacker has to do is wait for you to connect and he’ll instantly have access to your device. Alternatively, the hacker can create a fake Wi-Fi node disguised as a legitimate Wi-Fi access point to steal the personal information of everyone who connects.

**Session Hijacking**

Once you log into a website, a connection between your computer and the website is established. Hackers can hijack your session by stealing your browser cookies. If they get hold of your login cookies, they can easily log into your accounts and assume your identity.


### Cross Site Scripting (XSS)
https://www.veracode.com/security/xss

>Cross-Site Scripting (XSS) is a security vulnerability which enables an attacker to place client side scripts (usually JavaScript) into web pages. When other users load affected pages the attackers scripts will run, enabling the attacker to steal cookies and session tokens, change the contents of the web page through DOM manipulation or redirect the browser to another page. XSS vulnerabilities generally occur when an application takes user input and outputs it in a page without validating, encoding or escaping it [Source](https://docs.microsoft.com/en-us/aspnet/core/security/cross-site-scripting)


- XSS is a web-based attack performed on vulnerable web applications.
- In XSS attacks, the victim is the user and not the application.
- In XSS attacks, malicious content is delivered to users using JavaScript.



### Cross Site Request Forgery (CSRF)
Cross Site Request Forgery is an attack which exploits a web-server's trust in a user's browser.

A CSRF attack forces a logged-on victim’s browser to send a forged HTTP request, including the victim’s session cookie and any other automatically included authentication information, to a vulnerable web application. Such an attack allows the attacker to force a victim’s browser to generate requests the vulnerable application thinks are legitimate requests from the victim.

- Also known as one-click attack or session riding
- The vulnerability lies in the affected web application, not the victim’s browser or the site hosting the CSRF.



## How can you defend against each of them?

### MITM 
- Using the ```Secure``` flag in the cookie header. This means the cookie will only be set over a HTTPS connection. 
- endpoint authentication to prevent MITM attacks, SSL can authenticate one or both parties using a mutually trusted certification authority. VPN's is a way a would be victim can protect themselves.


### XSS 
- Using ```HttpOnly``` flag to the cookie header. This stops your cookie being accessed by the browser's Javascript (including your own front-end code).
- Use HTML encoding AKA 'sanitising'. This takes input (ie. from a form) characters such as ```>``` and turns them into ```&lt```.

```@{
       var untrustedInput = "<\"123\">";
   }

   @untrustedInput
   ```
   becomes
   
   ```&lt;&quot;123&quot;&gt;```
   
  [Real life MySpace Example](https://samy.pl/popular/tech.html)

### CSRF 
- The most common method to prevent Cross-Site Request Forgery (CSRF) attacks is to generate [CSRF tokens](https://www.veracode.com/security/csrf-token) on every request (PUT, POST, DELETE) and associate them with the user’s session.
- Include the tokens in both the cookie header and body.
- Such tokens should be unique per user session, but can also be unique per request. By including a challenge token with each request, the developer can ensure that the request is valid and not coming from a source other than the user.
- Forcing the user to re-authenticate or proving that they are users in order to protect CSRF. For example, CAPTCHA.
-  It is imperative that no XSS vulnerabilities are present to ensure that CSRF defenses can't be circumvented.



### Resources:
[OASP Top Ten](https://www.owasp.org/index.php/Top_10_2017-Top_10)
[CSRF Video](https://www.youtube.com/watch?v=13QPmRuhbhU)
https://www.veracode.com/security/man-middle-attack
https://www.globalsign.com/en/blog/what-is-a-man-in-the-middle-attack/
https://www.veracode.com/security/xss
https://www.veracode.com/security/csrf