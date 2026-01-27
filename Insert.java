public class Insert {
    public static void main(String[] args) {
        int [] arr= new int[5];
        arr[0]=50;
        arr[1]=55;
        arr[2]=60;

        int size =3;
        int element = 40;
        arr[size] = element;
        size++;
        for (int i =0;i<size;i++){
            System.out.println(arr[i]);
        }

    }
}
