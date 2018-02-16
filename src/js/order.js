$('#order-form').on('submit', submitForm);

function submitForm(ev) {
    ev.preventDefault();

    var form = $(ev.target),
        data = form.serialize(),
        url = form.attr('action'),
        type = form.attr('method');
        
    ajaxForm(form).done(function(msg) {
        var mes = msg.mes,
            status = msg.status;

        openMsgWithButton(260, mes, '');

    }).fail(function(jqXHR, textStatus) { 

        openMsgWithButton(260, "Request failed: " + textStatus, '');

    });
}