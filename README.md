
# HomeCook - Frontend Dev Challenge (React)

<p>
  <p>
    Thank you for your interest in HomeCook! For this task, please use ReactJS to create a page that displays a list of kitchens and performs basic CRUD operations using the provided API endpoints. Your work should demonstrate component reusability, context management & API handling.
  </p>

  <p>
    Please add your code to Github (or similar) and send the repo link via email to hassan@homecookapp.com
  </p>

## Specification
Your frontend solution must be able to achieve the following:
- [ ] When a user clicks on the **Info** icon, it should display more information about that kitchen
- [ ] When a user clicks on the **Edit** icon, it should allow update to information about that kitchen
- [ ] When a user clicks on the **Add New Kitchen** button, it should allow user to add a new kitchen to the list
- [ ] When a user types in a kitchen *id* in the search box, the list only shows the kitchen whose *id* is typed in
- [ ] When a user clicks on the **Delete** icon, it should display a deletion warning and remove kitchen

### Additional Requirements (Bonus)
- [ ] Sort kitchens by *name*, *id* and/or *status*
- [ ] Allow **select all** to delete all kitchens at once
- [ ] Use react router to navigate to a different view
- [ ] Make web app mobile-responsive
- [ ] Describe any future possible improvements you would implement


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
3. In the project root directory (i.e. */homecook-dev-challenge*) of the repo, install NPM packages
```sh
npm install
```
4. Then, you can run:
```sh
npm start
```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## API Endpoints
The following **5** endpoints have been created for this exercise. The values for **`api_id`** and **`api_stage`** would be provided accordingly.
([CRUD API handling](src/api/crud.js))

1. Fetch all kitchens (**`GET`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/fetch`

2. Fetch kitchen by id (**`GET`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/fetch/{id}`

3. Add new kitchen (**`POST`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/create`

	**Request Body Schema**
	{
	    **name**: *string*,
	    **status**: *string*,
	    **location**: *string*,
	    **cost**: *string*
	}

4. Update existing kitchen (**`PUT`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/update/{id}`

	**Request Body Schema**
    {
	    **name**: *string*,
	    **status**: *string*,
	    **location**: *string*,
	    **cost**: *string*
	}

5. Delete existing kitchen (**`DELETE`**)
	> `https://{api_id}.execute-api.us-east-1.amazonaws.com/{api_stage}/remove/{id}`



#### Test GET Request to fetch list of all kitchens: [https://7aqlss9ih7.execute-api.us-east-1.amazonaws.com/dev/fetch](https://7aqlss9ih7.execute-api.us-east-1.amazonaws.com/dev/fetch)


### Sample Screenshots
1. **Fetch All Kitchens**
   ![Product Screen Shot - original][product-screenshot-original]

2. **Add New Kitchen**
   ![Product Screen Shot - Add New Kitchen][product-screenshot-add-kitchen]

3. **View Kitchen Details**
   ![Product Screen Shot - Kitchen Details][product-screenshot-kitchen-details]

4. **Delete Kitchen**
   ![Product Screen Shot - Delete Kitchen][product-screenshot-delete-kitchen]


### Helpful tips & notes
1. Adapt your approach to Brad Frost's Atomic Design (https://atomicdesign.bradfrost.com/chapter-2/)
2. Take advantage of Material UI components & Icons (https://mui.com/components/)
3. An utils module for ([Kitchen Statuses](src/utils/enums.js)) has been provided
4. A Postman collection ([json file](homecook_crud_postman.json)) has been included (to help with testing APIs independently)
4. Feel free to reach out if you have any question or need better clarity


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
