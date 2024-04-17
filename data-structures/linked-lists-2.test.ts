import { LinkedList } from './lib/linked-list';
import { append, getLength, getTail, includes } from './linked-lists-2';

describe('getLength', () => {
  it('returns the number of nodes', () => {
    const list1 = new LinkedList(82);
    expect(getLength(list1)).toEqual(1);
    const list2 = new LinkedList<unknown>(null, '', false, 0, NaN);
    expect(getLength(list2)).toEqual(5);
  });

  it('does not modify list', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getLength(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });
});

describe('append', () => {
  it('appends a node containing `value` to the end', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    append(list, 'dirt');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" <- "dirt" }'
    );
  });
});

describe('getTail', () => {
  it('returns the last value', () => {
    const list1 = new LinkedList(13);
    expect(getTail(list1)).toEqual(13);
    list1.next = new LinkedList(9);
    expect(getTail(list1)).toEqual(9);

    const list2 = new LinkedList<unknown>(null, '', false);
    expect(getTail(list2)).toBeFalsy();
  });

  it('does not modify list', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    getTail(list);
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });
});

describe('includes', () => {
  it('returns true when list contains value', () => {
    const list1 = new LinkedList(42);
    expect(includes(list1, 42)).toBeTruthy();

    const list2 = new LinkedList('billy', 'mandy', 'grim', 'irwin');
    expect(includes(list2, 'billy')).toBeTruthy();
    expect(includes(list2, 'mandy')).toBeTruthy();
    expect(includes(list2, 'grim')).toBeTruthy();
    expect(includes(list2, 'irwin')).toBeTruthy();
  });

  it('does not modify list when found', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    includes(list, 'back');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });

  it('returns false when list does not contain value', () => {
    const list = new LinkedList<unknown>(true, '99', 1e7, 'steve');
    expect(includes(list, 99)).toBeFalsy();
  });

  it('does not modify list when not found', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    includes(list, 'jetpack');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "neck" <- "back" <- "tail" }'
    );
  });
});
