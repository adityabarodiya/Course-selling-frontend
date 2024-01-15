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
    // cin >> n;
}

bool allDigitsEven(long long n)
{
    /* Checks if all digits in a long long integer are even. */

    if (n == 0)
    {
        return true; // Handle zero case
    }

    while (n > 0)
    {
        int digit = n % 10;
        if (digit % 2 != 0)
        { // If any digit is odd, return false
            return false;
        }
        n /= 10; // Remove the last digit
    }

    return true; // If all digits are even, return true
}

int32_t main()
{
    // for fast input and output
    ios_base::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    int t;
    cin >> t;
    for(int i = 0; i <= t; ++i){
        for (int j = i; j < t+1; j++)
        {
            for (int k = 0; k < t+1; k++)
            {
                if((i + j + k) == t){
                    print(i);print(j);print(k);
                    cout<<endl;
                }
            }
            
        }
        
    }

    return 0;
}