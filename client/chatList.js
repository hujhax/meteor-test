Template.chatList.helpers({
    sampleChats: function() {
        return Chats.find();
    }
});

Template.chatList.events({
    'click button': function() {
        Meteor.call("addChat", $('input').val());
    }
});