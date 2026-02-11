class Node{
    int data;
    Node next;

    Node(int data){
        this.data = data;
        this.next = null;
    }
}

public class LinkedList{
    Node head;


void display(){
    Node temp = head;
    while (temp!=null) {
        System.out.println(temp.data+"");
        temp = temp.next;
    }
    System.out.println();

}
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.head = new Node(10);
        list.head.next = new Node(20);
        list.head.next.next = new Node(30);
        list.display();
    }
}