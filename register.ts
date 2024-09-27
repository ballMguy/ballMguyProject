import mailChecker from 'mailchecker'
const database = [
    { email: 'nan@utk.ac.th', password: 'il&vey&*3!!!'},
    { email: 'max@utk.ac.th', password: '*tkandme&!1'}
]
// เปลี่ยน u = *
// เปลี่ยน o = &
// เปลี่ยน 0 ช !
function decryptionPassword(password: string) {
    return password.replaceAll('*', 'u').replaceAll('&','o').replaceAll('!','0')
}
function register(email: string, password: string) {
    if (!mailChecker.isValid(email)) {
        console.log('Email ไม่ถูกต้อง')
        return

    }

    const user = database.filter(function (element, index) {
        return element.email.includes(email)
    })
    if (user.length > 0) {
        console.log('พบอีเมล์นี้ในระบบ โปรดตรวจสอบ')
        return
    }
    if (!(password.length > 8 && password.length < 16)) {
        console.log('รหัสผ่านต้องยาวกว่า 8 ตัวอักษร และไมาเกิน 16 ตัวอีกษร')
        return
    }
    const userObject = {
        email: email,
        password: password
    }
    database.push(userObject)
    console.log('สมัครสมาชิกเรียบร้อย')
    console.log(database)
}

// register('nan@utk.ac.th', 'nan1234567')

function login(email: string, password: string) {
    if (mailChecker.isValid(email)) {
        const user = database.filter(function (element, index) {
            return element.email.includes(email)
        })

        if (user.length > 0) {
            if (decryptionPassword(user[0].password) === password) {
                console.log('เข้าสู่ระบบแล้ว ยินดีต้อนรับ')
            } else {
                console.log('รหัสผ่านไม่ถูกต้อง')
            }

        } else {
            console.log('ไม่พบอีเมล์นี้ในระบบ โปรดตรวจสอบ')
        }
    } else {
        console.log('กรอก email ผิดรูปแบบ')
    }
}
login('nan@utk.ac.th', 'iloveyou3000')