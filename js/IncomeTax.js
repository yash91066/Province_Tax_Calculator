

export default class IncomeTax {
    calculateOntarioTax(amount) {
        if (amount <= 40922) {
            return (amount * 0.0505).toFixed(2);
        } else if (amount <= 81847) {
            return (((amount - 40922) * 0.0915) + 2067).toFixed(2);
        } else if (amount <= 150000) {
            return (((amount - 81847) * 0.1116) + 5811).toFixed(2);
        } else if (amount <= 220000) {
            return (((amount - 150000) * 0.1216) + 13417).toFixed(2);
        } else {
            return (((amount - 220000) * 0.1316) + 21929).toFixed(2);
        }
    }

    calculateFederalTax(amount) {
        if (amount <= 45282) {
            return (amount * 0.15).toFixed(2);
        } else if (amount <= 90563) {
            return (((amount - 45282) * 0.205) + 6792).toFixed(2);
        } else if (amount <= 140388) {
            return (((amount - 90563) * 0.26) + 16075).toFixed(2);
        } else if (amount <= 200000) {
            return (((amount - 140388) * 0.29) + 29029).toFixed(2);
        } else {
            return (((amount - 200000) * 0.33) + 46317).toFixed(2);
        }
    }
}
