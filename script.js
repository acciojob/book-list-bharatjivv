document.addEventListener('DOMContentLoaded', function() {
    const bookForm = document.getElementById('book-form');
    const bookList = document.getElementById('book-list');
    
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get input values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        
        // Create new row
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">Delete</button></td>
        `;
        
        // Add to table
        bookList.appendChild(row);
        
        // Clear form
        bookForm.reset();
    });
    
    // Event delegation for delete buttons
    bookList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete')) {
            e.target.closest('tr').remove();
        }
    });
});