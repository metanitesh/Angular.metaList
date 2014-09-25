describe('task service', function() {

  var mockListDb;

  beforeEach(function() {

    mockListDb = [{
      id: 1,
      title: "todo",
      tasks: [{
        id: 11,
        title: "clean house"
        }, {
        id: 12,
        title: "sleep"
      }]
      }, {
      id: 2,
      title: "movie",
      tasks: [{
        id: 21,
        title: "batman"
        }, {
        id: 22,
        title: "harry Potter"
      }]
      }
    ];

  })

  beforeEach(module('metaList'));

  beforeEach(module(function($provide) {
    $provide.value("mlLocalStorgae", {
      getData: function() {
        return mockListDb
      }
    })
  }));

  it('is sane', inject(function(mlTaskService) {

    /*then*/
    expect(mlTaskService).toBeDefined();
  }));

  
});