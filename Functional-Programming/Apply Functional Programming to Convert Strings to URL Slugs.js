// Apply Functional Programming to Convert Strings to URL Slugs
/**
 * Fill in the urlSlug function so it converts a string title and returns the 
 * hyphenated version for the URL. You can use any of the methods covered in this 
 * section, and don't use replace. Here are the requirements:
 * The input is a string with spaces and title-cased words
 * The output is a string with the spaces between words replaced by a hyphen (-)
 * The output should be all lower-cased letters
 * The output should not have any spaces
 */
function urlSlug(title){
    const x = title.toLowerCase();//lowercase all the literals
    const y = x.split(/\W+/);//converts to an array separated with non-alphanumeric chars including start index
    const a = y.filter(item => {//we dont want non alphanumeric chars at the start, so need to remove it
        if(item[0] === /\W/){
            return item.splice(1);
        } else {
            return item;
        }
    });
    const z = a.join('-');
    return z;
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));//a-mind-needs-books-like-a-sword-needs-a-whetstone
console.log(urlSlug(" Winter Is  Coming"));//winter-is-coming
console.log(urlSlug("Winter Is Coming"));//winter-is-coming
console.log(urlSlug("$$anything & no one will ( no ) know"));//anything-no-one-will-no-know
