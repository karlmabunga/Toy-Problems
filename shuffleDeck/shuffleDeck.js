/**
 * Given an array containing a deck of cards, implement a function that shuffles
 * the deck.
 *
 * Example:
 *  var deck = orderedDeck();
 *  // ["A♥","2♥","3♥",...,"J♦","Q♦","K♦"]
 *  shuffleDeck(deck);
 *  // ["2♠","J♣","A♦", ... ,"7♣","8♣","K♠"]
 *
 * Note:
 *   A shuffled deck should be completely random. That means that a given card should
 *   be as likely as any other to appear in a given deck index, completely independent
 *   of the order of the input deck. Think carefully about how to be sure your algorithm
 *   generates a properly shuffled deck-- it is easy to accidentally create a biased algorithm.
 *
 * Extra credit:
 *   - Even a naive algorithm can easily run in linear time. However, does your
 *     algorithm remain unbiased as N (the deck size) increases? How do you know?
 *   - Once you have created a properly random, linear algorithm, what is its space complexity?
 *     There is an algorithm that uses O(N) time and O(1) space (i.e., an in-place shuffle).
 *
 * A further note on randomness:
 *   Technically, a computer-shuffled deck will usually be "pseudorandom",
 *   not "truly" random. However, the difference between the two is too small to
 *   be detectable by any known test.
 *   See http://en.wikipedia.org/wiki/Pseudorandom_number_generator .
 *
 *   A human shuffler is much more biased; it takes around seven normal "riffle"
 *   shuffles before a real deck is actually randomized.
 *   See https://www.dartmouth.edu/~chance/teaching_aids/books_articles/Mann.pdf .
 */

  // input - array
  // output - array
  // edge case - none
  // constraints - none
  var shuffleDeck = function(deck, counter) {
    //   create var for deck
    deck = deck || orderedDeck();
    // create counter to stop loop
    counter = counter || 0
    // if counter is more than 1000
    if (counter > 1000 ) {
      return deck;
    }

    // create 1random integer between 0 and 51
    var randomOne = Math.floor(Math.random() * 51)
    // create 2random integer between 0 and 51
    var randomTwo = Math.floor(Math.random() * 51)

    // temp = deck [1random integer]
    var temp = deck[randomOne];
    // deck[1random integer] = deck[2random integer]
    deck[randomOne] = deck[randomTwo];
    // deck[2random integer] = temp
    deck[randomTwo] = temp;
    // increment counter
    counter++;
    return shuffleDeck(deck, counter);

  };

  // Ordered deck generator provided for your testing convenience
  // (You may alter this function, but an unaltered copy will be used for tests.)
  var orderedDeck = function() {
    var suits = [ '♥', '♣', '♠', '♦' ];
    var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
    var deck = [];

    suits.forEach(function(suit) {
      values.forEach(function(value) {
        deck.push(value + suit);
      });
    });

    return deck;
  };

  // console.log(shuffleDeck())