#include<bits/stdc++.h>
using namespace std;
int solve(int ind,vector<int>&v,int k){
    int n = v.size();
   if(ind==n-1){
    if(v[ind]%k==0){
        return v[ind]/k;
    }
    return 0;
   }
    int t = 0;
    if(k>=v[ind]){
        t = solve(ind,v,k-v[ind]);
    }
    return t+solve(ind+1,v,k);
}
int main(){
    int t;
    cin>>t;
    while(t--){
        int n,k,x;
        cin>>n>>k>>x;
        vector<int> v;
        for(int i=1;i<=k;i++){
            if(i!=x){
                v.push_back(i);
            }
        }
        cout<<solve(0,v,k)<<endl;
    }
    return 0;
}