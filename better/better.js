better.Chat = (function () {

    function chat(ui, validator) {
        this.ui = ui;
        this.validator = validator;
        this.chatInput = ui.getControl('input');
        this.chatSubmit = ui.getControl('submit');

        // init
        var me = this;

        this.ui.clear();
        this.chatInput.focus();

        this.chatSubmit.click(function () {
            me.ui.addMessage(me.chatInput.val());
            me.chatInput.val('');
        });

        this.chatInput.on('keydown', function (e) {
            if (e.keyCode === 13) {
                if (me.validator.validate(me.chatInput.val())) {
                    me.chatSubmit.trigger('click');
                } else {
                    alert(me.validator.getRules());
                }
            }
        });

    }

    return chat;

})();

$(function () {

    var formUiProvider = new better.FormFrontend({
        chatWindow: '#chatWindow',
        chatInput: '#chatInput',
        chatSubmit: '#chatSubmit'
    });

    var premiumValidator = new better.PremiumValidator();

    var chat = new better.Chat(formUiProvider, premiumValidator);

});