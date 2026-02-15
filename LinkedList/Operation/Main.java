class Node {
    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {

    Node head;

    // 1. Insert at End
    void insert(int data) {
        Node newNode = new Node(data); //40

        if (head == null) {
            head = newNode; //40
            return;
        }

        Node temp = head; //40

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newNode;
    }

    // 2. Display
    void display() {

        Node temp = head;

        while (temp != null) {
            System.out.print(temp.data + " -> ");
            temp = temp.next;
        }

        System.out.println("NULL");
    }

    // 3. Search
    void search(int key) {

        Node temp = head; //40
        int pos = 1;

        while (temp != null) {

            if (temp.data == key) {
                System.out.println("Found at position: " + pos);
                return;
            }

            temp = temp.next;
            pos++;
        }

        System.out.println("Not Found");
    }

    // 4. Delete
    void delete(int key) {

        if (head == null) {
            System.out.println("List Empty");
            return;
        }

        // First node delete
        if (head.data == key) {
            head = head.next;
            return;
        }

        Node temp = head;

        while (temp.next != null) {

            if (temp.next.data == key) {
                temp.next = temp.next.next;
                return;
            }

            temp = temp.next;
        }

        System.out.println("Element Not Found");
    }

    // 5. Reverse
    void reverse() {

        Node prev = null;
        Node curr = head;
        Node next = null;

        while (curr != null) {
            // {50,40,60,80,70}
            next = curr.next; // 40
            curr.next = prev;  //null

            prev = curr; //50
            curr = next; //40 
        }

        head = prev;
    }

    // 6. Sort (Bubble Sort)
    void sort() {

        if (head == null)
            return;

        Node i, j;
        int temp;

        for (i = head; i.next != null; i = i.next) {

            for (j = head; j.next != null; j = j.next) {

                if (j.data > j.next.data) {

                    temp = j.data;  //40
                    j.data = j.next.data;  //10
                    j.next.data = temp; //40
                }
            }
        }
    }
}

public class Main {

    public static void main(String[] args) {

        LinkedList list = new LinkedList();

        list.insert(40);
        list.insert(10);
        list.insert(30);
        list.insert(20);
//40 10 30 20
        System.out.println("Initial List:");
        list.display();

        list.search(30);

        list.delete(10);
        System.out.println("After Deletion:");
        list.display();

        list.reverse();
        System.out.println("After Reverse:");
        list.display();

        list.sort();
        System.out.println("After Sort:");
        list.display();
    }
}