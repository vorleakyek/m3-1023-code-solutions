import { LinkedList } from './lib/linked-list';
import { getHead, prepend, updateHead, withoutHead } from './linked-lists-1';

describe('getHead', () => {
  it('returns the head value', () => {
    const list1 = new LinkedList(13, 9);
    expect(getHead(list1)).toEqual(13);
    const list2 = new LinkedList(null, '');
    expect(getHead(list2)).toBeNull();
  });

  it('does not modify list', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getHead(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });
});

describe('updateHead', () => {
  it('sets the head value', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
    const value =
      'https://images.halloweencostumes.com/products/4090/1-1/venus-fly-trap-costume.jpg';
    updateHead(list, value);
    expect(list.print()).toEqual(
      `LinkedList { "${value}" <- "neck" <- "back" <- "tail" }`
    );
  });
});

describe('withoutHead', () => {
  it('returns a list consisting of all nodes after the head', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    const decapitated = withoutHead(list);
    expect(decapitated?.print()).toEqual(
      'LinkedList { "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify list', () => {
    const list = new LinkedList(56, 23, 8);
    expect(list.print()).toEqual('LinkedList { 56 <- 23 <- 8 }');
    withoutHead(list);
    expect(list.print()).toEqual('LinkedList { 56 <- 23 <- 8 }');
  });
});

describe('prepend', () => {
  it('returns a new list consisting of value, followed by list', () => {
    const input = new LinkedList('head', 'neck', 'back', 'tail');
    const output = prepend(input, 'hat');
    expect(input).not.toEqual(output);
    expect(output.print()).toEqual(
      'LinkedList { "hat" <- "head" <- "neck" <- "back" <- "tail" }'
    );
  });

  it('does not modify input list', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    prepend(list, 'hair piece');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });
});
