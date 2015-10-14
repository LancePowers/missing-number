var expect = chai.expect;
// var should = chai.should();
describe('Find missing integer', function () {
    it('should find which integer between 1-10 is missing', function () {
        var testArray = [1, 2, 3, 4, 5, 6, 8, 9, 10];
        var testArray2 = [2, 1, 3, 7, 5, 9, 8, 6, 10];
        expect(findMissing(testArray)).to.equal(7);
        expect(findMissing(testArray2)).to.equal(4);
    });
});