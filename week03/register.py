#1
print("=================================")
print("회원가입")
print("=================================")

while True:
    print("회원가입을 진행하시겠습니까?")
    print("y: 진행         n: 취소")
    answer=input(">> ")
    answer=answer.lower()   #문자를 소문자로 변환하는 함수 lower(), upper()은 문자를 대문자로 변환하는 함수
    if answer =='y':
        print("=================================")
        print("회원가입이 진행됩니다.")
        print("=================================")
        break
    elif answer=='n':
        print("=================================")
        print("회원가입이 취소됩니다.")
        print("=================================")
        exit()

    else:
        print("'y'또는 'n'을 입력해주세요. ")
        #2
users=[]        #회원 정보를 저장할 리스트 생성

while True:
    user={}     #한 사람의 정보를 딕셔너리 정보로 저장하기 위해 생성 

    #아이디 입력
    username=input('ID: ')

    #비밀번호 입력
    while True:
        pwd=input('비밀번호: ')
        pwd2=input('비밀번호 확인: ')
        if pwd==pwd2:
            break
        else:
            print("비밀번호가 일치하지 않습니다.")

    #이름 입력
    name=input('이름: ')

    #생일 입력
    while True:
        birth=input("생년월일(6자리): ")
        if len(birth)==6:
            break
        else:
            print("생년월일은 여섯 자리로 입력해주세요.")
        
    #이메일 입력
    email=input('이메일: ')



#3
    user['username']=username
    user['password']=pwd
    user['name']=name
    user['birth']=birth
    user['email']=email

    users.append(user)
    # print(user)           #딕셔너리를 출력하는 함수 
    print(users)            #딕셔너리 리스트를 출력하는 함수

    print("=================================")
    print(user['name'], '님, 가입을 환영합니다!')
    print("=================================")
    print("회원가입을 추가로 진행하시겠습니끼?")
    print("y: 진행         n: 취소")
    answer=input('>> ')
    answer=answer.lower()

    if answer=='y':
        pass
    elif answer=='n':
        exit()
    else:
        exit()
