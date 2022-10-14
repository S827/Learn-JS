1: Obejcts- Introduction
            Summary
            Objects are associative arrays with several special features.

            They store properties (key-value pairs), where:

            Property keys must be strings or symbols (usually strings).
            Values can be of any type.
            To access a property, we can use:

            The dot notation: obj.property.
            Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
            Additional operators:

            To delete a property: delete obj.prop.
            To check if a property with the given key exists: "key" in obj.
            To iterate over an object: for (let key in obj) loop.
            What we’ve studied in this chapter is called a “plain object”, or just Object.

            There are many other kinds of objects in JavaScript:

            Array to store ordered data collections,
            Date to store the information about the date and time,
            Error to store the information about an error.
            …And so on.
            They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

            Objects in JavaScript are very powerful.

2.  Obejcts- Basics
            Summary
            Objects are assigned and copied by reference. In other words, a variable stores not the “object value”, but a “reference” (address in memory) for the value. So copying such a variable or passing it as a function argument copies that reference, not the object itself.

            All operations via copied references (like adding/removing properties) are performed on the same single object.

            To make a “real copy” (a clone) we can use Object.assign for the so-called “shallow copy” (nested objects are copied by reference) or a “deep cloning” function structuredClone or use a custom cloning implementation, such as _.cloneDeep(obj).