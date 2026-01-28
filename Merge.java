public class Merge {
    public static void main(String[] args) {
        int [] a ={10,20};
        int [] b ={20,40};
        int [] c = new int[a.length+b.length];

        int k=0;
        for (int i=0;i<a.length;i++){
            c[k++] = a[i];
            
        }
        for (int i=0;i<b.length;i++){
            c[k++] = b[i];
        }
        for(int x:c){
            System.out.println(x);
        }
    }
}
