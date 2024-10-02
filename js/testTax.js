import IncomeTax from "./IncomeTax.js";
QUnit.module("IncomTax Class");

QUnit.test("calculateOntarioTax", function (assert) {
  const incomeTax = new IncomeTax();

  assert.equal(incomeTax.calculateOntarioTax(39000), 1969.5, "First ontario Tax bracket");
  assert.equal(incomeTax.calculateOntarioTax(75000), 5185.14, "Second ontario Tax bracket");
  assert.equal(incomeTax.calculateOntarioTax(85000), 6162.87, "Third ontario Tax bracket");
  assert.equal(incomeTax.calculateOntarioTax(160000), 14633, "Fourth ontario Tax bracket");
  assert.equal(incomeTax.calculateOntarioTax(390000), 44301, "Fifth ontario Tax bracket");
});

QUnit.test("calculateFederalTax", function (assert) {
  const incomeTax = new IncomeTax();

  assert.equal(incomeTax.calculateFederalTax(39000), 5850, "First federal Tax bracket");
  assert.equal(incomeTax.calculateFederalTax(75000), 12884.19, "Second federal Tax bracket");
  assert.equal(incomeTax.calculateFederalTax(85000), 14934.19, "Third federal Tax bracket");
  assert.equal(incomeTax.calculateFederalTax(160000), 34716.48, "Fourth federal Tax bracket");
  assert.equal(incomeTax.calculateFederalTax(390000), 109017, "Fifth federal Tax bracket");
});
