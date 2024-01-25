#include <bits/stdc++.h>
using namespace std;

#define int long long int

#define vi vector<int>

#define println(a) cout << a << endl;
#define print(a) cout << a << " ";
#define yes cout << "YES\n";
#define no cout << "NO\n";

#define pb push_back
#define printArr(a)       \
    for (auto x : a)      \
        cout << x << " "; \
    cout << endl

#define all(x) x.begin(), x.end()

/*
    Start Solving from here ---------------------------------------------------------------------
*/

void inputArr(vi &v)
{
    for (int i = 0; i < v.size(); i++)
    {
        int ele;
        cin >> ele;

        v[i] = ele;
    }
}

vector<int> calculatePrefixMultiply(const vector<int> &arr)
{
    int n = arr.size();
    vector<int> prefixMultiply(n, 1);

    for (int i = 1; i < n; i++)
    {
        prefixMultiply[i] = prefixMultiply[i - 1] * arr[i - 1];
    }

    return prefixMultiply;
}

vector<int> calculateSuffixMultiply(const vector<int> &arr)
{
    int n = arr.size();
    vector<int> suffixMultiply(n, 1);

    for (int i = n - 2; i >= 0; i--)
    {
        suffixMultiply[i] = suffixMultiply[i + 1] * arr[i + 1];
    }

    return suffixMultiply;
}
void solve()
{
    int n;
    cin >> n;

    vi v(n);
    inputArr(v);

    vector<int> prefixMultiply = calculatePrefixMultiply(v);
    vector<int> suffixMultiply = calculateSuffixMultiply(v);

    int k = -1;
    for (int i = 0; i < n; i++)
    {
        if (prefixMultiply[i] == suffixMultiply[i]){
            k = i;    
            break;
        }
         
    }
    println(k);
}

int32_t main()
{
    // for fast input and output
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int t;
    cin >> t;
    while (t--)
        solve();

    return 0;
}