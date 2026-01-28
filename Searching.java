public class Searching {
    public static void main(String[] args) {
        int [] arr = {5,10,15,20};

        int key = 15;
        
        for (int i =0;i<arr.length;i++){
            if(key==arr[i]){
                System.out.println(true);
                break;
            }
            else{
                continue;
            }
        }
    }
}