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

int findMaxSetBit(int num)
{
    if (num == 0)
    {
        // Special case when the number is 0
        return -1; // There is no set bit in this case
    }

    int position = 0;

    // Loop to find the leftmost set bit
    while (num > 0)
    {
        num = num >> 1; // Right shift to check the next bit
        position++;
    }

    return position - 1; // Adjusting for 0-based indexing
}
int findMSB(int num)
{
    if (num == 0)
    {
        // Special case when the number is 0
        return -1; // There is no set bit in this case
    }

    int position = 0;

    // Loop to find the leftmost set bit
    while (num > 0)
    {
        num = num >> 1; // Right shift to check the next bit
        position++;
    }

    return position - 1; // Adjusting for 0-based indexing
}
void solve()
{
    int n;
    cin >> n;

    vi v(v);
    inputArr(v);

    vi lMul(n);
    vi rMul(n);
    lMul[0] = v[0];
    rMul[n - 1] = v[n - 1];

    for (int i = 1; i < n; i++)
    {
        lMul[i] = lMul[i + 1] * v[i + 1];
    }

    for (int i = n - 2; i >= 0; i--)
    {
        rMul[i] = rMul[i + 1] * v[i + 1];
    }
    int k = -1;
    for (int i = 0; i < n; i++)
    {
        if (lMul[i] == rMul[i])
            k = i + 1;
    }
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