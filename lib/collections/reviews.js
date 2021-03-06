Reviews = new Mongo.Collection("reviews");

Reviews.attachSchema(new SimpleSchema({
    text: {
        type: String,
        max: 200
    },
    reviewee: {
        type: String,
        autoform: {
            omit: true
        }
    },
    reviewer: {
      type: String,
      autoform: {
        omit: true
      }
    },
    createdAt: {
      type: Date,
      autoform: {
        omit: true
      },
      autoValue: function() {
        if(this.isInsert) {
          return new Date();
        }
      }
    }
}))