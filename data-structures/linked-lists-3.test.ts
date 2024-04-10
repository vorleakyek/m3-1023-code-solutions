import { LinkedList } from './lib/linked-list';
import {
  insertNext,
  removeNext,
  removeTail,
  swapFront,
  updateNext,
} from './linked-lists-3';

describe('removeTail', () => {
  it('does nothing when one node', () => {
    const list = new LinkedList('Lone train engine');
    removeTail(list);
    expect(list.print()).toEqual('LinkedList { "Lone train engine" }');
  });

  it('removes the last node from `list`', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    removeTail(list);
    expect(list.print()).toEqual('LinkedList { "head" <- "neck" <- "back" }');
  });
});

describe('updateNext', () => {
  it('does not modify list', () => {
    const list = new LinkedList('Han Solo');
    updateNext(list, 'Chewie');
    expect(list.print()).toEqual('LinkedList { "Han Solo" }');
  });

  it('sets the 2nd value ', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    updateNext(list, 'selfie stick');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "selfie stick" <- "back" <- "tail" }'
    );
  });
});

describe('insertNext', () => {
  it('inserts after the head', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    insertNext(list, 'strobe light');
    expect(list.print()).toEqual(
      'LinkedList { "head" <- "strobe light" <- "neck" <- "back" <- "tail" }'
    );
  });
});

describe('removeNext', () => {
  it('does not modify list', () => {
    const list = new LinkedList('so low');
    removeNext(list);
    expect(list.print()).toEqual('LinkedList { "so low" }');
  });

  it('removes the 2nd value', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    removeNext(list);
    expect(list.print()).toEqual('LinkedList { "head" <- "back" <- "tail" }');
  });
});

describe('swapFront', () => {
  it('returns list when one value', () => {
    const list = new LinkedList('Bruce');
    const newList = swapFront(list);
    expect(newList).toEqual(list);
  });

  it('does not modify list', () => {
    const list = new LinkedList('All Mighty Then');
    swapFront(list);
    expect(list.print()).toEqual('LinkedList { "All Mighty Then" }');
  });

  it('swaps the first and second nodes and returns the new first node', () => {
    const list = new LinkedList('head', 'neck', 'back', 'tail');
    const swapped = swapFront(list);
    expect(swapped?.print()).toEqual(
      'LinkedList { "neck" <- "head" <- "back" <- "tail" }'
    );
  });
});
