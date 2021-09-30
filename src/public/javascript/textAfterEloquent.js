
let text = `
<div class="title1">Introduction</div>
<div class="quoteElo1">“We think we are creating the system for our own purposes. We believe we are making it in our own image... But the computer is not really like us. It is a projection of a very slim part of ourselves: that portion devoted to logic, order, rule, and clarity.”</div>
<div class="Ullman">‒Ellen Ullman, <span class="italic">Close to the Machine: Technophilia and its Discontents</span></div>
<img src="/img/PNG/introductEloquent.jpg" alt=""><br>
This is a book about instructing computers. Computers are about as common as screwdrivers today, but they are quite a bit more complex, and making them do what you want them to do isn’t always easy.
<br>
<br>
If the task you have for your computer is a common, well-understood one, such as showing you your email or acting like a calculator, you can open the appropriate application and get to work. But for unique or open-ended tasks, there probably is no application.
<br>
<br>
That is where programming may come in. Programming is the act of constructing a program—a set of precise instructions telling a computer what to do. Because computers are dumb, pedantic beasts, programming is fundamentally tedious and frustrating.
<br>
<br>
Fortunately, if you can get over that fact, and maybe even enjoy the rigor of thinking in terms that dumb machines can deal with, programming can be rewarding. It allows you to do things in seconds that would take forever by hand. It is a way to make your computer tool do things that it couldn’t do before. And it provides a wonderful exercise in abstract thinking.
<br>
<br>
Most programming is done with programming languages. A programming language is an artificially constructed language used to instruct computers. It is interesting that the most effective way we’ve found to communicate with a computer borrows so heavily from the way we communicate with each other. Like human languages, computer languages allow words and phrases to be combined in new ways, making it possible to express ever new concepts.
<br>
<br>
At one point language-based interfaces, such as the BASIC and DOS prompts of the 1980s and 1990s, were the main method of interacting with computers. They have largely been replaced with visual interfaces, which are easier to learn but offer less freedom. Computer languages are still there, if you know where to look. One such language, JavaScript, is built into every modern web browser and is thus available on almost every device.
<br>
<br>
This book will try to make you familiar enough with this language to do useful and amusing things with it.
<br>
<br>
On programming
Besides explaining JavaScript, I will introduce the basic principles of programming. Programming, it turns out, is hard. The fundamental rules are simple and clear, but programs built on top of these rules tend to become complex enough to introduce their own rules and complexity. You’re building your own maze, in a way, and you might just get lost in it.
<br>
<br>
There will be times when reading this book feels terribly frustrating. If you are new to programming, there will be a lot of new material to digest. Much of this material will then be combined in ways that require you to make additional connections.
<br>
<br>
It is up to you to make the necessary effort. When you are struggling to follow the book, do not jump to any conclusions about your own capabilities. You are fine—you just need to keep at it. Take a break, reread some material, and make sure you read and understand the example programs and exercises. Learning is hard work, but everything you learn is yours and will make subsequent learning easier.
<br>
<br>
When action grows unprofitable, gather information; when information grows unprofitable, sleep.
<br>
<br>
Ursula K. Le Guin, The Left Hand of Darkness
A program is many things. It is a piece of text typed by a programmer, it is the directing force that makes the computer do what it does, it is data in the computer’s memory, yet it controls the actions performed on this same memory. Analogies that try to compare programs to objects we are familiar with tend to fall short. A superficially fitting one is that of a machine—lots of separate parts tend to be involved, and to make the whole thing tick, we have to consider the ways in which these parts interconnect and contribute to the operation of the whole.
<br>
<br>
A computer is a physical machine that acts as a host for these immaterial machines. Computers themselves can do only stupidly straightforward things. The reason they are so useful is that they do these things at an incredibly high speed. A program can ingeniously combine an enormous number of these simple actions to do very complicated things.
<br>
<br>
A program is a building of thought. It is costless to build, it is weightless, and it grows easily under our typing hands.
<br>
<br>
But without care, a program’s size and complexity will grow out of control, confusing even the person who created it. Keeping programs under control is the main problem of programming. When a program works, it is beautiful. The art of programming is the skill of controlling complexity. The great program is subdued—made simple in its complexity.
<br>
<br>
Some programmers believe that this complexity is best managed by using only a small set of well-understood techniques in their programs. They have composed strict rules (“best practices”) prescribing the form programs should have and carefully stay within their safe little zone.
<br>
<br>
This is not only boring, it is ineffective. New problems often require new solutions. The field of programming is young and still developing rapidly, and it is varied enough to have room for wildly different approaches. There are many terrible mistakes to make in program design, and you should go ahead and make them so that you understand them. A sense of what a good program looks like is developed in practice, not learned from a list of rules.
<br>
<br>
Why language matters
In the beginning, at the birth of computing, there were no programming languages. Programs looked something like this:
<br>
<br>
00110001 00000000 00000000<br>
00110001 00000001 00000001<br>
00110011 00000001 00000010<br>
01010001 00001011 00000010<br>
00100010 00000010 00001000<br>
01000011 00000001 00000000<br>
01000001 00000001 00000001<br>
00010000 00000010 00000000<br>
01100010 00000000 00000000<br>
That is a program to add the numbers from 1 to 10 together and print out the result: 1 + 2 + ... + 10 = 55. It could run on a simple, hypothetical machine. To program early computers, it was necessary to set large arrays of switches in the right position or punch holes in strips of cardboard and feed them to the computer. You can probably imagine how tedious and error-prone this procedure was. Even writing simple programs required much cleverness and discipline. Complex ones were nearly inconceivable.
<br>
<br>
Of course, manually entering these arcane patterns of bits (the ones and zeros) did give the programmer a profound sense of being a mighty wizard. And that has to be worth something in terms of job satisfaction.
<br>
<br>
Each line of the previous program contains a single instruction. It could be written in English like this:
<br>
<br>
Store the number 0 in memory location 0.
<br>
<br>
Store the number 1 in memory location 1.
<br>
<br>
Store the value of memory location 1 in memory location 2.
<br>
<br>
Subtract the number 11 from the value in memory location 2.
<br>
<br>
If the value in memory location 2 is the number 0, continue with instruction 9.
<br>
<br>
Add the value of memory location 1 to memory location 0.
<br>
<br>
Add the number 1 to the value of memory location 1.
<br>
<br>
Continue with instruction 3.
<br>
<br>
Output the value of memory location 0.
<br>
<br>
Although that is already more readable than the soup of bits, it is still rather obscure. Using names instead of numbers for the instructions and memory locations helps.
<br>
<br>
 Set “total” to 0.<br>
 Set “count” to 1.<br>
[loop]<br>
 Set “compare” to “count”.<br>
 Subtract 11 from “compare”.<br>
 If “compare” is zero, continue at [end].<br>
 Add “count” to “total”.<br>
 Add 1 to “count”.<br>
 Continue at [loop].<br>
[end]<br>
 Output “total”.<br>
Can you see how the program works at this point? The first two lines give two memory locations their starting values: total will be used to build up the result of the computation, and count will keep track of the number that we are currently looking at. The lines using compare are probably the weirdest ones. The program wants to see whether count is equal to 11 to decide whether it can stop running. Because our hypothetical machine is rather primitive, it can only test whether a number is zero and make a decision based on that. So it uses the memory location labeled compare to compute the value of count - 11 and makes a decision based on that value. The next two lines add the value of count to the result and increment count by 1 every time the program has decided that count is not 11 yet.
<br>
<br>
Here is the same program in JavaScript:
<br>
<br>
let total = 0, count = 1;<br>
while (count <= 10) {<br>
  total += count;<br>
  count += 1;<br>
}<br>
console.log(total);<br>
// → 55<br>
This version gives us a few more improvements. Most important, there is no need to specify the way we want the program to jump back and forth anymore. The while construct takes care of that. It continues executing the block (wrapped in braces) below it as long as the condition it was given holds. That condition is count <= 10, which means “count is less than or equal to 10”. We no longer have to create a temporary value and compare that to zero, which was just an uninteresting detail. Part of the power of programming languages is that they can take care of uninteresting details for us.
<br>
<br>
At the end of the program, after the while construct has finished, the console.log operation is used to write out the result.
<br>
<br>
Finally, here is what the program could look like if we happened to have the convenient operations range and sum available, which respectively create a collection of numbers within a range and compute the sum of a collection of numbers:
<br>
<br>
console.log(sum(range(1, 10)));<br>
// → 55<br>
The moral of this story is that the same program can be expressed in both long and short, unreadable and readable ways. The first version of the program was extremely obscure, whereas this last one is almost English: log the sum of the range of numbers from 1 to 10. (We will see in later chapters how to define operations like sum and range.)
<br>
<br>
A good programming language helps the programmer by allowing them to talk about the actions that the computer has to perform on a higher level. It helps omit details, provides convenient building blocks (such as while and console.log), allows you to define your own building blocks (such as sum and range), and makes those blocks easy to compose.
<br>
<br>
What is JavaScript?<br>
JavaScript was introduced in 1995 as a way to add programs to web pages in the Netscape Navigator browser. The language has since been adopted by all other major graphical web browsers. It has made modern web applications possible—applications with which you can interact directly without doing a page reload for every action. JavaScript is also used in more traditional websites to provide various forms of interactivity and cleverness.
<br>
<br>
It is important to note that JavaScript has almost nothing to do with the programming language named Java. The similar name was inspired by marketing considerations rather than good judgment. When JavaScript was being introduced, the Java language was being heavily marketed and was gaining popularity. Someone thought it was a good idea to try to ride along on this success. Now we are stuck with the name.
<br>
<br>
After its adoption outside of Netscape, a standard document was written to describe the way the JavaScript language should work so that the various pieces of software that claimed to support JavaScript were actually talking about the same language. This is called the ECMAScript standard, after the Ecma International organization that did the standardization. In practice, the terms ECMAScript and JavaScript can be used interchangeably—they are two names for the same language.
<br>
<br>
There are those who will say terrible things about JavaScript. Many of these things are true. When I was required to write something in JavaScript for the first time, I quickly came to despise it. It would accept almost anything I typed but interpret it in a way that was completely different from what I meant. This had a lot to do with the fact that I did not have a clue what I was doing, of course, but there is a real issue here: JavaScript is ridiculously liberal in what it allows. The idea behind this design was that it would make programming in JavaScript easier for beginners. In actuality, it mostly makes finding problems in your programs harder because the system will not point them out to you.
<br>
<br>
This flexibility also has its advantages, though. It leaves space for a lot of techniques that are impossible in more rigid languages, and as you will see (for example in Chapter 10), it can be used to overcome some of JavaScript’s shortcomings. After learning the language properly and working with it for a while, I have learned to actually like JavaScript.
<br>
<br>
There have been several versions of JavaScript. ECMAScript version 3 was the widely supported version in the time of JavaScript’s ascent to dominance, roughly between 2000 and 2010. During this time, work was underway on an ambitious version 4, which planned a number of radical improvements and extensions to the language. Changing a living, widely used language in such a radical way turned out to be politically difficult, and work on the version 4 was abandoned in 2008, leading to a much less ambitious version 5, which made only some uncontroversial improvements, coming out in 2009. Then in 2015 version 6 came out, a major update that included some of the ideas planned for version 4. Since then we’ve had new, small updates every year.
<br>
<br>
The fact that the language is evolving means that browsers have to constantly keep up, and if you’re using an older browser, it may not support every feature. The language designers are careful to not make any changes that could break existing programs, so new browsers can still run old programs. In this book, I’m using the 2017 version of JavaScript.
<br>
<br>
Web browsers are not the only platforms on which JavaScript is used. Some databases, such as MongoDB and CouchDB, use JavaScript as their scripting and query language. Several platforms for desktop and server programming, most notably the Node.js project (the subject of Chapter 20), provide an environment for programming JavaScript outside of the browser.
<br>
<br>
Code, and what to do with it
Code is the text that makes up programs. Most chapters in this book contain quite a lot of code. I believe reading code and writing code are indispensable parts of learning to program. Try to not just glance over the examples—read them attentively and understand them. This may be slow and confusing at first, but I promise that you’ll quickly get the hang of it. The same goes for the exercises. Don’t assume you understand them until you’ve actually written a working solution.
<br>
<br>
I recommend you try your solutions to exercises in an actual JavaScript interpreter. That way, you’ll get immediate feedback on whether what you are doing is working, and, I hope, you’ll be tempted to experiment and go beyond the exercises.
<br>
<br>
When reading this book in your browser, you can edit (and run) all example programs by clicking them.
<br>
<br>
If you want to run the programs defined in this book outside of the book’s website, some care will be required. Many examples stand on their own and should work in any JavaScript environment. But code in later chapters is often written for a specific environment (the browser or Node.js) and can run only there. In addition, many chapters define bigger programs, and the pieces of code that appear in them depend on each other or on external files. The sandbox on the website provides links to Zip files containing all the scripts and data files necessary to run the code for a given chapter.
<br>
<br>
Overview of this book
This book contains roughly three parts. The first 12 chapters discuss the JavaScript language. The next seven chapters are about web browsers and the way JavaScript is used to program them. Finally, two chapters are devoted to Node.js, another environment to program JavaScript in.
<br>
<br>
Throughout the book, there are five project chapters, which describe larger example programs to give you a taste of actual programming. In order of appearance, we will work through building a delivery robot, a programming language, a platform game, a pixel paint program, and a dynamic website.
<br>
<br>
The language part of the book starts with four chapters that introduce the basic structure of the JavaScript language. They introduce control structures (such as the while word you saw in this introduction), functions (writing your own building blocks), and data structures. After these, you will be able to write basic programs. Next, Chapters 5 and 6 introduce techniques to use functions and objects to write more abstract code and keep complexity under control.
<br>
<br>
After a first project chapter, the language part of the book continues with chapters on error handling and bug fixing, regular expressions (an important tool for working with text), modularity (another defense against complexity), and asynchronous programming (dealing with events that take time). The second project chapter concludes the first part of the book.
<br>
<br>
The second part, Chapters 13 to 19, describes the tools that browser JavaScript has access to. You’ll learn to display things on the screen (Chapters 14 and 17), respond to user input (Chapter 15), and communicate over the network (Chapter 18). There are again two project chapters in this part.
<br>
<br>
After that, Chapter 20 describes Node.js, and Chapter 21 builds a small website using that tool.
<br>
<br>
Typographic conventions
In this book, text written in a monospaced font will represent elements of programs—sometimes they are self-sufficient fragments, and sometimes they just refer to part of a nearby program. Programs (of which you have already seen a few) are written as follows:
<br>
<br>
function factorial(n) {<br>
  if (n == 0) {<br>
    return 1;<br>
  } else {<br>
    return factorial(n - 1) * n;<br>
  }<br>
}<br>
Sometimes, to show the output that a program produces, the expected output is written after it, with two slashes and an arrow in front.
<br>
<br>
console.log(factorial(8));<br>
// → 40320<br>
<br>
Good luck!
<br>
<br>
<br>
<div class="chapter">Chapter 1</div>
<div class="title1">Values, Types, and Operators</div>
<div class="quoteElo1">“Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below.”</div>
<div class="Ullman">‒Master Yuan-Ma, <span class="italic">The Book of Programming</span></div>
<img src="/img/PNG/eloquent_pic1.jpg" alt=""><br>
Inside the computer’s world, there is only data. You can read data, modify data, create new data—but that which isn’t data cannot be mentioned. All this data is stored as long sequences of bits and is thus fundamentally alike.
<br>
<br>
Bits are any kind of two-valued things, usually described as zeros and ones. Inside the computer, they take forms such as a high or low electrical charge, a strong or weak signal, or a shiny or dull spot on the surface of a CD. Any piece of discrete information can be reduced to a sequence of zeros and ones and thus represented in bits.
<br>
<br>
For example, we can express the number 13 in bits. It works the same way as a decimal number, but instead of 10 different digits, you have only 2, and the weight of each increases by a factor of 2 from right to left. Here are the bits that make up the number 13, with the weights of the digits shown below them:
<br>
<br>
   0   0   0   0   1   1   0   1<br>
 128  64  32  16   8   4   2   1<br>
So that’s the binary number 00001101. Its non-zero digits stand for 8, 4, and 1, and add up to 13.
<br>
<br>
Values
Imagine a sea of bits—an ocean of them. A typical modern computer has more than 30 billion bits in its volatile data storage (working memory). Nonvolatile storage (the hard disk or equivalent) tends to have yet a few orders of magnitude more.
<br>
<br>
To be able to work with such quantities of bits without getting lost, we must separate them into chunks that represent pieces of information. In a JavaScript environment, those chunks are called values. Though all values are made of bits, they play different roles. Every value has a type that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.
<br>
<br>
To create a value, you must merely invoke its name. This is convenient. You don’t have to gather building material for your values or pay for them. You just call for one, and whoosh, you have it. They are not really created from thin air, of course. Every value has to be stored somewhere, and if you want to use a gigantic amount of them at the same time, you might run out of memory. Fortunately, this is a problem only if you need them all simultaneously. As soon as you no longer use a value, it will dissipate, leaving behind its bits to be recycled as building material for the next generation of values.
<br>
<br>
This chapter introduces the atomic elements of JavaScript programs, that is, the simple value types and the operators that can act on such values.
<br>
<br>
Numbers
Values of the number type are, unsurprisingly, numeric values. In a JavaScript program, they are written as follows:
<br>
<br>
13
Use that in a program, and it will cause the bit pattern for the number 13 to come into existence inside the computer’s memory.
<br>
<br>
JavaScript uses a fixed number of bits, 64 of them, to store a single number value. There are only so many patterns you can make with 64 bits, which means that the number of different numbers that can be represented is limited. With N decimal digits, you can represent 10N numbers. Similarly, given 64 binary digits, you can represent 264 different numbers, which is about 18 quintillion (an 18 with 18 zeros after it). That’s a lot.
<br>
<br>
Computer memory used to be much smaller, and people tended to use groups of 8 or 16 bits to represent their numbers. It was easy to accidentally overflow such small numbers—to end up with a number that did not fit into the given number of bits. Today, even computers that fit in your pocket have plenty of memory, so you are free to use 64-bit chunks, and you need to worry about overflow only when dealing with truly astronomical numbers.
<br>
<br>
Not all whole numbers less than 18 quintillion fit in a JavaScript number, though. Those bits also store negative numbers, so one bit indicates the sign of the number. A bigger issue is that nonwhole numbers must also be represented. To do this, some of the bits are used to store the position of the decimal point. The actual maximum whole number that can be stored is more in the range of 9 quadrillion (15 zeros)—which is still pleasantly huge.
<br>
<br>
Fractional numbers are written by using a dot.
<br>
<br>
9.81
For very big or very small numbers, you may also use scientific notation by adding an e (for exponent), followed by the exponent of the number.
<br>
<br>
2.998e8<br>
That is 2.998 × 108 = 299,800,000.
<br>
<br>
Calculations with whole numbers (also called integers) smaller than the aforementioned 9 quadrillion are guaranteed to always be precise. Unfortunately, calculations with fractional numbers are generally not. Just as π (pi) cannot be precisely expressed by a finite number of decimal digits, many numbers lose some precision when only 64 bits are available to store them. This is a shame, but it causes practical problems only in specific situations. The important thing is to be aware of it and treat fractional digital numbers as approximations, not as precise values.
<br>
<br>
Arithmetic<br>
The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them. Here is what they look like in JavaScript:
<br>
<br>
100 + 4 * 11<br>
The + and * symbols are called operators. The first stands for addition, and the second stands for multiplication. Putting an operator between two values will apply it to those values and produce a new value.
<br>
<br>
But does the example mean “add 4 and 100, and multiply the result by 11,” or is the multiplication done before the adding? As you might have guessed, the multiplication happens first. But as in mathematics, you can change this by wrapping the addition in parentheses.
<br>
<br>
(100 + 4) * 11<br>
For subtraction, there is the - operator, and division can be done with the / operator.
<br>
<br>
When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators. The example shows that multiplication comes before addition. The / operator has the same precedence as *. Likewise for + and -. When multiple operators with the same precedence appear next to each other, as in 1 - 2 + 1, they are applied left to right: (1 - 2) + 1.
<br>
<br>
These rules of precedence are not something you should worry about. When in doubt, just add parentheses.
<br>
<br>
There is one more arithmetic operator, which you might not immediately recognize. The % symbol is used to represent the remainder operation. X % Y is the remainder of dividing X by Y. For example, 314 % 100 produces 14, and 144 % 12 gives 0. The remainder operator’s precedence is the same as that of multiplication and division. You’ll also often see this operator referred to as modulo.
<br>
<br>
Special numbers<br>
There are three special values in JavaScript that are considered numbers but don’t behave like normal numbers.
<br>
<br>
The first two are Infinity and -Infinity, which represent the positive and negative infinities. Infinity - 1 is still Infinity, and so on. Don’t put too much trust in infinity-based computation, though. It isn’t mathematically sound, and it will quickly lead to the next special number: NaN.
<br>
<br>
NaN stands for “not a number”, even though it is a value of the number type. You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), Infinity - Infinity, or any number of other numeric operations that don’t yield a meaningful result.
<br>
<br>
Strings<br>
The next basic data type is the string. Strings are used to represent text. They are written by enclosing their content in quotes.
<br>
<br>
ˋDown on the seaˋ<br>
"Lie on the ocean"<br>
'Float on the ocean'<br>
You can use single quotes, double quotes, or backticks to mark strings, as long as the quotes at the start and the end of the string match.
<br>
<br>
Almost anything can be put between quotes, and JavaScript will make a string value out of it. But a few characters are more difficult. You can imagine how putting quotes between quotes might be hard. Newlines (the characters you get when you press enter) can be included without escaping only when the string is quoted with backticks (\`).
<br>
<br>
To make it possible to include such characters in a string, the following notation is used: whenever a backslash (\) is found inside quoted text, it indicates that the character after it has a special meaning. This is called escaping the character. A quote that is preceded by a backslash will not end the string but be part of it. When an n character occurs after a backslash, it is interpreted as a newline. Similarly, a t after a backslash means a tab character. Take the following string:
<br>
<br>
"This is the first line\nAnd this is the second"<br>
The actual text contained is this:
<br>
<br>
This is the first line<br>
And this is the second<br>
There are, of course, situations where you want a backslash in a string to be just a backslash, not a special code. If two backslashes follow each other, they will collapse together, and only one will be left in the resulting string value. This is how the string “A newline character is written like "\n".” can be expressed:
<br>
<br>
"A newline character is written like \"\\n\"."<br>
Strings, too, have to be modeled as a series of bits to be able to exist inside the computer. The way JavaScript does this is based on the Unicode standard. This standard assigns a number to virtually every character you would ever need, including characters from Greek, Arabic, Japanese, Armenian, and so on. If we have a number for every character, a string can be described by a sequence of numbers.
<br>
<br>
And that’s what JavaScript does. But there’s a complication: JavaScript’s representation uses 16 bits per string element, which can describe up to 216 different characters. But Unicode defines more characters than that—about twice as many, at this point. So some characters, such as many emoji, take up two “character positions” in JavaScript strings. We’ll come back to this in Chapter 5.
<br>
<br>
Strings cannot be divided, multiplied, or subtracted, but the + operator can be used on them. It does not add, but it concatenates—it glues two strings together. The following line will produce the string "concatenate":
<br>
<br>
"con" + "cat" + "e" + "nate"<br>
String values have a number of associated functions (methods) that can be used to perform other operations on them. I’ll say more about these in Chapter 4.
<br>
<br>
Strings written with single or double quotes behave very much the same—the only difference is in which type of quote you need to escape inside of them. Backtick-quoted strings, usually called template literals, can do a few more tricks. Apart from being able to span lines, they can also embed other values.
<br>
<br>
ˋhalf of 100 is \${100 / 2}ˋ<br>
When you write something inside \${} in a template literal, its result will be computed, converted to a string, and included at that position. The example produces “half of 100 is 50”.
<br>
<br>
Unary operators<br>
Not all operators are symbols. Some are written as words. One example is the typeof operator, which produces a string value naming the type of the value you give it.
<br>
<br>
console.log(typeof 4.5)<br>
// → number<br>
console.log(typeof "x")<br>
// → string<br>
We will use console.log in example code to indicate that we want to see the result of evaluating something. More about that in the next chapter.
<br>
<br>
The other operators shown all operated on two values, but typeof takes only one. Operators that use two values are called binary operators, while those that take one are called unary operators. The minus operator can be used both as a binary operator and as a unary operator.
<br>
<br>
console.log(- (10 - 2))<br>
// → -8
Boolean values<br>
It is often useful to have a value that distinguishes between only two possibilities, like “yes” and “no” or “on” and “off”. For this purpose, JavaScript has a Boolean type, which has just two values, true and false, which are written as those words.
<br>
<br>
Comparison<br>
Here is one way to produce Boolean values:
<br>
<br>
console.log(3 > 2)<br>
// → true<br>
console.log(3 < 2)<br>
// → false<br>
The > and < signs are the traditional symbols for “is greater than” and “is less than”, respectively. They are binary operators. Applying them results in a Boolean value that indicates whether they hold true in this case.
<br>
<br>
Strings can be compared in the same way.
<br>
<br>
console.log("Aardvark" < "Zoroaster")<br>
// → true<br>
The way strings are ordered is roughly alphabetic but not really what you’d expect to see in a dictionary: uppercase letters are always “less” than lowercase ones, so "Z" < "a", and nonalphabetic characters (!, -, and so on) are also included in the ordering. When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.
<br>
<br>
Other similar operators are >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).
<br>
<br>
console.log("Itchy" != "Scratchy")<br>
// → true<br>
console.log("Apple" == "Orange")<br>
// → false<br>
There is only one value in JavaScript that is not equal to itself, and that is NaN (“not a number”).
<br>
<br>
console.log(NaN == NaN)<br>
// → false<br>
NaN is supposed to denote the result of a nonsensical computation, and as such, it isn’t equal to the result of any other nonsensical computations.
<br>
<br>
Logical operators<br>
There are also some operations that can be applied to Boolean values themselves. JavaScript supports three logical operators: and, or, and not. These can be used to “reason” about Booleans.
<br>
<br>
The && operator represents logical and. It is a binary operator, and its result is true only if both the values given to it are true.
<br>
<br>
console.log(true && false)<br>
// → false<br>
console.log(true && true)<br>
// → true<br>
The || operator denotes logical or. It produces true if either of the values given to it is true.
<br>
<br>
console.log(false || true)<br>
// → true<br>
console.log(false || false)<br>
// → false<br>
Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.
<br>
<br>
When mixing these Boolean operators with arithmetic and other operators, it is not always obvious when parentheses are needed. In practice, you can usually get by with knowing that of the operators we have seen so far, || has the lowest precedence, then comes &&, then the comparison operators (>, ==, and so on), and then the rest. This order has been chosen such that, in typical expressions like the following one, as few parentheses as possible are necessary:
<br>
<br>
1 + 1 == 2 && 10 * 10 > 50<br>
The last logical operator I will discuss is not unary, not binary, but ternary, operating on three values. It is written with a question mark and a colon, like this:
<br>
<br>
console.log(true ? 1 : 2);<br>
// → 1<br>
console.log(false ? 1 : 2);<br>
// → 2<br>
This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language). The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.
<br>
<br>
Empty values<br>
There are two special values, written null and undefined, that are used to denote the absence of a meaningful value. They are themselves values, but they carry no information.
<br>
<br>
Many operations in the language that don’t produce a meaningful value (you’ll see some later) yield undefined simply because they have to yield some value.
<br>
<br>
The difference in meaning between undefined and null is an accident of JavaScript’s design, and it doesn’t matter most of the time. In cases where you actually have to concern yourself with these values, I recommend treating them as mostly interchangeable.
<br>
<br>
Automatic type conversion<br>
In the Introduction, I mentioned that JavaScript goes out of its way to accept almost any program you give it, even programs that do odd things. This is nicely demonstrated by the following expressions:
<br>
<br>
console.log(8 * null)<br>
// → 0<br>
console.log("5" - 1)<br>
// → 4<br>
console.log("5" + 1)<br>
// → 51<br>
console.log("five" * 2)<br>
// → NaN<br>
console.log(false == 0)<br>
// → true<br>
When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect. This is called type coercion. The null in the first expression becomes 0, and the "5" in the second expression becomes 5 (from string to number). Yet in the third expression, + tries string concatenation before numeric addition, so the 1 is converted to "1" (from number to string).
<br>
<br>
When something that doesn’t map to a number in an obvious way (such as "five" or undefined) is converted to a number, you get the value NaN. Further arithmetic operations on NaN keep producing NaN, so if you find yourself getting one of those in an unexpected place, look for accidental type conversions.
<br>
<br>
When comparing values of the same type using ==, the outcome is easy to predict: you should get true when both values are the same, except in the case of NaN. But when the types differ, JavaScript uses a complicated and confusing set of rules to determine what to do. In most cases, it just tries to convert one of the values to the other value’s type. However, when null or undefined occurs on either side of the operator, it produces true only if both sides are one of null or undefined.
<br>
<br>
console.log(null == undefined);<br>
// → true<br>
console.log(null == 0);<br>
// → false<br>
That behavior is often useful. When you want to test whether a value has a real value instead of null or undefined, you can compare it to null with the == (or !=) operator.
<br>
<br>
But what if you want to test whether something refers to the precise value false? Expressions like 0 == false and "" == false are also true because of automatic type conversion. When you do not want any type conversions to happen, there are two additional operators: === and !==. The first tests whether a value is precisely equal to the other, and the second tests whether it is not precisely equal. So "" === false is false as expected.
<br>
<br>
I recommend using the three-character comparison operators defensively to prevent unexpected type conversions from tripping you up. But when you’re certain the types on both sides will be the same, there is no problem with using the shorter operators.
<br>
<br>
Short-circuiting of logical operators<br>
The logical operators && and || handle values of different types in a peculiar way. They will convert the value on their left side to Boolean type in order to decide what to do, but depending on the operator and the result of that conversion, they will return either the original left-hand value or the right-hand value.
<br>
<br>
The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise. This has the expected effect when the values are Boolean and does something analogous for values of other types.
<br>
<br>
console.log(null || "user")<br>
// → user<br>
console.log("Agnes" || "user")<br>
// → Agnes<br>
We can use this functionality as a way to fall back on a default value. If you have a value that might be empty, you can put || after it with a replacement value. If the initial value can be converted to false, you’ll get the replacement instead. The rules for converting strings and numbers to Boolean values state that 0, NaN, and the empty string ("") count as false, while all the other values count as true. So 0 || -1 produces -1, and "" || "!?" yields "!?".
<br>
<br>
The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.
<br>
<br>
Another important property of these two operators is that the part to their right is evaluated only when necessary. In the case of true || X, no matter what X is—even if it’s a piece of program that does something terrible—the result will be true, and X is never evaluated. The same goes for false && X, which is false and will ignore X. This is called short-circuit evaluation.
<br>
<br>
The conditional operator works in a similar way. Of the second and third values, only the one that is selected is evaluated.
<br>
<br>
Summary
We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.
<br>
<br>
Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.
<br>
<br>  
This gives you enough information to use JavaScript as a pocket calculator but not much more. The next chapter will start tying these expressions together into basic programs.
`;

function textEloquent (){
  return text
}

export default textEloquent;

