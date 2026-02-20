class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListMergeSort {

    // Merge two sorted lists
    static Node merge(Node a, Node b) { //4,2 {2}{1}
        if (a == null) return b; 
        if (b == null) return a;

        if (a.data <= b.data) {
            a.next = merge(a.next, b); //
            return a;
        } else {
            b.next = merge(a, b.next);
            return b;
        }
    }

    // Find middle of list
    static Node getMiddle(Node head) {
        if (head == null) return head;

        Node slow = head; //4
        Node fast = head.next;//2

        while (fast != null && fast.next != null) {
            slow = slow.next; //2 
            fast = fast.next.next;//3 
        }
        return slow;
    }

    // Merge Sort function
    static Node mergeSort(Node head) {
        if (head == null || head.next == null)
            return head;

        Node middle = getMiddle(head); //2
        Node nextOfMiddle = middle.next; //1
        middle.next = null; //null   {4,2}{1,3}

        Node left = mergeSort(head); //4
        Node right = mergeSort(nextOfMiddle); //1

        return merge(left, right);
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
//4213 ->4
        head = mergeSort(head);
        printList(head);
    }
}
