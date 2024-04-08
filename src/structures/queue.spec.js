import { Queue } from './queue'; 

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('push method adds an element to the queue', () => {
    queue.push(1);
    expect(queue.elements).toEqual([1]);
  });

  it('shift method removes and returns the first element of the queue', () => {
    queue.push(1);
    queue.push(2);
    const shiftedElement = queue.shift();
    expect(shiftedElement).toBe(1);
    expect(queue.elements).toEqual([2]);
  });

  it('shift method on an empty queue returns undefined', () => {
    const shiftedElement = queue.shift();
    expect(shiftedElement).toBeUndefined();
    expect(queue.elements).toEqual([]);
  });
});
