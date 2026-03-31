"use strict";
/*******************************************************
 *     profile.js - 10p.
 *
 *     Hi! I am Jimmy, from the marketing department.
 *
 *     From today on, you are the master of objects. Down
 *     below, I did some coding for you. It is perfect.
 *     Do not change it. Please. Ever.
 *
 *     For my code to show it's full potential, I just
 *     need one object. Can you help me out?
 *
 *     Iva - 2026-03-31
 *******************************************************/

//TODO: Place one object here.

const SAVIOR = {
    name: "Ivi",
    age: 20,
    location: "Hagenberg",
    hobbies: ["Scripting", "JavaScript", "Coding"],
    type_of_companion: "unicorn",
    companion: {
        name: "Corny",
        age: 52,
        color: "rainbow",
        mood: "nice"
    }
}
/*******************************************************
 *   DO NOT CHANGE THE CODE BELOW!
 *******************************************************/
let headline = document.createElement("h2");
headline.textContent = "Savior of the day: " + SAVIOR.name;

let intro = document.createElement("p");
intro.innerHTML = "Hi, I am "+SAVIOR.name+". I am "+SAVIOR.age+
    " years old, live in "+SAVIOR.location+" and I am the savior of this Website.<br/> My Hobbies are:";

let hobbylist = document.createElement("ul");
for(const HOBBY of SAVIOR.hobbies){
    let hobbylist_entry = document.createElement("li");
    hobbylist_entry.textContent = HOBBY;
    hobbylist.append(hobbylist_entry);
}

let companion = document.createElement("p");
companion.textContent = "I also do have a "+SAVIOR.type_of_companion+ " as a companion."; // Pet, Friend, Sister, Emotional Support Airplane, ... Be creative!
companion.innerHTML = companion.textContent +
    "<br/>I am a bit nerdy though, so let me just show you all my "+SAVIOR.type_of_companion+"s attributes as key-value pairs:";

let companion_properties = document.createElement("ul");
for(const KEY in SAVIOR.companion){
    let property = document.createElement("li");
    property.textContent = KEY+": "+SAVIOR.companion[KEY];
    companion_properties.append(property);
}

const heroes_profile = document.createElement("div");
heroes_profile.id="heroes_profile";
heroes_profile.append(headline);
heroes_profile.append(intro);
heroes_profile.append(hobbylist);
heroes_profile.append(companion);
heroes_profile.append(companion_properties);
document.body.append(heroes_profile);