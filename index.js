// Ngambil form element
const formElement = document.querySelector('.form-todo')

// nambahin form event listener
formElement.addEventListener('submit' , (event) => {
    event.preventDefault();

    //Ngambil input elemen di html
    const inputElement = document.querySelector('.input-todo') // Untuk ngambil class dari input
    console.log(inputElement.value) // .value fungsinya biar setelah ngetik valuenya dan klik add, valuenya muncul di console. Ini bagus buat testing biar ga make halaman webnya buat ngetest outputnya karena cuman make console.

    // Mengambil elemen wrapper-todo sebagai entry point (Simplenya adalah, ngambil <ul> sebagai target buat masukin <li> kesana). 
    const wrapperTodoElement = document.querySelector('.wrapper-todo')


    // Setelah ngetik value-nya dan klik add, skrng bikin biar htmlnya bikin elemen <li>
    const todoItem = document.createElement('li') //untuk bikin elemen <li>
    todoItem.innerHTML = inputElement.value //simpen value dari inputElemen ke todoItem
    //const todoItem = `<li class="todo-item">${inputElement.value}</li>`;

    // Menambahkan todo items (valuenya) ke dalam entry point (ul)
    //wrapperTodoElement.innerHTML = todoItem
    wrapperTodoElement.append(todoItem)

    // Ngosongin input box setelah lakuin submit
    inputElement.value = ''; //
})