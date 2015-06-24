Chats = new Meteor.Collection("chats");

Meteor.methods({
    addChat: function(text) {
        Chats.insert({text: text});
    }
});