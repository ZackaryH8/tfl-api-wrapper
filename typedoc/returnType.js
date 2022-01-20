const { Converter, ReflectionKind, UnknownType } = require('typedoc');

exports.load = function (app) {
    app.converter.on(Converter.EVENT_CREATE_SIGNATURE, (ctx, sig) => {
        console.log(sig);
        if (sig.kind === ReflectionKind.CallSignature) {
            sig.type = new UnknownType('');
        }
    });
};
