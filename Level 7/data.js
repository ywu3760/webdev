const PAGE_DATA = {
    level: "Level 7",
    title: "Events",
    lessons: [{title:"Mouse Events", objective:"Objective: To understand how the system keeps track of events.", description:"We've already done plenty of work with clicking buttons. You click on an element and program it to respond to that event with an onclick.<br /><br />",slides:[{text:"Events can be pretty tricky when you dig deep into them, but we've already been using events to a small extent so let's start with something we know very well.<br /><br />A mouse click.<br /><br />Notice how the click event is embedded into the html tag.  This allows the user to click anywhere on the document and have it react.  If the mouse event was in the body, then the click wouldn't work everywhere because the body is only as large as the content that fills it.<br /><br />This doesn't do anything yet, though.",image:"step1.PNG"},{text:"First we need the react() function.  It doesn't do much of anything, but it will assure us that the event is working.  Go ahead and try it just to make sure.",image:"step2.PNG"},{text:"Now comes the hard part.  Notice that there is a change to the call to react().  An argument is in there (event).  Where did that come from?<br /><br />The event object belongs to the window object.  Whenever an event occurs, all of the information from that event is loaded into the event object.  If you want to use that information, you need to save it all very quickly because another event is going to happen before you know it and all of that information will be wiped away.",image:"step3.PNG"},{text:"Notice that the react() function now has a parameter.  'e' will receive the event object from the event.<br /><br />Like all other parameters, it can be named anything as long as it's there and ready to receive the information from the event object.",image:"step4.PNG"},{text:"Before moving on, let's make something on screen for output.  It's easier than checking the console.  Create a div on the page and assign it to a variable in initialize().",image:"step5.PNG"},{text:"Great.  Now let's rewrite react().<br /><br />One of the simplest things to access through the event object (now stored in e) is the position of the event.  Since we're dealing with a mouse pointer, the position of the event is the position of the mouse pointer.<br /><br />The clientX and clientY properties are the X and Y positions of the mouse pointer during the onclick <b><i>in the window</i></b>.<br /><br />Something to keep in mind is that different types of events will trigger different properties in the event object.  For example, a keyboard event wouldn't necessarily place any information into clientX and clientY.<br /><br />You can run this now to view your mouse pointer's coordinates on every click.",image:"step6.PNG"},{text:"Let's see what else the event object has under the hood?<br /><br />Try this to find out what target is.  Spolier alert, you should get different results from clicking on the div and clicking on the blank portions of the screen.",image:"step7.PNG"},{text:"If you tried this, and I sincerely hope you did, you will have noticed that the 'target' property is filled with the object you clicked on.<br /><br />Think about that for a second.<br /><br /><b><i>It gives you the object</i></b>.That means the whenever you have an HTML element with which the user can interact, you don't necessarily have to save it beforehand because you will have access to it every time the user clicks on it.<br /><br />That's pretty awesome!",image:"step7.PNG"},{text:"Let's illustrate this point by actually doing something with the target.  Try this.",image:"step8.PNG"},{text:"If you did it right, your page should have changed to blue when you clicked anywhere on the document. That's because the target was the html element (the document) and you accessed the backgroundColor of its style object.",image:"step8.PNG"},{text:"Change the onclick event to an onmousedown event.<br /><br />What's the difference?<br /><br />They may seem identical to you like this, but they are definitely not.<br /><br />Switch back to an onclick and see if you can detect the difference.  Try it a few times if you have to.",image:"step9.PNG"},{text:"An onmousedown event triggers when the mouse button is pressed down.  An onclick is triggered during a click, which is a down and an up.<br /><br />There's also an onmouseup event.<br /><br />These two events give us the opportunity to break up the two parts of a mouse click and control what happens during each part.<br /><br />For this example, we're going to pass a color into the react() function as a second parameter.",image:"step10.PNG"},{text:"Add the clr parameter to represent the color.<br /><br />Instead of setting the target's background color to 'cornflowerblue', it gets set to clr.  Because of the way we called the function, once through onmousedown with cornflowerblue and once through onmouseup with white, the background should change from blue to white on every complete click.",image:"step11.PNG"},{text:"onmousedown also gives us button information that onclick doesn't provide.  The button property has a number.  See if you can figure out which numbers correspond to which buttons.<br /><br />Be careful with this, though.  Different browsers use different numerical codes for different buttons.  There are also different mice with different buttons.  Always test your pages before releasing them and write in conditions to handle different browsers.",image:"step12.PNG"},{text:"If you played around with the buttons, you'll have noticed that a right click always brings up a menu.  This is called the contextmenu and it is triggered by the oncontextmenu event.<br /><br />Let's see what we can do to reprogram this event.",image:"step13.PNG"},{text:"Add these couple of lines to the beginning of the react() function.<br /><br />The <i>if</i> checks to see if the <i>type</i> of the event is contextmenu.  We need to do this because react() is handling several different types of events.  The 'type' of any event is the name of the event without the <b><i>on</i></b> prefix.<br /><br />The second line calls the preventDefault() function for the event.  Many events have something that they do automatically (or by default).  Loading the context menu is a good example of the default function of the right click.  By calling preventDefault() for the event, it bypasses that automatic functionality.<br /><br />This program will now do its simple thing without obstacles.",image:"step14.PNG"}]}, 
{title:"Keyboard Events", objective:"Objective: To understand how your software reacts to key presses.", description:"Triggering a key event is the same as triggering a mouse event.  You use an event.  The response, however, is quite different.<br /><br />While the mouse has several buttons, mostly we're interested in the left one.  The keyboard, however, has dozens of keys and each one can do something different on your page.  Keeping track of all of those keys takes some work.  Even after you've figured that out, making your keyboard work on exactly the write element(s) has even more layers.  Since there is no 'pointer' for the keyboard, you need to tell the computer what to do when the key is pressed.  Programming this in an organized and efficient way is essential to the smooth function of your page.",slides:[{text:"Today, we're going to build a page that allows the user to drive a car around the screen and track its movements.<br /><br />Set up this basic screen and make sure that your log shows up where it's suppose to show up.<br /><br />Before beginning, make sure you download the <a href = 'lessons/keyboard events/purple car.png'>Purple Car Image</a> and put it into your construction folder.",image:"step1.PNG"},{text:"One event for the keyboard is the 'keypress' event.<br /><br />In order for an element to respond to a keyboard event, that element must have <b><i>focus</i></b>.  Not all elements can have focus, but we'll look at that later.  Right now, putting the event into the html element (the document) ensures that the system will recognize our event.",image:"step2.PNG"},{text:"Let's find out which key was pressed.<br /><br />There are 3 properties for the event object that will give us the necessary information.<br /><br />Don't forget to display the information to the log box.<br /><br />Try this.",image:"step3.PNG"},{text:"If you tried everything, you'll have noticed a few things.<br /><br />The 'which' property gives you a number.  That is the Unicode value of the character that was received from the key press.  A useful piece of information is that the value of 'a' is different than the value of 'A', but the Unicode value of 'b' is one more than the Unicode value of 'a'.<br /><br />Did you notice that you can get a capital 'A' by holding down the SHIFT key, but the SHIFT key itself did not trigger the event?<br /><br />Did you notice that the pressing one of the numbers along the top of the keyboard gave you a 'code' value of DigitX whereas pressing one of the numbers on the number pad gave you a code of NumpadX?<br /><br />Did you notice that the 'which' value of DigitX and NumpadX are the same?<br /><br />Digit you notice that the number pad keys don't trigger the event if the numlock is on?<br /><br />Did you notice that the arrows don't trigger the event?<br /><br />Okay.  That's enough.  I just wanted to impress upon you that there's a lot to notice.",image:"step3.PNG"},{text:"Change the event to 'onkeydown' and try it again.  Try to notice a few things this time.",image:"step4.PNG"},{text:"Now you can't press a key without having the page react to it.  Even the numlock key itself.  Even the function keys.  Each one of them has a code that gets passed from the hardware to the software.<br /><br />But why?<br /><br />The 'keypress', 'keydown', and 'keyup' (which responds the same way as 'keydown') events correspond to the mouse events 'click', 'mousedown', 'mouseup'.<br /><br />  They are there to provide functionality for holding a key down and eventually releasing it.<br /><br />The different reactions are designed to give a programmer more flexibility in deciding how (and if) the page will react to certain key hardware commands.",image:"step4.PNG"},{text:"Okay, let's have some fun.  Get the purple car onto the screen.",image:"step5.PNG"},{text:"Let's use a little CSS to prep the car for use on our page.",image:"step6.PNG"},{text:"Constants.<br /><br />I love constants and you should, too.<br /><br />They lend context to your code.  The constants here represent forward and backward movement for the car.  The values correspond to the Unicode values of the arrows on your keyboard.<br /><br />Pretty clever, right?<br /><br />We're also going to need some back end coordinates for our car.",image:"step7.PNG"},{text:"Big changes here.<br /><br />We're now going to use the information from our events to make things happend on our page.  Specifically, we want to make that car move.<br /><br />If the user hits the up arrow, move the car up (subtract 1 from its y coordinate).  If the user hits the down arrow, move the car down (add 1 to its y coordinate).  Remember that (x, y) = (0, 0) is in the top left corner of your screen and all numbers go up from there.  Negative coordinates exist off screen.",image:"step8.PNG"},{text:"Nothing shows without the display.<br /><br />This function uses the back end coordinates to inform the page where to place the image.  At this point, it should go without saying that using the top and left properties of the style object of the image is <b><i>not</i></b> the way to track your car's position.<br /><br />Try this now.",image:"step9.PNG"},{text:"Moving 1 pixel at a time is pretty slow and boring.  Let's give the user the option to change it.",image:"step10.PNG"},{text:"Give it an identity.",image:"step11.PNG"},{text:"Change the logKey function so that it uses the speed from the input box instead of just 1.<br /><br />Try this, change the speed to 2, and see what happens.",image:"step12.PNG"},{text:"Depending on how you ran this, a couple of different things may have happened.  In the first place, your car should have been moving twice as fast.  But did you notice the speed changing every time you pressed the arrow keys?<br /><br />A while back, we talked about HTML elements having 'focus'.  Not every element can have focus.  It's just the elements that are responsible for user interaction (text areas, buttons, and anything that uses the input tag).<br /><br />When you clicked on the speed box (instinctively, by the way) to change the speed, you gave it focus. If you didn't click away from it when you started moving your car, it still had focus and responded to your key events.  That's how key events work.  Whatever has focus will respond to them.  With the exception of your document, only one element can have focus at a time.<br /><br />Check out the samples section for an enhanced version of this that uses multiple cars and objects.",image:"step12.PNG"}]}, 
{title:"Functions as Objects", objective:"Objective: To see and understand how functions behave as objects.", description:"A function is an object.<br /><br />It can have properties.<br /><br />It can be referenced by name.<br /><br />It can be assigned to a variable.<br /><br />It can be passed to a parameter as an argument.<br /><br />It is an object.",slides:[{text:"Let's start small.  We're going to create a counter that ticks off second after second.  This may seem simple, especially if you've worked with timers before but <b><i>don't cut corners</i></b> with this construction.<br /><br /><b><i>timers are tricky.</i></b><br /><br />We'll get to programming startCounter() and stopCounter() in a few steps.",image:"step1.PNG"},{text:"Make a back end variable for your counter and grab the div in an object.<br /><br />Back end variables are important.  Remember that.",image:"step2.PNG"},{text:"The display function will simply output the counter's value.",image:"step3.PNG"},{text:"The count() function will handle the actual work of increasing the counter and displaying the result.",image:"step4.PNG"},{text:"The startCounter() function is triggered by clicking the Start Counter button.  It uses something called setInterval(), which is part of the window object, to start the timer.<br /><br />This will work now.  Try it.",image:"step5.PNG"},{text:"Knowing how to make something work doesn't really mean you understand it.  Timers are one of those things that students look up online, insert, and think they understand.<br /><br />Guilty as charged.<br /><br />Let's break this thing down.",image:"step5.PNG"},{text:"At its core, this statement performs 2 basic tasks.  It calls a function (setInterval()) and it assigns a value to counterTimer.<br /><br />setInterval() returns a numeric id for the timer.  Many times, this id goes unused.  You'll need it, however, if you want to manage a group of timers and, especially, if you want to stop a timer.<br /><br />The console.log was added so that you could run this and see the value of counterTimer.",image:"step6.PNG"},{text:"The setInterval() function takes 2 parameters.  The first looks like a string (because it is a string).  The second is a number.<br /><br />The string represents a function call, very much the same way a mouse or keyboard event can trigger a function call through HTML.<br /><br />The number is the interval in milliseconds.<br /><br />All together, this tells the page to call the count() function every 1000 milliseconds, or every second.<br /><br />It is, however, the least efficient way to use setInterval.",image:"step6.PNG"},{text:"Look at the function now.  Instead of passing a string as the argument, there's a <b><i>reference</i></b> to the count() function.  It is <b><i>referenced</i></b> by name.<br /><br />A function is an object.<br /><br />It has a value (a complex one that is referenced by a memory address because it's an object).<br /><br />This is known as a <b><i>callback function</i></b>.  We're passing function B into function A as an argument.  Function A will then call function B as part of its own process.<br /><br />We haven't changed much, but try an experiment.  Run this code and click the Start Timer button multiple times.  What happens?",image:"step7.PNG"},{text:"Did the timer start running really really fast?  Why do you think this happened?",image:"step7.PNG"},{text:"It happened because you create a new timer each time you click the button.  Each of those timers is calling the count() function and updating the counter.  When you have a thousand timers calling count(), it's happening every millisecond instead of every second.<br /><br />That's probably not what we want.<br /><br />When you write a program with a timer, you need to keep control of the timers as they get started and stopped, <i>especially</i> if you give that option to the user.",image:"step7.PNG"},{text:"The clearInterval() function will stop the timer from running.  You absolutely need that numeric id returned by the original call of setInterval() in order to clear it out.<br /><br />Try it.",image:"step8.PNG"},{text:"As effective as this is, it doesn't prevent you from clicking the Start Timer button again and again.  It also doesn't have the ability to stop any timer past the first because each click of the button creates a new timer and stores the new id into counterTimer.  The old ones are then lost.",image:"step8.PNG"},{text:"If you write a program that works with multiple timers, you'll want to manage them in an array or some other data structure that better suits your needs.<br /><br />For this construction, however, we're only managing the one timer and we want to make sure that one timer is all that we're running.  Let's set a default value of -1.<br /><br />I'm using a constant.<br /><br />Because I like constants.",image:"step9.PNG"},{text:"Down here in startCounter(), we'll set a condition that prevents the timer from activating <b><i>unless</i></b> the id is TIMER_OFF.",image:"step10.PNG"},{text:"And here, very importantly, we reset the id to TIMER_OFF so that we can start it up again whenever we want.<br /><br />It's very important the the timer be cleared <b><i>before</i></b> resetting counterTimer.  If you reset counterTimer first, the clearInterval() won't work because the id will be wrong.<br /><br />Try it.  Click to your heart's content!<br /><br />When you'er done, head over to the samples section and take a look at 'Simon'.",image:"step11.PNG"}]}, 
{title:"Dynamic Events", objective:"Objective: To see how to properly add events to HTML elements created through Javascript.", description:"A computer doesn't have the ability to spontaneously react to anything.  It's just a machine.  That's why, when we talk about 'event driven' programming, we're talking about a system that's been designed to <i>simulate</i> a reaction. If you want a program to respond to an event, that program has to be ready for it.  That's where <b><i>listeners</i></b> come in.<br /><br />An <b><i>event listener</i></b> is a piece of code that's sitting in memory and cycling through its process over and over again.<br /><br />Think about the kid in the back seat of the car asking, 'Are we there, yet?' over and over again.  That kid is a listener, constantly checking in to see whether or not there's been an 'arrival' event.",slides:[{text:"We're going to build a page that allows the user to add multiple counters.  What makes this difficult is that we don't know how many counters the user is going to want to create.  We can't havea  static number of them; we need to create them on the fly.<br /><br />To start with, let's make a button for adding the counters and a div that will contain all of the new counters.",image:"step1.PNG"},{text:"This is truly a back end construction.  All of the real work is done behind the scenes.  What we need in initialize is a reference to the div and array to hold all of our counters.",image:"step2.PNG"},{text:"The addCounter() function is where we're going to do all of the heavy lifting.  Each time it's clicked, we're going to create a new counter object.  That object will have:<br /><br />A number that counts up.<br />A boolean that tells whether or not the counter is started or stopped.<br />A button to start the counter.<br />A button to stop the counter.<br />An interval id.<br />A span for the display.<br /><br />It's important that all of these pieces be part of the object so that we can quick-reference them when the start and stop events are triggered.",image:"step3.PNG"},{text:"Let's start with the simple things.  Let's create the back end pieces of the object.<br /><br />tmpCtr is the object itself.  It's local because we're eventually going to shove it into the global array, making the temporary reference redundant.<br /><br />Its two most important pieces are the counter itself, starting at 0, and whether or not it's been started.  It has not been started.<br /><br />We are creating this object on the fly because that works well for this example.  In a larger, or more involved program, you might do better to create a class.",image:"step4.PNG"},{text:"Let's create the start button.  We use the document.createElement function just as we have in the past.  It's easy and familiar.  The button, however, is stored as a property of the object.<br /><br />Since we're going to be working with an undefined number of objects, and each needs a start button, it's very important that the start button correspond to the right object.  How would we make it do that?",image:"step5.PNG"},{text:"We'll create a pathway from the button back to the counter object.  This may seem redundant, but we will be limited in scope when we create the event.  In order to overcome that, we need to build our own pathways.<br /><br />The counter object has a button as a property.<br /><br />The button in the counter object has the counter object as one of its properties.",image:"step6.PNG"},{text:"It's time to add the event.<br /><br />The addEventListener function is available for just about any HTML element.  It allows us to assign an event to a dynamically created element.<br /><br />The first parameter is the type of event.  In this case, we're creating a 'click' event.  You can actually define your own events here and build them into custom objects, but that's something for another time.<br /><br />The second parameter is the callback function.  In the last tutorial, we wrote the callback function separately.  Here, we're going to embed an <b><i>anonymous</i></b> function into the argument list.  We need to do that so it is specifically related to the particular button being created when addCounter() is called.  Every time this happens, a new function object will be created and assigned.<br /><br />Take a moment to study this process and try to absorb it.",image:"step7.PNG"},{text:"Let's look at just this function.<br /><br />In order to start the counter counting, we first want to make sure it's not already started.  This is similar to what we did in the last tutorial, but now we're focused on the objects.<br /><br />What does <b>this</b> represent in the anonymous function?<br /><br />As we saw with HTML elements, <b>this</b> is a representation of an object from inside the object.  In this case, <b>this</b> represents the startButton because the anonymous function is embedded in addEventListener, which is an action taken by the startButton.<br /><br />Pathways!",image:"step8.PNG"},{text:"We can work our way back to the counter object through the button and then work our way forward again to the started property.<br /><br />Remember that all of this code is abstract.  When the Add Counter button is clicked, this function is being called to create all of this from scratch.  If this is the hundredth time the user has clicked the button, this call of the addCounter() function will have no knowledge of those first 99 clicks.<br /><br />Everything here is new <b><i>every time</i></b>.",image:"step9.PNG"},{text:"For the setInterval, we're passing another anonymous function and storing the returned interval id as a property of our counter object.<br /><br />Once again, using an anonymous function is important because we can't have anything global.  Global functions and variables will overlap each other and prevent the counters from operating individually.<br /><br />Storing the proper interval id as part of the object will be vital when we create the Stop Counter button.",image:"step10.PNG"},{text:"The next piece of this construction is the Stop Counter button.  It's construction is very similar to the construction of the Start Counter button.  We start by creating the object, storing it, and linking it to the counter object from both directions.",image:"step11.PNG"},{text:"Once again, the 'click' event is added with the addEventListener() function.  We're passing an anonymous function as an argument.",image:"step12.PNG"},{text:"First we need to clear out the interval.  When we call the clearInterval() function, we pass through the timerId belonging to the specific object.<br /><br />Remember that the computer is building all of this into memory when we call the addCounter() function.  Even though the Stop Counter button won't be clicked for awhile, all of the necessary parts are built into it right away.<br /><br />Afterwards, we set the boolean to false so that we can start it up again whenever we want.",image:"step13.PNG"},{text:"Before we go ahead and write the display() function, let's make sure there's something to display.<br /><br />Create a span for the counter's output and assign that span to the object as a property.  That way, the right output will appear in the right place on screen.<br /><br />Append an hr for aesthetics.<br /><br />Append the Start Button, the Stop Button, and the span to the div we created as the container.<br /><br />Last, and most important, make sure to push the new counter object into the array.  The tmpCtr variable will disappear once this function ends because it's local.  Putting it into the array insures that we always have a reference to it.",image:"step14.PNG"},{text:"Our display will update all of our counters at once.  Since they are all stored in the counteList array, we can cycle through it and output its own counter to its own span.<br /><br />You can try this now.",image:"step15.PNG"}]}],
    samples: [{title:"Image Capture", lesson:"Mouse Events", text:"By using the onclick and onmousemove events, allow the user to capture and reposition an image in the document.  The onclick will be part of the image and it will toggle whether or not the image is 'captured'.  The onmousemove will be part of the document and will reposition the image based on the position of the mouse <b><i>if</i></b> the image is 'captured'."}, {title:"Simon", lesson:"Functions as Objects", text:"Simon is a game of memory and dexterity where the computer flashes a growing pattern of colors round after round and the user must match the pattern by clicking the appropriate buttons in the allotted time."}, {title:"Drag Manager", lesson:"Dynamic Events", text:"Though Javascript includes events for dragging and dropping, this is a simple utility that allows you choose any HTML element and make it draggable in your program."}],
    faq: [{question:"How do I drag and drop?",answer:"JavaScript does have events for drag and drop (ondrag, ondrop, draggable, ondragover, etc...).  Making these work is more complicated than a simple onclick or onmouseover.  Your web browser has its own functionality for dragging and that will override whatever you write without using preventDefault().  One of the samples in this level is a  Drag Manager utility that uses onmousedown, onmouseup, onmousemove to implement the same process.  You should look at it, but not until after you've gone through the Dynamic Events lesson."}, {question:"How do I create key combos?",answer:"Ooooh.  Good question.<br /><br />You can't handle key combos with simple key events.  You need a back end data stucture that knows which keys are down and which keys are up.  Then, when a possible combination is in play, you can check to see if all of the necessary keys are down.<br /><br />A good way to do this is to create a hash table.  That's just a fancy name for an array where the index numbers actually mean something.  So the index numbers on your hash table will correspond to the unicode values of your keys.  That way there's no searching through the table.  You always know which index you have to check.  As far as whether the key is down or up, that's the information stored at the index in the hash table.<br /><br />Fun, right?"}, {question:"Why do I need to use the addEventListener() function?  Can't I just create the event attribute with the dot operator?",answer:"When you create an element dynamically, you can use the dot operator to access attributes (el.innerHTML, el.src, etc…).  The values of those properties are just strings however. The browser can processes strings from HTML elements and parse them into Javascript code from an event attribute, but not so when you do it on the fly.  The value of el.onclick becomes a simple string that has no function."}, {question:"What about the setAttribute() function?",answer:"The setAttribute() function is a formal way of integrating dynamic and custom attributes into your HTML Elements.  It handles all of the overhead DOM mechanics that the dot operator overlooks. It will work with event attributes."}],
    projects: [{title:"Build Your Own Project", text:"You may choose to create a web page/site based on anything you want.  Please create a spec sheet based on the provided template and make sure to give it in for approval <b><i>before</i></b> beginning the project."}, {title:"Battleship", text:"Battleship is a game of war on the high seas where you position a fleet of ships and try to torpedo your opponent’s similar fleet before being destroyed. In this version, the user will control one fleet, while the computer controls the other."}, {title:"Bluff Stuff", text:"The game of Bluff Stuff is a game of trying to fool your opponents into believing that you’re playing the right cards, whether you are or you're not. The object of the game is to empty your hand. All of the cards are dealt out to all of the players. Play goes in order around the table with each player taking cards from their hand and laying them face down on top of the stack in the center. When it is your turn, you will be assigned a specific card rank. The ranks go up as play proceeds. The first player will be assigned aces, the second player twos, the third player threes, and so on. After Kings, the ranks wrap around to Ace. The player with the Ace of Spades begins the game, but may play other aces (or bluff) when playing that card. When placing cards, you’re supposed to play only cards of your assigned rank, however, since the cards are placed face down, you can bluff and use the opportunity to get rid of extra cards from your hand. If you feel a player is bluffing, you can call the bluff (and other players can call your bluff). When a bluff is called, the cards just placed are flipped face up. If all of the cards match the assigned rank, the player didn’t bluff and the person who called it must collect the pile. If one or more cards does not match the assigned rank, the player did bluff and (s)he collects the pile. The game is over when one player has played out his or her last card and does not have to collect the pile because of a called bluff."}, {title:"Cargo Manifests", text:"As an employee for Full of Ship Importing and Exporting, it’s your job to automate the receipt of shipment manifests and organize the materials for repacking and exporting. Your company has an endless supply of small, large, and extra large boxes that can be used. As the manifests come in, workers from any location can use your web page to assign products to boxes."}, {title:"Toll Plaza", text:"The city is planning on converting its cash toll lanes to pay-by-plate (pbp) lanes in order to ease the flow of traffic. There is some concern about the technology and about the disposition and payment of fines for people who do not follow the rules. They have hired you to construct a simulation whereby they can track the data and determine probable results."}]
};