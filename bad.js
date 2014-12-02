var bad = bad || {};

bad.chat = (function () {

    var chatWindow = $('#chatWindow');
    var chatInput = $('#chatInput');
    var chatSubmit = $('#chatSubmit');

    function init() {
        chatWindow.val('');
        attachEventHandlers();
        chatInput.focus();
    }

    function attachEventHandlers() {
        chatSubmit.click(function () {
            chatWindow.val(chatWindow.val() + '\n' + chatInput.val());
            chatInput.val('');
        });
        chatInput.on('keydown', function (e) {
            if (e.keyCode === 13) {
                if (chatInput.val()) {
                    chatSubmit.trigger('click');
                } else {
                    alert('Musis neco napsat, nez to posles.');
                }
            }
        });
    }

    return {
        init: init
    }

})();

$(function () {
    bad.chat.init();
})