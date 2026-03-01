public class OtherOperationsLL {

    static class Node {
        int data;
        Node next;
        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    Node head;

    void insert(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
            return;
        }
        Node temp = head;
        while (temp.next != null)
            temp = temp.next;
        temp.next = newNode;
    }

    int length() {
        int count = 0;
        Node temp = head;
        while (temp != null) {
            count++;
            temp = temp.next;
        }
        return count;
    }

    void findMiddle() {
        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        System.out.println("Middle: " + slow.data);
    }

    boolean detectLoop() {
        Node slow = head;
        Node fast = head;

        while (fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow == fast)
                return true;
        }
        return false;
    }

    void removeDuplicates() {
        Node temp = head;
        while (temp != null && temp.next != null) {
            if (temp.data == temp.next.data)
                temp.next = temp.next.next;
            else
                temp = temp.next;
        }
    }

    void display() {
        Node temp = head;
        while (temp != null) {
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
        System.out.println();
    }

    public static void main(String[] args) {
        OtherOperationsLL list = new OtherOperationsLL();

        list.insert(1);
        list.insert(2);
        list.insert(2);
        list.insert(3);
        list.insert(4);

        list.display();

        System.out.println("Length: " + list.length());

        list.findMiddle();

        System.out.println("Loop detected: " + list.detectLoop());

        list.removeDuplicates();
        list.display();
    }
}