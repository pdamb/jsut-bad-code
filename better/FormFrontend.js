better.FormFrontend = (function () {

    function fui(options) {
        this.chatWindow = $(options.chatWindow);
        this.chatInput = $(options.chatInput);
        this.chatSubmit = $(options.chatSubmit);
    }

    fui.prototype = Object.create(better.iFrontend);

    fui.prototype.addMessage = function (msg) {
        this.chatWindow.val(this.chatWindow.val() + '\n' + msg);
    }

    fui.prototype.clear = function () {
        this.chatWindow.val('');
    }

    fui.prototype.getControl = function (name) {
        switch (name) {
            case 'window':
                return this.chatWindow;
            case 'input':
                return this.chatInput;
            case 'submit':
                return this.chatSubmit;
        }
    }

    return fui;

})();