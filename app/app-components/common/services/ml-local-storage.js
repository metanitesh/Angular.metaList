angular.module('metaList').factory("mlLocalStorgae", function() {

  var bootstrapData = [
    {
      "id": "1A401EF4-5036-4DE1-B8DD-4A19EE40453B",
      "title": "To-Do",
      "tasks": [
        {
          "id": "6FB00942-3020-4DF7-8080-5881B4B17442",
          "title": "clean house",
          "comments": ["after lunch", "maybe tomorrow", "doesn't look that bad"],
          "content": "it's been ages man !",
          "done": false
        },
        {
          "id": "508EE1CB-1544-429F-89FE-3739154448E2",
          "title": "get a haircut",
          "comments": ["will do this weekend"],
          "content": "this could be a good reason to become a monk",
          "done": true
        },
        {
          "id": "F26660FB-C38C-4884-915E-B6F661332292",
          "title": "buy grocery",
          "comments": [],
          "content": "1. eggs\n2. apples\n3. bread \n4. wine",
          "done": false
      }]

    },
    {
      "id": "60128D32-9CB9-4890-80E0-8F92EA716AC6",
      "title": "Books",
      "tasks": [
        {
          "id": "5C70D44F-2A44-4292-B7AB-38E0D3F47A5F",
          "title": "The Art Spirit",
          "comments": ["a work of art which inspires comes from no quibbling or uncertain man", "the book is pure delight for detail oriented peoples"],
          "content": "In certain books- some way in the first few\nparagraphs you know that you have met a brother.",
          "done": false
        },
        {
          "id": "3FB6396A-4353-4C48-8701-9A46BF150068",
          "title": "The Alchemist",
          "comments": ["how to make a great book even better - make a graphic novel"],
          "content": "It's simple things in life that are most extraordinary. only wise man are able to understand them.\n",
          "done": true
        },
        {
          "id": "477B1634-3707-4B29-9BC0-1424FFCCBFC0",
          "title": "The Noticer",
          "comments": ["get some perspective from an old man"],
          "content": "If one makes a mistake then an apology is usually sufficient to get things back on keel. However most peoples doest not seems to understand why  their apology have no effect. it is simply because they did not make a mistake. they made a choice.\n\n",
          "done": true
        },
        {
          "id": "7BC0845F-6826-4750-B717-DF99BF446EC8",
          "title": "Turning Pro",
          "comments": ["much better than war of art"],
          "content": "They didn't know Dave. He was top hand and a good guy. he would never pull the pin. he was a pro.",
          "done": true
        },
        {
          "id": "558473C8-0F7B-4BCC-811F-E1C906A9A3D8",
          "title": "Essentialism",
          "comments": [],
          "content": "We often think of choice as a thing. But choice is not a thing. our option may be  things. but a choice- a choice is an action.",
          "done": false
      }]

    }
  ]

  var init = function(storageName, initData){
    localStorage[storageName] = JSON.stringify(initData);  
  }

  var getData = function() {
    return bootstrapData;
  }

  return {
    getData: getData,
    init: init
  }
})
