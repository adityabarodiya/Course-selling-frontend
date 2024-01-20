#include <bits/stdc++.h>
using namespace std;

int main() {
    string s;
    cin >> s;
    bool flag = true;
    for (size_t i = 1; i < s .size(); i++) {
        if (s[i] != s[i - 1] && s[i] - 1 != s[i - 1]) {
            flag = false;
            break;
        }
    }
    if (flag) {
        cout << "Yes";
    } else {
        cout << "No";
    }
    cout << endl;
    return 0;
}
