## Feature in course registration
 - Responsive Design: Application is response, it works both in desktop and mobile.

- Course Selection: User can select any course according to his requirements.

- Cart Functionality: User can add courses in the cart and update it. 

- Alert Message: User get all types of alert message when needed.



## Managing State in course registration

To manage state in this application, I follow a structured approach:

1. **Initialize State**: I start by creating a courses state variable using the useState hook, which begins as an empty array. This state will hold my course data.

```javascript
const [courses, setCourses] = useState([]);
```

2. **Fetch and Update Data**: To populate the courses state, I utilize the useEffect hook. Within this hook, I fetch data and update the courses state using the setCourses function.

```javascript
useEffect(() => {
  fetch('courses.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
}, []);
```

3. **Rendering Courses**: Once I have the course data, I map through the courses array and pass each course as a prop to a Course component. Inside the Course component, I destructure the props and use dynamic data to render the content for each course card.

```javascript
{courses.map((course) => (
  <Course key={course.id} {...course} />
))}
```


4. **State Sharing**: Now, I need to display the selected course's title in the Cart component when a course is selected. When a selection occurs in the Course component, it triggers an action in the Cart component. To achieve this, I manage state at a higher level, specifically in the App component.

In the App component, I maintain four state variables:

```javascript
const [selectedCourse, setSelectedCourse] = useState([]);
const [courseCredit, setCourseCredit] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const [remaining, setRemaining] = useState(20);
```

- `selectedCourse`: This state holds the selected course data, allowing me to pass it to the Cart component.
- `courseCredit`: I use this state to store the total credit of selected courses and pass it to the Carts component.
- `totalPrice`: The `totalPrice` state stores the total price of the selected courses and is also passed to the Carts component.
- `remaining`: To calculate the remaining credits a user has, I utilize the remaining state.


