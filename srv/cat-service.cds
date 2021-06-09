using { my.bookshop as my } from '../db/schema';
service CatalogService @(path:'/browse') {

    entity FeedBacks as projection on my.Feedbacks;

  @readonly entity Books as SELECT from my.Books {*,
    author.name as author
    } excluding { createdBy, modifiedBy };

    action submitOrder (book : Integer, amount: Integer);
  }