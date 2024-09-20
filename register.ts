import mailChecker from 'mailchecker'
const database: any[] = []

function register(email: string, password: string) {
    if (mailChecker.isValid(email)) {
        if (password.length > 8 && password.length < 16) {
            const userObject = {
                email: email,
                password: password
            }
            database.push(userObject)
            console.log('สมัครสมาชิกเรียบร้อย')
        } else {
            console.log('รหัสผ่านต้องยาวกว่า 8 ตัวอักษร และไม่เกิน 16 ตัวอักษร')
        }
    } else {
        console.log('Email ไม่ถูกต้อง')
    }
}

register('nan@utk.ac.th', 'nan1234567')