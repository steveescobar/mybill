async function generateAdminPasscode() {
    let adminPasscode = '';

    for (let i = 0; i < 5; i++) {
        const randomDigit = Math.floor(Math.random() * 10); 
        adminPasscode += randomDigit;
    }

    return adminPasscode;
}

export default generateAdminPasscode;
