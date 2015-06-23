Meteor.startup(function() {
    if (!Chats.findOne({})) {
        Chats.insert({text: "Bonjour!"});
        Chats.insert({text: "Good day!"});
        Chats.insert({text: "How is your family?"});
    }
});