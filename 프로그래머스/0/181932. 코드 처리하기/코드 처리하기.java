class Solution {
    public String solution(String code) {
        String ret = "";
        String[] arr_code = code.split("");
        boolean mode = false;
        
        for (int idx = 0; idx < arr_code.length; idx++) {
            if (!mode) {
                if (!(arr_code[idx].equals("1"))) {
                    if (idx % 2 == 0)
                        ret += arr_code[idx];
                } else {
                    mode = true;
                }
            } else {
                if (!(arr_code[idx].equals("1"))) {
                    if (idx % 2 == 1)
                        ret += arr_code[idx];
                } else {
                    mode = false;
                }
            }
        }
        
        if (ret.equals(""))
            ret = "EMPTY";
            
        return ret;
    }
}