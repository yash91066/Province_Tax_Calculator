
import "https://code.jquery.com/jquery-1.12.1.min.js";
import IncomeTax from "./IncomeTax.js";

$(document).ready(() => {
    $("#EnterTaxDeducted").keypress((event) => {
        if (event.keyCode === 13) {
            event.preventDefault();
            calculateTax();
        }
    });

    $("#calculate").click((event) => {
        event.preventDefault();
        calculateTax();
    });

    function calculateTax() {
        const EnterTaxIncome = parseFloat($("#EnterTaxIncome").val()) || 0;
        const EnterTaxDeducted = parseFloat($("#EnterTaxDeducted").val()) || 0;
        const incomeTax = new IncomeTax();

        const OntarioTax = incomeTax.calculateOntarioTax(EnterTaxIncome);
        const FederalTax = incomeTax.calculateFederalTax(EnterTaxIncome);
        const totalTax = parseFloat(OntarioTax) + parseFloat(FederalTax);

        $("#OntarioTax").val(OntarioTax);
        $("#FederalTax").val(FederalTax);
        $("#Total").val(totalTax.toFixed(2));
        $("#Owing").val((totalTax - EnterTaxDeducted).toFixed(2));
    }
});
