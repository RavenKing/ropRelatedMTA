namespace my.bookshop;

using
{
    Currency,
    managed,
    sap
}
from '@sap/cds/common';

entity Books : managed
{
    key ID : Integer;
    title : localized String(111);
    descr : localized String(1111);
    author : Association to one Authors;
    genre : Association to one Genres;
    stock : Integer;
    price : Decimal(9,2);
    currency : Currency;
    comment : String(100);
}

entity Authors : managed
{
    key ID : Integer;
    name : String(111);
    books : Association to many Books on books.author = $self;
}

/**
 * Hierarchically organized Code List for Genres
 */
entity Genres : sap.common.CodeList
{
    key ID : Integer;
    parent : Association to one Genres;
    children : Composition of many Genres on children.parent = $self;
}

entity Feedbacks : managed
{
    key feedbackID : UUID ;   
    source : localized String(111);
    target : localized String(111);
    userID : String(10);
    comment : String(300);
    realtedOrNot : Boolean;
    similarity : Decimal(9,2);
}
