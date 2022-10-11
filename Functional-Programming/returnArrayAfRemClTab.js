/*
Examine the code in the editor. It's using a method that has side effects in 
the program, causing incorrect behaviour. The final list of open tabs, stored 
in finalTabs.tabs, should be 
['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 
'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] 
but the list produced by the code is slightly different.
Change Window.prototype.tabClose so that it removes the correct tab.
*/
// tabs is an array of opened titles in the window
const Window = function(tabs){
    this.tabs = tabs; //keep a record of array inside the object
};
// when two windows joined into 1 window
Window.prototype.join = function(otherWindow){
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
};

//when new tab opened at the end
Window.prototype.tabOpen = function(tab){
    this.tabs.push('new sapce'); //a blank tabs whose title is new space
    return this;
};
// when tab is closed, need to splice array from start to index(excluded) and 
// splice from 1st position from the returned array after first splice, 0th position
// is the tab we want to remove from array
Window.prototype.tabClose = function(index){
    const tabsBeforeIndex = this.tabs.splice(0, index);
    const tabsAfterIndex = this.tabs.splice(1);

    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex);//join both arrays after removal of closed tab

    return this;
}
//create three browser windows
const workWindow = new Window(['gmail', 'outlook', 'onedrive', 'yahoo']);
const socialWindow = new Window(['twitter', 'fb', 'insta', 'telegram', 'messenger']);
const videoWindow = new Window(['youtube', 'tiktok', 'netflix', 'vimeo', 'vime']);

// perform tab opening, closing and other operations
const finalTabs = socialWindow
    .tabOpen()//open new tab
    .join(videoWindow.tabClose(2))//close 3rd tab of video window
    .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs);