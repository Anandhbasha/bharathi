class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQuickSort {

    static Node getTail(Node head) {
        while (head != null && head.next != null)
            head = head.next;
        return head;
    }

    static Node partition(Node head, Node end, Node[] newHead, Node[] newEnd) {

        Node pivot = end;
        Node prev = null, cur = head, tail = pivot;

        while (cur != pivot) {
            if (cur.data < pivot.data) {
                if (newHead[0] == null)
                    newHead[0] = cur;
                prev = cur;
                cur = cur.next;
            } else {
                if (prev != null)
                    prev.next = cur.next;

                Node temp = cur.next;
                cur.next = null;
                tail.next = cur;
                tail = cur;
                cur = temp;
            }
        }

        if (newHead[0] == null)
            newHead[0] = pivot;

        newEnd[0] = tail;
        return pivot;
    }

    static Node quickSortRecur(Node head, Node end) {

        if (head == null || head == end)
            return head;

        Node[] newHead = new Node[1];
        Node[] newEnd = new Node[1];

        Node pivot = partition(head, end, newHead, newEnd);

        if (newHead[0] != pivot) {
            Node temp = newHead[0];
            while (temp.next != pivot)
                temp = temp.next;
            temp.next = null;

            newHead[0] = quickSortRecur(newHead[0], temp);

            temp = getTail(newHead[0]);
            temp.next = pivot;
        }

        pivot.next = quickSortRecur(pivot.next, newEnd[0]);

        return newHead[0];
    }

    static Node quickSort(Node head) {
        Node end = getTail(head);
        return quickSortRecur(head, end);
    }

    static void printList(Node head) {
        while (head != null) {
            System.out.print(head.data + " ");
            head = head.next;
        }
    }

    public static void main(String[] args) {
        Node head = new Node(4);
        head.next = new Node(2);
        head.next.next = new Node(1);
        head.next.next.next = new Node(3);

        head = quickSort(head);
        printList(head);
    }
}
