/*
    Author - Aditya Barodiya
*/

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

void solve()
{
    int n;
    cin >> n;
    int m;
    cin>>m;
    string s;
    cin>>s;
    // vi arr(n);

    // inputArr(arr);

    // int one = 0, two = 0;
    // int xr = 0;
    // int e = arr[0];
    // int f = 1;

    // for (int i : arr)
    // {
    //     if (e != i)
    //         f = 0;

    //     if (i == 1)
    //         one++;
    //     else
    //         two++;
    // }

    // if (f)
    // {
    //     println(1);
    //     return;
    // }

    // if (one > two)
    // {
    //     println(-1);
    //     return;
    // }

    // println(two - one);
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