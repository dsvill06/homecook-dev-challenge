# HomeCook - Technical Challenge (React)

<p>
  <p>
    Thank you for your interest in HomeCook! For this task, please implement a combination of React components (demonstrating component reusability, context management & API handling) to create a page with a list of kitchens using the provided API endpoints.
  </p>

  <p>
    Please host your code on Github (or something similar) and share the repo link via email to hassan@homecookapp.com. Good luck!
  </p>

## Specification
Add frontend features to achieve the following:
- [ ] When a user clicks on the **Add New Kitchen** button, display a view / form to add new kitchen to the list
- [ ] When a user clicks on the **Info** icon, it should expand with more details about that kitchen
- [ ] When a user types in a kitchen *id* in the search box, the list updates to displays the kitchen with that *id*
- [ ] When a user clicks on the **Edit** icon, it should display a view / form to update details for that kitchen
- [ ] When a user clicks on the **Delete** icon, it should display a deletion warning (or modal), and then delete kitchen

### Additional Requirements (Bonus)
- [ ] Sort kitchens by *name*, *id* and/or *status*
- [ ] Allow **select all** to delete all kitchens at once
- [ ] Make web app mobile-responsive


## Getting Started
To install and run:

1. Clone the repo
```sh
git clone https://github.com/hassanbadru/homecook-dev-challenge.git
```
2. Go to homecook-dev-challenge folder
```sh
cd homecook-dev-challenge
```
3. In the project root directory (i.e. /homecook-dev-challenge) of the repo, install NPM packages
```sh
npm install
```
4. Then, you can run:
```sh
npm start
```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## API Endpoints
The following 5 endpoints have been created for this exercise. The values for **`api_id`** and **`api_stage`** would be provided accordingly.
**`api_id`**: `7aqlss9ih7`
**`api_stage`**: `dev`

([CRUD API handling](src/api/crud.js))

1. Fetch all kitchens (**`GET`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/fetch`
	**i.e.**  `https://7aqlss9ih7.execute-api.us-east-1.amazonaws.com/dev/fetch`

2. Fetch kitchen by id (**`GET`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/fetch/{id}`

3. Add new kitchen (**`POST`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/create`

	**Request Body Schema**
	{
	    **name**: *string*,
	    **status**: *string*,
	    **location**: *string*,
	    **cost**: *float*
	}

4. Update existing kitchen (**`PUT`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/update/{id}`

	**Request Body Schema**
    {
	    **name**: *string*,
	    **status**: *string*,
	    **location**: *string*,
	    **cost**: *float*
	}

5. Delete existing kitchen (**`DELETE`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/remove/{id}`



### Sample Screenshots
1. **Fetch All Kitchens**
   ![Product Screen Shot - original][product-screenshot-original]

2. **Add New Kitchen**
   ![Product Screen Shot - Add New Kitchen][product-screenshot-add-kitchen]

3. **View Kitchen Details**
   ![Product Screen Shot - Kitchen Details][product-screenshot-kitchen-details]

4. **Delete Kitchen**
   ![Product Screen Shot - Delete Kitchen][product-screenshot-delete-kitchen]


### Notes
1. Adapted Brad Frost's Atomic Design approach (https://atomicdesign.bradfrost.com/chapter-2/)
2. Took advantage of Material UI components & Icons
3. An utils module for ([Kitchen Statuses](src/utils/enums.js)) has been provided


<!-- CONTACT -->
## Contact
Hassan Badru - hassan@homecookapp.com
<br />
Tayana Harrison - tayana@homecookapp.com
<br />


<!-- MARKDOWN LINKS & IMAGES -->
[product-screenshot-original]: public/original.png
[product-screenshot-add-kitchen]: public/add_new_kitchen.png
[product-screenshot-kitchen-details]: public/kitchen_details.png
[product-screenshot-delete-kitchen]: public/kitchen_deletion.png
