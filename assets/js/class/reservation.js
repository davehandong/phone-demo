var reserve = {
  "mask": {
    "tagName": "div",
    "id": "masker",
    "class": "mask"
  },
  "alert": {
    "tagName": "div",
    "id": "alerter",
    "class": "message",
    "children": [
      {"tagName":"div","class":"ui-bar" },
      {
        "tagName":"div",
        "class":"message-content",
        "children":[
          {"tagName":"h3"},
          {"tagName":"button","html":"确定"}
        ]
      }
    ]
  },
  "confirm": {
    "tagName": "div",
    "id": "confirmer",
    "class": "message",
    "children": [
      {"tagName":"div","class":"ui-bar" },
      {
        "tagName":"div",
        "class":"message-content",
        "children":[
          {"tagName":"h3"},
          {"tagName":"button","id":"ok","html":"确定"},
          {"tagName":"button","id":"cancel","html":"关闭"}
        ]
      }
    ]
  }
};
