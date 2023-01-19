# Simple Asset Management System
(Follow the backend steps first, not all of the APIs are implemented yet)

How to run the app :
- Run 'npm install'.
- Run 'ng serve'.
- Open `http://localhost:4200/` in a browser.

How to use the app :
- Super Admin can create stores, companies, providers, and employees. Which then can be used to create Assets.
- Non Admin can check out multiple assets, and then check in half or all of the returned assets.

About the Simple Asset Management System app :
- This is an app for managing and tracking a company's assets.
- The assets has their own 'types' and 'statuses' that might change on each transaction. 
- The assets can be assigned to a place, employee (which must be registered first), and to a general type asset (must be assigned with a component type asset. ex: a RAM (component) can be assigned to a Laptop (general)). 
- An asset might have an expired date and a check out might have a specified return date. 
- An email would be sent (to the new user) when you create an account or (to the super admin) when you create an asset. 
