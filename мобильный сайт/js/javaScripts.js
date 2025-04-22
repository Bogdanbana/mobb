function phonenumber() {
    const phone = document.getElementById('inputtxt').value;
    if (phone.trim() !== '')
    {
        const isValidNumber = /^\d+$/.test(phone);

        if (!isValidNumber) {
            alert('Ошибка: номер должен соответсвовать требованиям.');
            return;
        }

        if(phone.trim() === '900')
        {
            window.open("TextMAnadger.html", '_self');
        }
        else
        {
            window.open("HomeOage.html", '_self');
        }
    }
    else
    {
        alert('Пожалуйста, заполните поле с номером.');
    }
}