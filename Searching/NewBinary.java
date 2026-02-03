public class NewBinary {
    public static void main(String[] args) {
        int arr [] = {10,20,30,40,50};
        boolean found = false;
        int key = 30;
        for (int i=0;i<arr.length/2;i++){
            if(arr[i]==key){
                System.out.println("Founded index:"+i);
                found=true;
            }            
        }
        for(int j=arr.length/2;j<arr.length;j++){
                if(arr[j]==key){
                System.out.println("Founded index:"+j);
                found=true;}
            }
        if(!found){
            System.out.println("not Founded index");
        }
    }
}
