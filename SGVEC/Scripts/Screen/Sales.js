$(document).ready(function () {
    $("#txtCode").mask("9999");
    $("#txtCpfCli").mask("999.999.999-99");
    $("#txtCpfFunc").mask("999.999.999-99");
    $("#txtNumParcSales").mask("9999");
    $("#txtValParcSales").mask("999.00");
    $("#txtDescontoSales").mask("999.00");
    $("#txtTotalSales").mask("999.00");

    if ($('#lblError')[0] != undefined) {
        if ($('#lblError')[0].innerText != "") {
            $('#divAlertDanger').prop('style', 'display:block');
        }
    }

    if ($('#lblSucess')[0] != undefined) {
        if ($('#lblSucess')[0].innerText != "") {
            $('#divAlertSucess').prop('style', 'display:block');
        }
    }

    $('#btnSearchSales').click(function () {
        $('#ddlFuncSales').prop('disabled', false);
        $('#btnSave').prop('disabled', false);
        $('#btnClearComponents').prop('disabled', false);
        DisableComponents(true);
    });

    $('#btnInsertSales').click(function () {
        $('#txtCodSales').val("");
        ClearComponents();
        DisableComponents(false);
    });

    $('#btnClearComponents').click(function () {
        ClearComponents();
    });

    $("#gvSales tr").click(function () {
        var selected = $(this).hasClass("selecionado");
        $("#gvSales tr").removeClass("selecionado");
        if (!selected)
            $(this).addClass("selecionado");
    });


    function ClearComponents() {
        $('#txtNomeCliSales').val(""); $('#txtCpfCliSales').val(""); $('#txtDtSales').val(""); $('#txtNumParcSales').val("");
        $('#txtValParcSales').val(""); $('#txtDescontoSales').val(""); $('#txtTotalSales').val("");
    }

    function DisableComponents(value) {
        $('#txtNomeCliSales').prop('disabled', value); $('#txtCpfCliSales').prop('disabled', value);
        $('#txtDtSales').prop('disabled', value); $('#txtNumParcSales').prop('disabled', value); $('#txtValParcSales').prop('disabled', value);
        $('#txtDescontoSales').prop('disabled', value); $('#txtTotalSales').prop('disabled', value);
    }
});