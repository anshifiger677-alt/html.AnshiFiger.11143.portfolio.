
def centered_star_diamond(n):
    for i in range(1,n+1):
        spaces=n-i
        print(' '* spaces +'*'* i)
         
        
    for i in range(n-1,0,-1):
        spaces=n-1
        print(' '* spaces + '*'*i)

    centered_star_diamond(5)