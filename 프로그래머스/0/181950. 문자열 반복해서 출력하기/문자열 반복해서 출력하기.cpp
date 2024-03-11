#include <iostream>
#include <string>

using namespace std;

int main(void) {
    string str;
    int n;
    cin >> str >> n;
    
    int i = 0;
    while (i < n) {
        cout << str;
        i++;
    }
    return 0;
}