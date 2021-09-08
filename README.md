### Task Form

The form has one `textarea` to input the description of the task and a `select` box to select the member to assign. 

`Submit` button  then call a method named `Submit`. This method is returned from a custom `hook` named `useTasks`. What does this `hook` do is get the all `tasks` and `members` data from the api and return them. So when calling `createTask` method it then calling this api 
[https://my-json-server.typicode.com/tri-ad-fed/task-api]('https://my-json-server.typicode.com/tri-ad-fed/task-api)

With the data 
```javascript
{
	"description",
	"memberId"
}
```

After getting the success response from the api it's setting a message to the state named `message` and showing it below `Submit` button.

### Members List

The api has a endpoint `/db` which returns a list of `members` and `tasks`. So I put the members array in a state named `members` and showed them as a select option.