describe('test', function() {
    
    beforeEach(module('metaList'));

    it('exist', inject(function(mlData) {
        expect(mlData).toBeDefined();
    }));

    it("gerList: should return listItems", inject(function(mlData){

        var expected = [{
            title : "books"
        }]

        expect(mlData.getLists()).toEqual(expected);
    }))
});