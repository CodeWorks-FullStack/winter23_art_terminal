# Bug List

Cars Page
1. Changed to :car="c" to :cars="c" to show off the error you will get when you are not passing your props correctly and when you have a bad naming convention
2. Took out my getCars() in my onMounted to show if you write it has a private function you have to call that function in your onMounted

Router File
1. Changed the path on the cars details page to :carId from :id to show the error and to emphasize what is named in the router has to match goTo on the carCard function

CarCard File
1. Took out props.car.id and changed it to only cars.id. Needs to access the props
2. Tricky One I changed const router = useRouter() to const router = userRoute(). This is a good time to explain the difference of the different routes

CarForm File
1. Create Car I took off the value in editable.value so it never passes the value on the form
2. On the Edit Car I changed it from editable.value to edit.value to show the importance of naming your ref object correctly

Service File
1. getCars() took off the await on the api call
2. In the edit I changed carData.id to id so it is not grabbing any id for the request. So you can do carData.id or you can send the prop id or appState.active.car separately
3. In Create Car I put new Car(res.data) instead of just pushing res.data. I want to emphasize how this is an error if there is no model and show the difference



