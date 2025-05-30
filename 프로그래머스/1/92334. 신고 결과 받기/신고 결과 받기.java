import java.util.*;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
        int[] answer = new int[id_list.length];
        
        Set<String> reportSet = new HashSet<>(Arrays.asList(report));
        
        Map<String, Integer> reportCount = new HashMap<>();
        Map<String, List<String>> iReportWho = new HashMap<>();
        
        for (String s : reportSet) {
            String[] part = s.split(" ");
            String from = part[0];
            String to = part[1];
            
            reportCount.put(to, reportCount.getOrDefault(to, 0) + 1);
            if (!iReportWho.containsKey(from)) {
                iReportWho.put(from, new ArrayList<>());
            }
            iReportWho.get(from).add(to);
        }
        
        for (int i = 0; i < id_list.length; i++) {
            String reporter = id_list[i];
            for (String reportee : iReportWho.getOrDefault(reporter, new ArrayList<>())) {
                if (reportCount.get(reportee) >= k) {
                    answer[i] += 1;
                }
            }
        }
        
        return answer;
    }
}