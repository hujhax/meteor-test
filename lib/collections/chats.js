Chats = new Meteor.Collection("chats");

Meteor.methods({
    addChat: function(text) {
        if (Meteor.userId()) {
            Chats.insert({text: text});
        }
    }
});