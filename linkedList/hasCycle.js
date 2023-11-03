var hasCycle = function (head) {
    if (head === null) {
        return false;
    }
    let curr = head;
    const hashSet = new Set();
    while (curr.next != null) {
        if (hashSet.has(curr)) {
            return true;
        } else {
            hashSet.add(curr);
        }
        curr = curr.next;
    }

    return false;
};
