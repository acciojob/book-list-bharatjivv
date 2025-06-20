//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
            const bookForm = document.getElementById('book-form');
            const bookList = document.getElementById('book-list');
            const errorMessage = document.getElementById('error-message');
            
            // Handle form submission
            bookForm.addEventListener('submit', function(e) {
                e.preventDefault();
                errorMessage.textContent = '';
                
                // Get input values
                const title = document.getElementById('title').value.trim();
                const author = document.getElementById('author').value.trim();
                const isbn = document.getElementById('isbn').value.trim();
                
                // Validate inputs
                if (!title || !author || !isbn) {
                    errorMessage.textContent = 'Please fill in all fields';
                    return;
                }
                
                // Validate ISBN format (basic check for 10 or 13 digits)
                if (!/^(?:\d{10}|\d{13})$/.test(isbn)) {
                    errorMessage.textContent = 'ISBN must be 10 or 13 digits';
                    return;
                }
                
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
                
                // Add event listener to the new delete button
                row.querySelector('.delete').addEventListener('click', function() {
                    row.remove();
                });
            });
            
            // Event delegation for delete buttons
            bookList.addEventListener('click', function(e) {
                if (e.target.classList.contains('delete')) {
                    e.target.closest('tr').remove();
                }
            });
        });